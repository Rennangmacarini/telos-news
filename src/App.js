import './App.css';
import { Banner } from './components/banner';
import HeaderNoticia from './components/headerNoticia';
import { Noticia } from './pages/Noticia';


function App() {
  return (
    <div className="App">
      <HeaderNoticia/>
      <Banner/>
      <div className="mainScroll"> 
       <Noticia/>
      </div>
    </div>
  );
}

export default App;
