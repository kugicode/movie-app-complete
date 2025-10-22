import { useState } from 'react'
import './App.css'
import axios from 'axios';
import MovieDetails from './pages/MovieDetails';
import HomePage from './pages/HomePage';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
const [movie, setMovie] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [result, setResult] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

async function fetchMovieData(){

try{
  setIsLoading(true);
const API_URL = `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${import.meta.env.VITE_API_KEY}`;
const { data } = await axios.get(API_URL);



if (data.results.length === 0) {
  setErrorMessage('No movies found!');
  setResult([]); // Clear results if nothing found
} else {
  setErrorMessage('');
  setResult(data.results); // Set results if found

}


  setIsLoading(false)

}

catch(error){
setIsLoading(false);
setErrorMessage('An error has occured!');
console.error('Something went wrong! ', error);
}
  
}

  return (

    
    <>

    <Router>
      <nav>
      <Link to='/' className="button-style">Home</Link>
      <Link to='/about' className="button-style">About</Link>
      </nav>
      <Routes>
      <Route path="/" element={ <HomePage
          movie={movie}
          setMovie={setMovie}
          fetchMovieData={fetchMovieData}
          isLoading={isLoading}
          errorMessage={errorMessage}
          result={result}
        />
      
        
      }
    
    />
    
      <Route path="/movie/:id" element={<MovieDetails />}/>

      <Route path='/about' element={<About />}/>

      </Routes>
      <div>

      </div>
    </Router>


    </>
  )
}

export default App