export const handleShare = (url) => {
const gifUrl = url; // Reemplaza con la URL del GIF

const shareText = '¡Mira este GIF!';
const encodedShareText = encodeURIComponent(shareText);
const encodedGifUrl = encodeURIComponent(gifUrl);
const whatsappLink = `https://wa.me/?text=${encodedShareText}%0A%0A${encodedGifUrl}`;

window.open(whatsappLink, '_blank');
};

export const handleShare1 = (url, title) => {
    const gifUrl = url; // Reemplaza con la URL del GIF
  
    const shareText = `¡Mira este GIF: ${title}!`;
    const shareUrl = `${shareText} ${gifUrl}`;
    const encodedShareUrl = encodeURIComponent(shareUrl);
    const whatsappLink = `https://web.whatsapp.com/send?text=${encodedShareUrl}`;
  
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.location.href = `whatsapp://send?text=${encodedShareUrl}`;
    } else {
      window.open(whatsappLink);
    }
  };
  