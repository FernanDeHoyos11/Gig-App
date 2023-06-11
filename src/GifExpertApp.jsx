import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['SNK']);


  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

        console.log(newCategory);
        setCategories([newCategory, ...categories])
       
  }

  const onClearGif = () => {
    setCategories([])
  }
  
  return (
        <>
          <h1>GifExpertApp</h1>
          
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