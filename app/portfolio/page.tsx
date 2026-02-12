"use client"
import '../styles/portfolio.scss'
import { useState } from 'react';
import React from "react";
import { useEffect } from 'react';
import Image, { ImageProps } from "next/image";
import ModalComponent from '../ModalComponent';



export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    // Initialize image data
    setImages([
      { src: img1Path, alt: "Image 1" },
      // Add other images here...
    ]);
  }, []);

const handleNext = () => {
    const nextIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setSelectedIndex(prevIndex);
  };

  return (
    <div className="flex flex-wrap justify-center w-3/5 mx-auto">
      {images.map((image, index) => (
        <div key={index} className="w-1/3 p-2 " style={{ maxWidth: "320px" }}>
          <Image
            {...image}
            width={320}
            height={200}
            priority
            className=" border-4 border-solid border-purple-800 hover:border-purple-500"
            onClick={() => handleOnClicked(image.src as string, index)}
          />
        </div>
      ))}

      {selectedImage && (
        <ModalComponent
          images={images}
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};
