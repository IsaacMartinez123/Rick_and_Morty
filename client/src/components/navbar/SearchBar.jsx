import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState('');
   

   const handleChange = (event) =>{
      event.preventDefault();
      setId(event.target.value)
   }
   
   return (
      <div className="searchbar-container">
         <input className='btn-input' placeholder="Enter the character id" type='search' onChange={handleChange} value={id}/>
         <button className="btn-agregar" onClick={() => {props.onSearch(id); setId('')}}>Add</button>
      </div>
   );
}
