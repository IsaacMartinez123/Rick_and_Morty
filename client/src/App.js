import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/navbar/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import About from "./components/about/About";
import Deatil from './components/detail/Deatil';
import Error404 from './components/Error/Error404';
import Form from './components/login/Form';
import Favorites from './components/favorites/Favorites';

function App() {
   let [characters, setCharacter] = useState([]);
   
   const navigate = useNavigate();

   const location = useLocation();
   const isHome = location.pathname;

   const [access, setAccess] = useState(false);
   

   const login = async (userData) => {
   
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)

         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert('wrong email or password')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {

      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            
         if (data.name) {
            setCharacter((oldChars) => [...oldChars, data]);
         }else{
            alert('This character has already been added')
         }
         
      } catch (error) {
         alert('There are no characters with this ID');
      }
   }
   
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character =>
         character.id !== id)
         
      setCharacter(charactersFiltered)
   } 

   return (
      <div className='App'>
         
         {isHome !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>}
         <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Deatil id={'id'}/>}/>
            <Route path='/favorites' element={<Favorites/>}></Route>
         </Routes>
         
         
      </div>
   );
}

export default App;
