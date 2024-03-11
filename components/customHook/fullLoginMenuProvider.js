import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the context
const FullLoginMenuContext = createContext();

// Step 2: Create the provider component
export const FullLoginMenuProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // The value that will be available to all consuming components
  const value = { isVisible, setIsVisible };

  return (
    <FullLoginMenuContext.Provider value={value}>
      {children}
    </FullLoginMenuContext.Provider>
  );
};

// Step 3: Create the custom hook for easy consumption
export const useFullLoginMenu = () => {
  const context = useContext(FullLoginMenuContext);
  if (context === undefined) {
    throw new Error('useFullLoginMenu must be used within a FullLoginMenuProvider');
  }
  return context;
};
