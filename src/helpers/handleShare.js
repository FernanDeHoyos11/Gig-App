export const handleShare = (url) => {
const gifUrl = url; // Reemplaza con la URL del GIF

const shareText = '¡Mira este GIF!';
const encodedShareText = encodeURIComponent(shareText);
const encodedGifUrl = encodeURIComponent(gifUrl);
const whatsappLink = `https://web.whatsapp.com/send?text=${encodedShareText}%0A%0A${encodedGifUrl}`;

window.open(whatsappLink, '_blank');
};