
export const downloadGif = async (gifUrl, name) => {
    try {
      const response = await fetch(gifUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.download = name;
      link.click();
  
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar el GIF:', error);
    }
  };