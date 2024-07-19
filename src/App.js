
import './App.css';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Home from './components/home';
import ImageSlider from './components/imageslider';
import Navbar from './components/navbar';
import Softskill from './components/professionalskills';
import Projects from './components/project';
import Services from './components/Services';
import Skills from './components/skill';
import Techstack from './components/techstack';
import Content from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="app">
     <Navbar/>
     <Home/>
     <About/>
     <Education/>
     <Experience/>
     <Services/>
     <Techstack/>
     <Skills/>
     <Softskill/>
     <Projects/>
     <ImageSlider/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
