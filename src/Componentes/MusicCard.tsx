import "../App.css";


type MusicCardProps = {
    src: string;
    title: string;
    autor: string;
    año: number;
    
}

function MusicCard(props: MusicCardProps){
    
    const {src, title, autor, año} = props;
    return (
        <div className="contenedorMusic">
        <article className="cardContent">
            <div className="imgWrapper">
            <img
                className="imagenDisco"
                src={src} />
            <button className="playButton">▶</button>
            </div>
            <h1 className="tituloDisco">{title}</h1>
            <div className="descripcionMusic">
            <p className="autor">{autor}</p>
            <p className="año">({año})</p>
            </div>
        </article>
        </div>

    );
    
}

export default MusicCard;