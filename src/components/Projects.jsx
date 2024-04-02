import { projects } from "../constants"
import Button from "./Button"
import Heading from "./universal/Heading"

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
                {projects.map((item) => (
                    <div key={item.id}>
                        <a href="">
                            <Button className="text-n-8">
                                {item.title}
                            </Button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects