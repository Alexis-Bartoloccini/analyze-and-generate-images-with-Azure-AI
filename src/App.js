// App.js
import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageAnalysis = async () => {
    try {
      setLoading(true);
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
    } finally {
      setLoading(false);
    }
  };

  const DisplayResults = ({ result, imageUrl }) => {
    return (
      <div>
        <h2>Resultados del Análisis</h2>
        <p>Imagen analizada: {imageUrl}</p>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div>
      {/* ... (interfaz de usuario) */}
      <button onClick={handleImageAnalysis}>Analizar Imagen</button>
      {loading && <p>Analizando imagen...</p>}
      {analysisResult && <DisplayResults result={analysisResult} imageUrl={imageUrl} />}
    </div>
  );
}

export default App;
