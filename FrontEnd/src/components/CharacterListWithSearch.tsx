// src/components/CharacterListWithSearch.tsx
import { useState, useEffect } from 'react';
import { Typography, Container, TextField, Card, CardContent, CardMedia } from '@mui/material';

const CharacterListWithSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=2&name=${searchTerm}&species=Human`);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((character: any) => (
          <Card key={character.id} style={{ maxWidth: 200, margin: 10 }}>
            <CardMedia component="img" height="140" image={character.image} alt={character.name} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {character.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CharacterListWithSearch;
