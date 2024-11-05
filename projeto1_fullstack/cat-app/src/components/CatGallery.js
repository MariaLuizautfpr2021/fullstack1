import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function CatGallery({ cats }) {
  return (
    <Row className="justify-content-center gy-4">
      {cats.map((cat) => (
        <Col className="d-flex justify-content-center">
          <Card className="shadow-sm" style={{ borderRadius: '16px', overflow: 'hidden', width: '150px' }}>
            <Card.Img variant="top" src={cat.url} style={{ height: '150px', objectFit: 'cover' }} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CatGallery;