import { backgrounds } from "../../constants";
import Socials from "./Socials";
import { Gradient } from "../design/Hero";

const Hero = () => {
  return (
    <section className="max-w-[80rem] mx-auto min-h-screen pt-[7rem]" id="hero">
      <div className="container relative">
        <div className="relative flex max-sm:flex-col pt-[5rem] lg:pt-[10rem] 2xl:pt-[20rem] gap-[3rem] items-center justify-center">
          <Socials />
          <div className="lg:order-1">
            {backgrounds.map((item) => (
              <div className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] animate-profile"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <img
                  src={item.imageUrl} 
                  alt={item.title} 
                  width={400}
                  height={400}
                  className="border rounded-2xl backdrop-blur p-0.5"
                />
                <Gradient />
              </div>
            ))}
          </div>
          
          <div className="">
            <h1 className="h1 text-n-8">
              Olá, sou o William Veríssimo.
            </h1>
            <h3 className="h5 text-n-8">
              <span className="inline-block relative">
                Desenvolvedor Web
                <div className="w-[20rem] h-0.5 bg-n-8"></div>
              </span>
            </h3>
            <p className="text-n-8 pt-10">
              Sou desenvolvedor full stack especializado em front-end, elevo projetos<br/> 
              de forma visual criando websites responsivos e com interfaces funcionais. 
            </p>
            <a href="" className="">
              <button className="text-n-1 mt-10 bg-n-8 rounded-lg p-4 px-8 font-light">
                FALE COMIGO
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero