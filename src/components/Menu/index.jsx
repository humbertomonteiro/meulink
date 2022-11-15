import './Menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
       <div className="menu">
        <a href="https://www.youtube.com/channel/UCgCqHdG7pRFdSTC2YXPlOnQ" target='_blanck' className="social">
            <BsYoutube color='#fff' size={24}/>
        </a>
        <a href="https://www.instagram.com/humberto.fh/" target='_blanck' className="social">
            <BsInstagram color='#fff' size={24}/>
        </a>
        <Link className='menu-item' to={'/links'}>
            Meus Links
        </Link>
       </div>
    )
}