import './App.css';

import SearchMovies from './components/SearchMovies'

function App() {
  return (
    <>
     <div className="header">
         <h1 className="title">Phenomenon Movie World</h1>
    </div>
    <div className="container">
      <SearchMovies />
    </div>
    </>
  );
}

export default App;
