import Me1 from '../images/ME1.jpg'
import Me2 from '../images/Me2.jpg'
import DataImg from '../images/dataImg.jfif'

import Connection from '../images/connections.png'

import CMatrix from "../images/Complex_Matrix.png"
import Npm from '../images/NPM.png'
import Minecraft from '../images/Minecraft.png'
//project 1 images
import ModelSimple from '../images/modelSimple.png'
import Model from '../images/model.png'
import RainClutter from '../images/rainfallClutter.png'
import Process from '../images/Process.png'
//labeled
export const InfoDataAbout = [
    {
        Heading: "About me",
        Para1: `My name is Darsh Kachroo, and I'm a senior in high school majoring in Mathematics and Biology in India. I have ambitions to
study at Eth Zurich and major in Math and Physics.` ,
        Para2: `I want my career to be based on research in AI with medicine as it allows for all my interests to align, and I believe AI
could revolutionize the medical field if more effort is applied. I have a strong desire and discipline for my goals and dreams expressed
through my various projects on Artificial Intelligence and the self-study needed for it. My interests in the medical field lay with
Immunology and Psychology; I would love an opportunity to build upon them further.`,
        BtnShow: 'true',
        BtnLabel:"View Resume",
        link:"/",
        image: Me1,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'My Intrests and Accomplishments',
        Para1: `My professional interests lie in vast topics like Linear Algebra, Calculus, Machine Learning, Organic Chemistry, Kinematics, and
Quantum-Mechanic, whereas my personal interests are working out, Reading Novels, and participating in sports like football. I created a good balance
between my professional and personal interests which reduced burnout and increased my productivity.`,
        Para2: `My accomplishments are few, but they carry deeply personal meaning to me. I have made a Machine Learning Package on NPM from scratch, and it
was the project that allowed me to apply and test AI theory firsthand, boosting my confidence. I learned a lot from this experience. Building on that, I have
also made a Rainfall Prediction AI which allows me to take the entire world rainfall data of the Earth and make future predictions on the rainfall pattern with
an accuracy of 90%. Another currently ongoing project is Computer Vision, which uses three different convolutional AI models attempting to mimic the human
players in the game Minecraft. Among the various projects, these were my top three projects which make me proud.` ,
    BtnShow: 'true',
        BtnLabel:"Visit Projects",
        link:"/projects",
        image: Me2,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataConnections = [
    {
        Heading: 'Connections',
        Para1: ()=>{
            return (
                <>
                    <ul>
                        <li> Discord - Benzo#5968 </li>
                        <li> Instagram - amazing_bro_99 </li>
                        <li> NPM - @death_raider  </li>
                        <li> Github - Death-Raider </li>
                    </ul><br></br>
                </>
        )} ,
        Para2: "For further contact info check 'contact me' page" ,
        BtnShow: 'true',
        BtnLabel:"Contact Me",
        link:"/contact",
        image: Connection,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataContact = [
    {
        Heading: 'Contact Me',
        Para1: "Contact me at oragimirox@gmail.com",
        Para2: "A reply will be provided within 1-2 days. Till then please check out the Projects section",
        BtnShow: 'true',
        BtnLabel:"Go to Projects",
        link:"/projects",
        image: Me1,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataHome = [
    {
        Heading: 'About Me',
        Para1: `My name is Darsh Kachroo, and I'm a senior in high school majoring in Mathematics and Biology in India. I have ambitions to
study at Eth Zurich and major in Math and Physics.I want my career to be based on research in AI with medicine as it allows for all my interests
to align, and I believe AI could revolutionize the medical field if more effort is applied.`,
        Para2: "See in full length in the About section." ,
        BtnShow: 'true',
        BtnLabel:"About",
        link:"/about",
        image: Me1,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'NPM AI --Top Project-1',
        Para1: "This is an easy to use Neural Network package with SGD using backpropagation as a gradient computing technique." ,
        Para2: "See in full length in NPM website." ,
        BtnShow: 'true',
        BtnLabel:"View NPM site",
        link:"/projects",
        image: Npm,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Rainfall Prediction --Top Project-2',
        Para1: " To investigate predictions based on the rainfall data and understand how we can improve on current methods to better locate natural disasters" ,
        Para2: "See in full length in the Projects section." ,
        BtnShow: 'true',
        BtnLabel:"View all Projects",
        link:"/projects",
        image: Model,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Minecraft Vision --Top Project-3',
        Para1: `I use 2 different AI methods ( bounding box and Instance segmentation ) to precieve the minecraft world as a human would in attempts to
create a self acting free world player.` ,
        Para2: "See in full length in the Projects section." ,
        BtnShow: 'true',
        BtnLabel:"View all Projects",
        link:"/projects",
        image: Minecraft,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProjects = [
    {
        Heading: 'Rainfall Prediction --Top Project-2',
        Para1: `High level summary: To investigate predictions based on the rainfall data and understand how we can improve on current methods to better locate natural
disasters like rain induced flooding and landslides or better predict rain patterns for rainfed agriculture using Machine Learning algorithms for the
predictions. Our model is trained by combining several neural networks which are trained seperately for seperate task.` ,
        Para2: "Full details can be seen by visiting the Rainfall predictor page below" ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project1",
        image: Model,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Minecraft Vision --Top Project-3',
        Para1: "" ,
        Para2: "" ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project2",
        image: Minecraft,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Complex Matrix Visulization',
        Para1: "" ,
        Para2: "" ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project3",
        image: CMatrix,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProject1 = [
    {
        Heading: 'High Level Summary',
        Para1: `To investigate predictions based on the rainfall data and understand how we can improve on current methods to better locate natural
disasters like rain induced flooding and landslides or better predict rain patterns for rainfed agriculture using Machine Learning algorithms for the
predictions. Our model is trained by combining several neural networks which are trained seperately for seperate task. ` ,
        Para2: `There were 3 AI models used and one fixed initial convolutional layer. The purpose of seperating out the model into parts was to increase
accuracy of each part, resulting in a higher overall accuracy. Without this seperation we had gotten a 70% accuracy at best and using the seperation we have
increased our accuracy to 90%!` ,
        BtnLabel:"",
        BtnShow: 'false',
        link:"",
        image: ModelSimple,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Introduction',
        Para1: `There is a lot of data present and a lot of our daily lives depend on it from checking the weather to finding the fastest route to
ur destination. In this project we looking into a project on which our team has created using data provided by NASA and we investigate how this
project would effect people and how data collection can be improved for better usage in the future.` ,
        Para2: `Our aim with this project is to gain insight in how rainfall data is used to make predictions (more that just predicting when the
next rain fall) like prediciting probability of landslides and also for arrival and retreat of monsoon and so on. We have made our own model to
explore the data and make meaningful predictions.` ,
        BtnLabel:"",
        BtnShow: 'false',
        link:"",
        image: DataImg,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Obtaining and Parsing Data',
        Para1: ()=>(
            <ul>
                <li>
                    We started our plan by first obtaining the data(refrence 1 and 2). We proceeded by creating a simple chrome extension which will
                    automatically download the data.
                </li><br></br>
                <li>
                    We now had our data that needed to be processed to extract the information, namely the calculated precipitation data w.r.t the spatial
                    positions and time. Our code extracted the desired data and color-coded them based on rain intensity. Since all places on earth get
                    rain daily, we made a cutoff at 5mm/day. This cutoff had been chosen as 5mm/day (about 0.2mm/hour) as it is considered light/moderate-light
                    rain. A lower cutoff would have resulted in a cluttered view and a hard time for the Neural Network to make predictions.
                </li><br></br>
                <li>
                    The image shows cluttering increasing as cutoff is increased from 0.5mm/day -> 1mm/day -> 5mm/day
                </li><br></br>
            </ul>
        ),
        Para2: `We now had our data separated and filtered and in a convenient format with a 99.781% compression (30.5mb/file -> 66.8kb/image  *on avg*). We then create a
simple website to visualize the data(refrence 3) and also made a few saved animations (refrence 4).` ,
        BtnLabel:"",
        BtnShow: 'false',
        link:"",
        image: RainClutter,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: "Data Analysis",
        Para1: `From these visualizations we can see that when we increase the fps there is a slight bobbing of the range of the rainfall pattern along the longitudes. This is
caused by the rotation of the earth on a slightly skewed axis. This is the same as how seasons arise and we can also see how the monsoon season approach and retreat which is a
really useful way to make more informed decisions for rainfed agricultural needs.`,
        Para2:`We can also see how the rain pattern propagates longitudinally from left to right along the top and bottom and from right to left in the middle. This effect is
actually the Coriolis effect in action. Now we go on to actually using the model and making some predictions! The image shows the model put together.`,
        BtnLabel: "",
        BtnShow: 'false',
        link: "",
        image: Model,
        reverse: 'false'
    },
    {
        Heading: "Predicting Data",
        Para1: ()=>(
            <ul>
                <li>
                    Now we continue with our plans for prediction of future rainfall data. We begin with creating a layout for how we would set up the neural networks and after lots of trial
                    and error we ended up with this plan.
                </li>
                <li>
                    From our chrome extension we had downloaded about 6700 files amassing 250GB in storage and about 480MB when converted into the image. The first step of the plan was to
                    convolve the images into an even smaller size with each convolved image being 4.32kb and a dimension of (120 x 60)px.
                </li>
                <li>
                    This convolution was necessary to decrease the dimensionality of the images for the prediction neural network. A Convolutional Neural Network was not used as it didn’t
                    product as clear and accurate images and same for LSTM and CLSTM (Convolutional Long Short Term Memory ) models.
                </li>
                <li>
                    After the predictions were made in the convolved from , we denoised it by another neural network so that it may smoothen the images when they are eventually deconvolved by
                    yet another neural network.
                </li>
                <li>
                    After all these individual models had trained we join them into a singular bigger model. This process is often used in Auto Encoders and Generative Adversarial Networks (GANs).
                </li><br />
            </ul>
        ),
        Para2:`The Image shows The process of prediction for a test date of 1 sept 2021, and its accracy was 87% on it overall.`,
        BtnLabel: "",
        BtnShow: 'false',
        link: "",
        image: Process,
        reverse: 'false'

    }
]
export const InfoDataProject2 = [
    {
        Heading: 'Heading 1',
        Para1: "" ,
        Para2: "" ,
        BtnShow: 'true',
        BtnLabel:"",
        link:"/project2",
        image: Minecraft,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProject3 = [
    {
        Heading: 'Heading 1',
        Para1: "" ,
        Para2: "" ,
        BtnShow: 'true',
        BtnLabel:"",
        link:"/project3",
        image: CMatrix,
        reverse: 'false',
        delay: 100
    }
]
