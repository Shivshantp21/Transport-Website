"use client";
import { useState, useEffect, useMemo } from "react";

export default function BackgroundImage() {
  const images = useMemo(
    () => [
      "https://cdn.pixabay.com/photo/2024/03/26/11/57/trucks-8656643_1280.jpg",
      "https://static.vecteezy.com/system/resources/previews/027/101/183/non_2x/a-truck-with-a-trailer-is-driving-on-the-motorway-at-night-with-an-orange-sunny-sunset-in-the-free-photo.jpg",
      "https://cdn.pixabay.com/photo/2016/07/03/22/36/transportation-1495618_1280.jpg",
    ],
    []
  ); // Stable reference for the images array

  const [currentImage, setCurrentImage] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  // Update the background image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images]);

  return (
    <div className=""
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        opacity: 0.21,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        transition: "background-image 1s ease-in-out", // Smooth transition effect
      }}
    >
    </div>
  );
}
