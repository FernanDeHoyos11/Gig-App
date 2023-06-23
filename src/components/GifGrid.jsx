
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";
import { useState } from "react";
import PropTypes  from "prop-types";

export const GifGrid = ({category}) => {
  
  const {images, isLoading} = useFetchGif(category);
  const [limit, setLimit] = useState(10);

  const moreGif = () => {
    setLimit(preLimit => preLimit +5);
  }

    return (
        <>
          <h3>{category}</h3>

          { isLoading ? (<h2>Cargando...</h2>) : null }

          <div className="card-grid">{
              images.slice(0, limit).map( (image) => (
                <GifItem
                   key={ image.id}
                   title={image.title}
                   url={image.url} 
                   // o {...image} para las props 
                />
                ))
                
              }
              
              </div>
              {images.length > limit && (
              <button className="btnShowMore" onClick={moreGif}>Ver más</button>
      )}
        </>
    );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}