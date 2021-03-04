import React, { useEffect, useState } from "react";
import Card from "./Card";
import Form from "./Form";
export default function HomePage() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    let data = await fetch();
    let result = await data.json();
    return result;
  };

  return (
    <div>
      <Form setQuery={setQuery} />
      {images.map((image) => (
        <Card image={image} />
      ))}
    </div>
  );
}
