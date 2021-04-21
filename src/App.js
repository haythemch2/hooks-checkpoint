import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Components/Navbar";
import Cardcontainer from "./Components/Cardcontainer";
import React, { useState } from 'react';
import Inputform from './Components/Inputform'

function App() {
  const [page, setPage] = useState('home')
  const [moviesList,setMoviesList] = useState([
    {
      name: "movie1",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description: "description1",
      rating: 5,
    },
    {
      name: "movie2",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description: "description2",
      rating: 2,
    },
    {
      name: "movie3",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description: "description3",
      rating: 4,
    },
    {
      name: "movie4",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description: "description4",
      rating: 3,
    },
  ]);
  return (
    <div className="App">
      <NavMenu onChange={setPage} />
      {(page==='home')?<Cardcontainer list={moviesList} page={page} />:<Inputform onChange={setPage} MoviesList={moviesList} setMovies={setMoviesList}/>};
      {console.log({moviesList  })}
    </div>
  );
}

export default App;
