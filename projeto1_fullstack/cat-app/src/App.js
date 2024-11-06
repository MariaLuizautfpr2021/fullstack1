import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner, ThemeProvider, Row, Alert } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import { CatProvider, CatContext } from './contexts/CatContext';

const CatGallery = lazy(() => import('./components/CatGallery'));

function App() {
  return (
    <CatProvider>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
      >
        <Container className="d-flex flex-column align-items-center py-5" style={{ maxWidth: '600px' }}>
          <h1 className="text-center mb-4" style={{ color: '#007bff', fontSize: '2.5rem', textAlign: 'center' }}>Galeria de Gatos 😸</h1>
          <SearchBar />

          <CatContext.Consumer>
            {({ error }) => (
              error && (
                <Alert variant="danger" className="mt-4" style={{ width: '100%' }}>
                  {error}
                </Alert>
              )
            )}
          </CatContext.Consumer>

          <Suspense fallback={<Spinner animation="border" className="d-block mx-auto mt-5" />}>
            <Row className="justify-content-center gy-4">
              <CatGallery />
            </Row>
          </Suspense>
        </Container>
      </ThemeProvider>
    </CatProvider>
  );
}

export default App;
