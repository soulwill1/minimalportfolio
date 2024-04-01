import { socials } from "../../constants";

const Socials = () => {
  return (
    <div className="relative z-3 left-0 px-7">
        <ul className="flex flex-col gap-5 2xl:gap-10">
          {socials.map((item) => (
              <a 
                key={ item.id } 
                href={ item.url }
                target="_blank"
                className=""
              >
                  <img src={ item.iconUrl } width={50} height={30} alt={item.title} />
              </a>
          ))}
        </ul>
    </div>
  )
}

export default Socials