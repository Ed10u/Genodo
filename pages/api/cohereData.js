import React, { useState } from 'react';
import { CohereClient } from 'cohere-ai';

// Initialize Cohere outside the component if it doesn't depend on component props or state
const cohere = new CohereClient({
  token: "9HYNh54r9E46t287oIoqJI9P2MPk3LSRZNstFpT0", // Ensure you're handling your API keys securely
});

const MyComponent = () => {
  const [prediction, setPrediction] = useState('');

  const fetchPrediction = async () => {
    try {
      const response = await cohere.generate({
        model: "command",
        prompt: "You are a doctor. Explain what sickle cell disease is. Tell me the symptoms, and possible treatment plans.",
        maxTokens: 300,
        temperature: 0.9,
        k: 0,
        stopSequences: [],
        returnLikelihoods: "NONE"
      });
      setPrediction(response.generations[0].text);
    } catch (error) {
      console.error("Error fetching prediction: ", error);
      setPrediction('Failed to fetch prediction.');
    }
  };

  return (
    <div>
      <button onClick={fetchPrediction}>Get Prediction</button>
      <p>{prediction}</p>
    </div>
  );
};

export default MyComponent;


