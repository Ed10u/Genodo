import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled component for the image wrapper
const ImagesWrapper = styled.div`
    line-height: 0;
    column-count: 1;
    display: inline-block;

    img {
        width: 100%;
        height: 100%;
        margin-bottom: 0px;
    }
`;

const ImageGallery = ({ searchQuery }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!searchQuery) return;

        const fetchImages = async () => {
        try {
            // Replace this URL with your server-side endpoint that proxies the Pexels API call
            const url = '/api/fetchImages'; 
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchTerm: searchQuery }),
            });

            if (!response.ok) throw new Error('Failed to fetch images');

            const data = await response.json();
            console.log(data.photos);
            setImages(data.photos);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };
    if (searchQuery){
        fetchImages();
    }
    }, [searchQuery]);

    return (
        <ImagesWrapper>
        {images.map((image) => (
            < img key={image.id} src={image.src.large} alt={image.alt} />
        ))}
        </ImagesWrapper>
    );
};


export default ImageGallery;

