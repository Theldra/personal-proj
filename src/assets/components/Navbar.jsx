import { Camera } from 'lucide-react';

const Navbar = () => {
    return <nav>
        <div>
        <span>
        <Camera color="black" size={60} />
        </span>
        <h1>Capture</h1>
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <p>Follow Us Here!</p>
    </nav>
}

export default Navbar;