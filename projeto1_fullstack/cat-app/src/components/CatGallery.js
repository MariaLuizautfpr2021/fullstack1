import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CatContext } from '../contexts/CatContext';

function CatGallery() {
  const { cats } = useContext(CatContext); 

  return (
    <Row className="justify-content-center gy-4">
      {cats.map((cat) => (
        <Col key={cat.id} className="d-flex justify-content-center">
          <Card className="shadow-sm" style={{ borderRadius: '16px', overflow: 'hidden', width: '200px' }}>
            <Card.Img variant="top" src={cat.url} style={{ height: '150px', objectFit: 'cover' }} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CatGallery;
