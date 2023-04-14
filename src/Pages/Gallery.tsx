import React, { useState } from "react";
import { Container, Row, Col, Card, CardImg, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Item 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Item 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Item 3",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const GalleryPage: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const toggle = () => setModal(!modal);

  const handleCardClick = (item: GalleryItem) => {
    setSelectedItem(item);
    toggle();
  };

  return (
    <Container>
      <Row>
        {galleryItems.map((item) => (
          <Col md={4} key={item.id}>
            <Link to={`/gallery/${item.id}`}>
              <Card>
                <CardImg top width="100%" src={item.imageUrl} alt={item.title} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedItem?.title}</ModalHeader>
        <ModalBody>
          <img src={selectedItem?.imageUrl} alt={selectedItem?.title} />
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default GalleryPage;
