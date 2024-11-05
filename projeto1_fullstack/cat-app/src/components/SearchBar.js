import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function SearchBar({ onSearch }) {
    const [limit, setLimit] = useState(null); // Inicializamos como null
    const [breed, setBreed] = useState('');
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (limit === null) {
            setError('Por favor, escolha uma quantidade de imagens');
        } else {
            setError('');
            onSearch({ limit, breed });
        }
    };

    return (
        <Form className="mb-4 p-4" style={{ backgroundColor: '#f0f4f8', borderRadius: '8px', width: '100%', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <Form.Group className="mt-3">
                <Form.Label style={{ fontWeight: 'bold', fontSize: '2rem' }}>Quantidade de Imagens:*</Form.Label>
                <div style={{ display: 'flex', marginTop: '16px', marginBottom: '16px' }}>
                    <Form.Check
                        inline
                        label="1"
                        style={{ marginRight: '30px', transform: 'scale(1.5)' }}
                        type="radio"
                        name="imageLimit"
                        checked={limit === 1}
                        onChange={() => setLimit(1)}
                    />
                    <Form.Check
                        inline
                        label="10"
                        style={{ transform: 'scale(1.5)' }}
                        type="radio"
                        name="imageLimit"
                        checked={limit === 10}
                        onChange={() => setLimit(10)}
                    />
                </div>
            </Form.Group>
            <Form.Group controlId="formBreed" className="mt-3">
                <Form.Label style={{ fontWeight: 'bold', fontSize: '2rem' }}>Raça: </Form.Label>
                <Form.Control
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    placeholder="Ex: beng para Bengal"
                    style={{ borderRadius: '8px', border: '1px solid #007bff', width: '180px', padding: '8px', fontSize: '1rem' }}
                />
            </Form.Group>
            {error && <Alert variant="danger" className="mt-3" style={{color: 'red', fontSize: '1.3rem', marginTop: '8px'}}>{error}</Alert>}
            <Button variant="primary" onClick={handleSearch} className="mt-3 w-100" style={{ marginTop: '16px', borderRadius: '8px', fontWeight: 'bold', padding: '8px', backgroundColor: '#007bff', color: 'white' }}>
                Buscar
            </Button>
        </Form>
    );
}

export default SearchBar;