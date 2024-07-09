import "./profile.js"
import"./gallery.js"
import {header} from "./gallery.js"
import"./app.css"

const teamMembers= [{
  name:'Nick Sanders', role:'Team Leader', photo:'photo.url';
  name:'Sophia Green', role:'Organizational Liason' ,photo:'photo.url';
  name:'Steven Jones', role:'Researcher', photo:'photo.url';

}]

function app(){
  return
  <header>
    <Gallery teamMembers={teamMembers}>
    </Gallery>
    <Title> "Our Team"</Title>

  </header>
}
export default app; 