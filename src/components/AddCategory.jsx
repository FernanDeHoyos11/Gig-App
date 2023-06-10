import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('SNK');
   
const onChange = (event) => {
     setInputValue(event.target.value)
     
}

const submit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
     onNewCategory( inputValue.trim())
     setInputValue('') 
}
     return(
        <form onSubmit={submit}>
            <input 
               type="text"
               placeholder="Buscar Gif"
               value={inputValue}
               onChange={onChange}
         />
        </form>
     )
}
