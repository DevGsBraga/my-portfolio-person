



import  {CardProject}  from "../components/Projects/Project1/CardProject";
import { NavBar } from "../components/Header/navbar";
// import { FooterBar } from "../components/Footer/footerBar";
import { CardProject2 } from "../components/Projects/project2/CardProject2";


import { ParticleProjects } from "../components/BackgroundParticle/ParticleProjects"


export const Projects = () => {








  return (
  <>
    <ParticleProjects></ParticleProjects>
  <div className="container-project1" style={{position: "relative", zIndex: 1}} >
    <NavBar></NavBar>
    <CardProject ></CardProject>
    <CardProject2></CardProject2>
  </div>
    </>
  )
}
