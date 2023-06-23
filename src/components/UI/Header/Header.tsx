import React from "react";

/**Components */

/*Icons */
import {ReactComponent as Logo} from '../../../global/assets/logo.svg';

/*Style */
import './Header.style.scss'

const Header = () => {
    return (
        <header>
            <Logo />
        </header>
    )
}

export default Header;