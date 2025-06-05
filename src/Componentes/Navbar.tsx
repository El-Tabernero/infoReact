import { Home, Heart, Star, Music } from "lucide-react"; 
import "../App.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div>
        <img className="logoYT"src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YouTube_Music_logo.width-1300.png" 
        alt="YTmusicLogo" />
      </div>
      <ul className="sidebar-menu">
        <li><Home size={20} /> <span>Inicio</span></li>
        <li><Heart size={20} /> <span>Favoritos</span></li>
        <li><Star size={20} /> <span>Recomendados</span></li>
        <li><Music size={20} /> <span>Todos los discos</span></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
