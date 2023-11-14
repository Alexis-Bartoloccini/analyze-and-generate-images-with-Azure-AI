import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageAnalysis = () => {
    // Lógica para el análisis de imágenes (se agregará en ejercicios siguientes)
    console.log('Análisis de imágenes');
  };

  const handleImageGeneration = () => {
    // Lógica para la generación de imágenes (se agregará en ejercicios siguientes)
    console.log('Generación de imágenes');
  };

  return (
    <div>
      <h1>Mi Aplicación de Análisis de Imágenes</h1>
      <label htmlFor="imageUrl">URL de la Imagen:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br />
      <button onClick={handleImageAnalysis}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>
    </div>
  );
}

export default App;
