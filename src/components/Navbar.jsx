import { Camera } from 'lucide-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return <nav className='bg-rose-500 h-dvh fixed p-16 items-center'>
        <div>
        <span>
        <Camera color="black" size={60} />
        </span>
        <h1>Capture</h1>
        </div>
        <ul className='pt-16 ml-8'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <p className='pt-24'>Follow Us Here!</p>
        {/* <div>
            <span>
                <FontAwesomeIcon icon={faFacebook} fontSize="25px" /> 
            </span>
            <span>
                <FontAwesomeIcon icon={faTwitter} fontSize="25px" />
            </span>
            <span>
                <FontAwesomeIcon icon={faInstagram} fontSize="25px" />
            </span>
            <span>
                <FontAwesomeIcon icon={faLinkedin} fontSize="25px" />
            </span>
        </div> */}
    </nav>
}

export default Navbar;