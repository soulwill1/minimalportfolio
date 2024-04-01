import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
