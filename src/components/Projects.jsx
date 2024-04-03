import { projects, projectschoice } from "../constants";
import Heading from "./universal/Heading";

const Projects = () => {
  return (
    <section className="max-w-[80rem] mx-auto min-h-screen pt-[7rem]" id="projects">
        <div className="container relative z-2">
            <Heading 
              className="md:max-w-md lg:max-w-2xl text-n-8"
              title="Projetos selecionados"
              text="Já embarquei em muitos projetos, mas estes eu guardo no coração."
            />
            <div className="flex justify-center gap-10">
                {projectschoice.map((item) => (
                    <div key={item.id}>
                        <a href="">
                            <button className="text-n-1 p-4 px-8 bg-n-8 rounded-lg font-light">
                                {item.title}
                            </button>
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <div className=" relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[6rem] md:pt-3">
                    {projects.map((item) => (
                        <div key={item.id}>
                            <a href="">
                                <div className="relative bg-n-1 rounded-2xl shadow-sm w-full min-h-[30rem] z-2
                                flex-col p-3">
                                    <h5 className="text-n-8 font-medium">{item.title}</h5>
                                    <p className="text-n-3 font-light pb-6">{item.subtitle}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects