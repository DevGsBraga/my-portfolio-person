import { NavBar } from "../components/Header/navbar";
import { ParticlePContacts } from "../components/BackgroundParticle/ParticleContacts";
import MyForm from "../components/Form/Form";


export const Contacts = () => {
  return (
    <>
    <NavBar></NavBar>
    <ParticlePContacts></ParticlePContacts>
    <div className="container-contacts" style={{position: 'relative', zIndex: 1}}>
      <MyForm></MyForm>
    </div>

    </>
  )
}

