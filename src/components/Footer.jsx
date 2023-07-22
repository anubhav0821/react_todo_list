import React from 'react';

var year = new Date().getFullYear();
function Footer (){
    return(
        <footer>
            Copyright {year}
        </footer>
    )
}

export default Footer;