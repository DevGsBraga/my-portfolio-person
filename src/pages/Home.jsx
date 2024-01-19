import ContainerProfile from "../components/Profile/myProfile";
import { HardsSkills } from "../components/HardSkills/mySkills";
import { Particle } from "../components/BackgroundParticle/Particle";
import { NavBar } from "../components/Header/navbar";



export const Home = () => {


  return (<>

    <Particle></Particle>
  <div className="container-home" style={{position: "relative", zIndex: 0}}>
    <NavBar></NavBar>
    <ContainerProfile></ContainerProfile>
    <HardsSkills></HardsSkills>

  </div>
    </>
  )
}
