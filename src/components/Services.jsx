import ClipPath from "../assets/svg/ClipPath"
import { services } from "../constants"
import Heading from "./universal/Heading"
import Arrow from "../assets/svg/Arrow";

const Services = () => {
  return (
    <section className="max-w-[80rem] mx-auto min-h-screen pt-[7rem]" id="services">
        <div className="container relative z-2">
            <Heading 
              className="md:max-w-md lg:max-w-2xl text-n-8"
              title="Os melhores serviços para dar vida às suas ideias"
            />
            <div className="flex flex-wrap gap-10 mb-10 pt-20">
              {services.map((item) => (
                <div 
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  key={item.id}
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                    <h5 className="h5 mb-5 text-n-8">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-8">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img 
                        src={item.icoUrl} 
                        alt={item.title}
                        width={48}
                        height={48}
                      />
                      <p className="ml-auto font-code text-xs tracking-wider font-bold uppercase text-n-8 ">
                        <a href="">Saiba mais</a>
                      </p>
                      <a href=""><Arrow/></a>
                    </div>
                  </div>
                  <div 
                    className="absolute inset-0.5 "
                    style={{ clipPath: "url(#services)"}}
                  >
                    <div className="absolute inset-0 opacity-20 ">
                      {item.imgUrl && (
                        <img 
                          src={item.imgUrl} 
                          alt={item.title}
                          width={380} 
                          height={362}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                    </div>
                  </div>
                  <ClipPath />
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Services