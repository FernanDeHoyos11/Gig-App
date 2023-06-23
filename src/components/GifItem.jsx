import PropTypes  from "prop-types";
import { downloadGif } from "../helpers/download";
import { handleShare } from "../helpers/handleShare";



export const GifItem = ({ id, title, url }) => {
const handleDownload = () => {
    downloadGif(url, title);
  };
    
const Share = () => {
    handleShare(url, title)
}
    

    return (
        <div className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
            <div className="div-share">
                <button className="btn-share" onClick={Share}>Compartir</button>
                <button className="btn-down" onClick={handleDownload}>Descargar</button>
            </div>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}