



import  {CardProject}  from "../components/Projects/Project1/CardProject";
import { NavBar } from "../components/Header/navbar";
// import { FooterBar } from "../components/Footer/footerBar";
import { CardProject2 } from "../components/Projects/project2/CardProject2";


import { ParticleProjects } from "../components/BackgroundParticle/ParticleProjects"


export const Projects = () => {



  return (
  <>
    <NavBar></NavBar>
    <ParticleProjects></ParticleProjects>
    <div className="container-project1" style={{position: "relative", zIndex: 1}} >
    <CardProject ></CardProject>
    <CardProject2></CardProject2>
    <h3 style={{color: 'white', textAlign: 'center', margin: '1rem'}}>Aguardem... Em breve novos projetos!</h3>
    </div>
    </>
  )
}
