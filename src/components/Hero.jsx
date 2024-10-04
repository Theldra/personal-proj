
import pic from "../assets/images/ast0.jpeg"
import cam from "../assets/images/ast1.jpeg"
import cip from "../assets/images/ast2.jpeg"
import pose from "../assets/images/ast3.jpeg"
import shot from "../assets/images/ast4.jpeg"
import pics from "../assets/images/ast5.jpeg"
import snap from "../assets/images/ast6.jpeg"
import cmr from "../assets/images/ast7.jpeg"
import take from "../assets/images/ast8.jpeg"
import camr from "../assets/images/ast9.jpeg"
import see from "../assets/images/ast10.jpeg"
import art from "../assets/images/ast11.jpeg"

const Hero = () => {
    return(
        <div className="grid grid-cols-3 w-3/4  ml-72">
          <img src={pic} alt=""/>  
          <img src={cam} alt=""/>  
          <img src={cip} alt="" />
          <img src={pose} alt="" />  
          <img src={shot} alt="" />
          <img src={pics} alt="" />
          <img src={snap} alt="" />
          <img src={cmr} alt="" />
          <img src={take} alt="" />
          <img src={camr} alt="" />
          <img src={see} alt="" /> 
          <img src={art} alt="" /> 
        </div>

    )
};

export default Hero;