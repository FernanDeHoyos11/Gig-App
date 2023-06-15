import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['SNK']);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
       
  }

  const onClearGif = () => {
    setCategories([])
  }
  
  return (
        <>
          <h2>GifExpertApp</h2>
          
          <AddCategory onNewCategory={event => onAddCategory(event)}/>

          <button className="buttom-delete" onClick={onClearGif}>Borrar</button> 
          
            {categories.map(category => {
              return (
                  <GifGrid 
                  key={category}
                  category={category}
                  />
              )
            })}
        
        </>
    )
}