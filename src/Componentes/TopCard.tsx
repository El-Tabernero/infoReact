import MusicCard from "./MusicCard";

type Disco = {
    title: string;
    autor: string;
    año: number;
    src: string;
};



type TopCardProps ={
    titulo: string;
    descripcion?: string;
    discos: Disco[];
};

function TopCards(props: TopCardProps){
    const {titulo, descripcion, discos} = props;
    return(
        <section className="tarjetaTopup">
            <h1 className="tituloTopCard">{titulo}</h1>
            <p>{descripcion}</p>
            <div className="tarjetaTop">
                {discos.map((discos,index)=>
                    <MusicCard 
                        key={index}
                        title={discos.title}
                        autor={discos.autor}
                        año={discos.año}
                        src={discos.src}

                 />
                )}
            </div>
        </section>

    )
}

export default TopCards;

