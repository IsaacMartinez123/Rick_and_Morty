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
         <button className="btn-agregar" onClick={() => {props.onSearch(id); setId('')}}><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span></button>
      </div>
   );
}
