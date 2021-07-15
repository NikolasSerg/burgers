import background from '../assets/img/404.jpg'
import HomeButton from './HomeButton';

export default function NotFound () {
    let style = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
    }
    let alarm = {
        fontSize: '65px',
        fontWeight: 'bold',
        color: '#e55c03',
        margin: '0',
        fontFamily: "'Caveat', cursive",
        textShadow: '4px 4px 2px rgba(150, 150, 150, 0.8)',
        padding: '-200px'
    }
    let wraper = {
        padding: '3rem',
        backdropFilter: 'blur(4px)',
        background: 'rgba(255,255,255,0.5)'
    }
    return(
        <div style={style} className='container center'>
            <div style={wraper} className='container center'>
                <h1 style={alarm}>SORRY</h1>
                <h2 style={{color: '#e55c03', textDecoration: 'underline'}}>this page not found</h2>
                <HomeButton />
            </div>

        </div>
    )
}