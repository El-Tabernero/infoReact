import './App.css';
import TopCards from './Componentes/TopCard';
import { favoritos, recomendados, recomendacion2, banda} from "./data/discos"
import Container from './Componentes/Container';
import Sidebar from './Componentes/Navbar';



function App() {
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <div style={{marginLeft: "200px", width: "100%"}}>
        <TopCards titulo="Favoritos del Mes" discos={favoritos}/>
        <Container>
        <TopCards titulo="Recomendados" discos={recomendados} />
        </Container>
        <TopCards titulo="Grandes Album" discos={recomendacion2}/>
        <TopCards titulo="Conocé esta banda!" discos={banda}/>
      </div>
    </div>
    
    
  )
}


export default App
