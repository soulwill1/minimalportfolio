import { 
    instagram, 
    github, 
    linkedin, 
    profile, 
    serviceImage,
    serviceCard1,
    serviceIco1,
    serviceIco2, 
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Serviços",
        url: "#services",
    },
    {
        id: "1",
        title: "Projetos",
        url: "#projects",
    },
    {
        id: "2",
        title: "Habilidades",
        url: "#skills"
    },
    {
        id: "3",
        title: "Contato",
        url: "#contact",
    },
    
]

export const socials = [
    {
      id: "0",
      title: "Linkedin",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/willian-verissimo/",
    },
    {
        id: "1",
        title: "Instagram",
        iconUrl: instagram,
        url: "https://www.instagram.com/soulwill1/",
    },
    {
      id: "2",
      title: "Github",
      iconUrl: github,
      url: "https://github.com/soulwill1",
    },
];

export const backgrounds = [
    {
        id: "0",
        title: "Foto de perfil",
        backgroundUrl: "assets/profile.jpg",
        imageUrl: profile,
    },
];

export const services = [
    {
        id: "0",
        title: "Desenvolvimento web",
        text: "Criação de websites com estilos exclusivos, feitos especialmente para o seu projeto.",
        backgroundUrl: "assets/benefits/card-1.svg",
        icoUrl: serviceIco2,
        imgUrl: serviceImage,
    },
];

export const projects = [
    {
        id: "0",
        title: "Projetos de clientes",
    },
    {
        id: "1",
        title: "Projetos pessoais",
    },
]