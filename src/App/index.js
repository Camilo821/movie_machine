import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { AppUI } from './AppUI'
import { MovieProvider } from '../MovieContext';
//const Swal = require('sweetalert2')
//const defaultMovies = [
//  { text:"Cortar cebolla", completed: false },
//  { text:"Tomar el curso de intro a React", completed: true },
//  { text:"Llorar con la llorona", completed: true },
//  { text:"Ver los partidos del mundial", completed: false},
//  { text:"Terminar el curso de react", completed: false}
//];



function App() {
  
//  console.log('render (antes)')
//  React.useEffect(() => {
//    console.log('use effect')
//  }, [totalMovies])
//  console.log('render (luego)')
  return (
    <MovieProvider>
      <AppUI/>
    </MovieProvider>
  );
}
// props.nombre de la propiedad o props.children para poner el hijo en el render
export default App;
