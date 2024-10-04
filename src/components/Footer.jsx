const Footer = () => {
    return(
    <>
    <div className="bg-neutral-900 text-white">
    <div className="flex ml-72 p-12 justify-between">
        <div>
            <h2>Category</h2>
            <ul>
                <li>Photography         (6)</li>
                <li>Fashion         (6)</li>
                <li>Technology         (6)</li>
                <li>Travel         (6)</li>
            </ul>
        </div>
        <div>
            <h2>Archives</h2>
            <ul>
                <li>November 2018         (105)</li>
                <li>October 2018         (212)</li>
                <li>September 2018         (150)</li>
                <li>August 2018         (100)</li>
                <li>July 2018         (200)</li>
            </ul>
        </div>
        <div>
            <h3>Have any Questions?</h3>
            <span>location icon</span><p>203 Fake St. Mountain View, San Francisco, <br /> California, USA
            </p>
            <span>mobile icon</span><p>=23348965990</p>
            <span>mail icon</span><p>info@domain.com</p> 
        </div>  
    </div>
    <div className="py-12 ml-80 items-center">
    <p>Copyright ©2024 All rights reserved | This template is made with <span>love icon</span> by Ethy</p>
    </div>
    </div>
     
    </>
    )
};

export default Footer;