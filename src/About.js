import Footer from "./Footer";
import NavB from "./NavB";

import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <NavB></NavB>
      <h1 id="heading">MAKE YOUR OWN CINEMA</h1>
      <div id="abtDiv">
      
        <div>
          <h1>About Us</h1>
          <h3>Provide Fresh And Quality HD Movies</h3>
          <p>Movies can help develop children's cognitive skills, such as forming long-term memory, maintaining focus, developing logic, reasoning, visual and auditory processes. Movies bring up many conversation scenes that can help introduce children to a lot of vocabulary and pronunciation.</p>
          <p>Movies are important for several reasons. Firstly, they are a powerful medium for storytelling, allowing us to experience different emotions, perspectives, and cultures through the characters and narratives presented on screen. Movies can entertain, inspire, educate, and inform us in a way that few other mediums can.</p>
        <Link to="/ByeOnline"> <button id="onlnBtn">Buy Online</button></Link>
        </div>
        <div>
          <img src="https://thumbs.dreamstime.com/b/happy-teenagers-popcorn-watching-movie-isolated-white-background-flat-illustration-web-ai-generated-309184150.jpg" style={{height:"450px"}}></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default About;
