import { Camera } from 'lucide-react';


const Navbar = () => {
    return <nav className='bg-rose-500 h-dvh fixed p-4'>
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
        <div>
            <span>
               
            </span>
            <span>
                
            </span>
        </div>
    </nav>
}

export default Navbar;