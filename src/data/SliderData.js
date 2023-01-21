import CMatrix from "../images/Complex_Matrix.png"
import Model from '../images/model.png'
import Npm from '../images/NPM.png'
import Minecraft from '../images/Minecraft.png'

export const SliderData = [
    {
        title: "NPM package",
        img: Npm,
        label:'View Project',
        description:'Self made Neural Network package',
        path: '', // TODO: Add direct link
        href:"https://www.npmjs.com/package/@death_raider/neural-network",
        alt: "NPM project"
    },
    {
        title: "Rainfall Predictor",
        img: Model,
        label:'View Project',
        description:"A combination of multiple AI's to predict rainfall patterns",
        path: '/project1',
        alt: "Rainfall Predictor"
    },
    {
        title: "Minecraft Vision AI",
        img: Minecraft,
        label:'View Project',
        description:'Using 2 AI to see the Minecraft world',
        path: '/project2',
        alt: "Minecraft Vision AI"
    },
    {
        title: "Complex Matrix visualized",
        img: CMatrix,
        label:'View Project',
        description:'Providing key insight to their workings',
        path: '',
        href: "https://www.youtube.com/watch?v=BOkwMR9-KLU",
        alt: "Complex Matrix"
    }
]
