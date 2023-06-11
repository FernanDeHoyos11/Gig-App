

export const handleShare = (url, title) => {
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
  