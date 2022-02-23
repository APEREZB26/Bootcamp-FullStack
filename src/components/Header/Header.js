import './header.css'; 
import { Link } from "react-router-dom";


export default function Header(props) {
    const Username = props.Username;
    return(
        <div className="headCont">
            <nav>
                <Link to="/" className='li'>Inicio</Link>
                <Link to="/cursos" className='li'>Cursos</Link>
                <Link to="/videos" className='li'>Videos</Link>
            </nav>
            <span className='user'>{Username}</span>
        </div>
    )
}