import { downloadGif } from "../helpers/download";
import { handleShare1 } from "../helpers/handleShare";



export const GifItem = ({ id, title, url }) => {
const handleDownload = () => {
    downloadGif(url, title);
  };
    
const Share = () => {
    handleShare1(url)
}
    

    return (
        <div className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
            <div className="div-share">
                <button className="btn-share" onClick={Share}>Compartir</button>
                <button className="btn-share" onClick={handleDownload}>Descargar</button>
            </div>
        </div>
    )
}