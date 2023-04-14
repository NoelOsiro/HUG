import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { GalleryItem, galleryItems } from "./Gallery";

interface RouteParams {
  [key: string]: string | undefined;
  id?: string;
}

const GalleryItemPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const selectedItem = id ? galleryItems.find((item) => item.id === parseInt(id)) : null;

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <Container>
      <h1>{selectedItem.title}</h1>
      <img src={selectedItem.imageUrl} alt={selectedItem.title} />
    </Container>
  );
};

export default GalleryItemPage;
