import { useState, useEffect } from "react";

const images = ["/tchad.jpg", "/ski.JPG", "/tri.jpg", "/foot.jpg", "/moi.JPG"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change d'image toutes les 3s
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="relative w-68 h-96 overflow-hidden rounded-lg">
      {images.map((img, i) => (
        <img
          key={i}
          onClick={prev}
          src={img}
          alt={`slide ${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 cursor-pointer ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}