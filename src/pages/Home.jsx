import ContainerProfile from "../components/Profile/myProfile";
import HardSkills from "../components/HardSkills/mySkills";
// import AboutMe from "../components/AboutMe/description";
import { Particle } from "../components/BackgroundParticle/Particle";
// import { FooterBar } from "../components/Footer/footerBar";
import { NavBar } from "../components/Header/navbar";


export const Home = () => {
  return (<>

    <Particle></Particle>
  <div className="container-home" style={{position: "relative", zIndex: 1}}>
    <NavBar></NavBar>
    <ContainerProfile></ContainerProfile>
    {/* <AboutMe></AboutMe> */}
    <HardSkills></HardSkills>
    {/* <FooterBar></FooterBar> */}
  </div>
    </>
  )
}
