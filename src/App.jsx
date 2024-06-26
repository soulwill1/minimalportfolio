import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Projects />
      </div>
    </>
  )
}

export default App
