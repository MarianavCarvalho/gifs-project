import './App.css';
import Gifs from "./Gifs";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Gifs defaultKeyword="smile"/>
        </main>
   <footer> 
      This project was coded by Mariana Carvalho and is open sourced on <a href="https://github.com/MarianavCarvalho/gifs-project">GitHub</a>
    </footer>
      </div>
     </div>
  );
}

