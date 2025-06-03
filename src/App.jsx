import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Sections/HomePage'
import AboutMe from './Sections/AboutMe'
import FloatingParticles from './Components/ParticulasFlotantes'
import ProjectsSection from './Sections/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FloatingParticles />
    <HomePage />
    <AboutMe />
    <ProjectsSection />
    </>
  )
}

export default App
