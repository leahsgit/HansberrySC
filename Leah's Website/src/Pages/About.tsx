import "./About.css";
import profileImage from "../assets/Leah1.png";
import TTSButton from "../components/TextToSpeechButton";


export function About() {
   const aboutText = `
      About. 

      Leah Handsberry is providing NDIS Support Coordination for people in South Australia.

      If you're looking for someone to help manage your NDIS plan and make the most of the services you can access, I'm your girl.
      I've worked in the NDIS sector for a few years now and know exactly what makes a plan, and how to best utilise one to meet your goals.

      What does a support coordinator do?
      Lots of things! I help manage funding, gather reports, and make sure your supports are working for you.
      I also help you start, stop or change services.

      How much does a support coordinator cost?
      Support coordination is funded through your NDIS plan, so you do not pay anything out of pocket.
    `;


  return (
  
    <div className="about-container">
      <TTSButton text={aboutText} />
         <h1 className="page-title"><span className="extended-underline">About</span></h1>
       <h2 className="about-header">
       <span style={{ fontWeight: 'bolder', color: 'black', textAlign: 'center' }}>Leah Hansberry</span> is providing NDIS Support Coordination for people in South Australia!
       </h2>

      <img 
  src={profileImage} 
  alt="Leah Hansberry" 
  className="about-image"
/>

      <p>If you're looking for someone to help manage your NDIS plan, and make the most of the services that you can access, I'm your girl! I've worked in the NDIS sector for a few years now and know exactly what makes a plan, and how to best utilise one to meet your goals. </p>
      <p>If you or a loved one have an NDIS plan and aren't confident that your're utilising it to its fullest, please fill out a <span style={{ fontWeight: 'bold', color: 'black' }}> referral</span> and I'll be in contact!</p>
      <h2> <span style={{ fontWeight: 'bolder', color: 'black' }}> What does a support coordinator do?</span></h2>
      <p>Lots of things! A lot of my job is spent behind the scenes, making sure that funding is available when we need it, and gathering reports and information from your providers. However, I'm also the person you call when you want to start, stop or change support.</p>
    <p>I can recommend providers I've worked with before, and oversee the whole plan to make sure you're getting the most out of it without being overwhelmed (as the NDIS makes it very easy to do)!</p>
    <h2> <span style={{ fontWeight: 'bolder', color: 'black' }}> How much does a support coordinator cost?</span></h2>
    <p>If your NDIS plan includes funding for coordination of supports, then it's covered! Support Coordinators
can charge at level one, two, or three rates (depending on the complexity and requirements), but level two
coordination, the most common type, is billed at $100.14 per hour. If your plan does not include support coordination funding, that's fine as well! The $100.14 per hour can be
paid privately, and we can work on an application to add SC funding to your plan.</p>
    
     
    </div>
  )
}

export default About