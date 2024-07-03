import img from '../../assets/shop1.png';
import './cardwiget.css';

function CardWiget(props){
    return(
        <>
        <div className="d-flex gap-2 justify-content-center align-items-center cuerpo">
            <img src={ img } alt="shop" className='img'/>
            <span>{props.cantidad}</span>
        </div>
        </>
    );
}

export default CardWiget;