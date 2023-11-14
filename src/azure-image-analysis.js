// azure-image-analysis.js
import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  const apiKey = 'e2b4365b1ac34af29fcc0588cb180d41'; // Reemplaza con tu clave de API
  const endpoint = 'https://computeralexis.cognitiveservices.azure.com/'; // Reemplaza con tu punto de conexión

  const apiUrl = `${endpoint}/vision/v3.0/analyze?visualFeatures=Description,Tags,Adult&details=Celebrities,Landmarks&language=en`;

  try {
    const response = await axios.post(apiUrl, { url: imageUrl }, { headers: { 'Ocp-Apim-Subscription-Key': apiKey } });
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
};

export default analyzeImage;
