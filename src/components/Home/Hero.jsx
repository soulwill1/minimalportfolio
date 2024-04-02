import { backgrounds } from "../../constants";
import Socials from "./Socials";
import Button from '../Button';
import { Gradient } from "../design/Hero";
import curve from "../../assets/hero/curve.png";

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
                  className="border rounded-2xl backdrop-blur bg-conic-gradient p-0.5"
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
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="curve"
                />
              </span>
            </h3>
            <p className="text-n-8 pt-10">
              Sou desenvolvedor full stack especializado em front-end, elevo projetos<br/> 
              de forma visual criando websites responsivos e com interfaces funcionais. 
            </p>
            <a href="" className="">
              <Button className="text-n-8 mt-10">
                FALE COMIGO
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero