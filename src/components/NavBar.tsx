// Barra de navegación
import { useState } from 'react';
import './scss/navbar.scss';


export const NavBar = () => {
    const [viewMenu, setViewMenu] = useState(false)

    const handleMenuClick = () => {
        setViewMenu ( !viewMenu )
        console.log ('SE HA DADO CLICK...', viewMenu)
    }

    return (
        <div className="container-nav">
            <nav className='nav-shorteurl'>
                <article className="logo-shorteurl">
                    <img src="/images/logo.svg" 
                    alt="Logo Url" />
                </article>
                <article className={ !viewMenu ? `menu-shorteurl` : `menu-shorteurl view-menu`}>
                    <ul className="options_menu">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                    { viewMenu ? (<hr />) : ``} 
                    <ul className="login_menu">
                        <li>Login</li>
                        <li>
                            <button>Sign Up</button>
                        </li>
                    </ul>

                </article>
                <div className="icono-menu"
                    onClick={ handleMenuClick }
                >
                    <img 
                        src={ !viewMenu ? `/images/icon-hamburger.svg` : `/images/icon-close.svg`} 
                        alt="Menu" 
                    />
                        
                </div>
            </nav>
        </div>
    )
}
