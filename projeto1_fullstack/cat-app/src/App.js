import React, { useState, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner, ThemeProvider, Row } from 'react-bootstrap';
import SearchBar from './components/SearchBar';

const CatGallery = lazy(() => import('./components/CatGallery'));

function App() {
  const [cats, setCats] = useState([]);

  const handleSearch = async ({ limit, breed }) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed}`
    );
    const data = await response.json();
    setCats(data);
  };

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Container className="d-flex flex-column align-items-center py-5" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4" style={{ color: '#007bff', fontSize: '2.5rem', textAlign: 'center' }}>Galeria de Gatos 😸</h1>
        <SearchBar onSearch={handleSearch} />
        <Suspense fallback={<Spinner animation="border" className="d-block mx-auto mt-5" />}>
          <Row className="justify-content-center gy-4">
            <CatGallery cats={cats} />
          </Row>
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}

export default App;