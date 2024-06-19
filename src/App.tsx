import Header from "./components/navigations/header"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Resumes from "./components/resume"

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Resumes />
      <div className="text-2xl text-gray-800 font-bold">inittial profile</div>
    </>
  )
}

export default App
