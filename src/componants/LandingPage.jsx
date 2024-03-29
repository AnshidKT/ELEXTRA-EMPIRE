import FirstBody from "./home/FirstBody";
import SecondBody from "./home/SecondBody";
import ThrdBody from "./home/ThrdBody";
import ForthBody from "./home/ForthBody";
import FifthBody from "./home/FifthBody";
import Footer from "./home/Footer";
import HomeNav from "./home/HomeNav";
import { useEffect } from "react";

const LandingPage = ({setshow,handleClick,size}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <HomeNav setshow={setshow}  size={size}  />


      <FirstBody />
       <SecondBody/>
      <ThrdBody />
      <ForthBody />
      <FifthBody />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
