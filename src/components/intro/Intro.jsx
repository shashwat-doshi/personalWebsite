import "./intro.scss"
import { ArrowRight, ArrowBackIos } from "@material-ui/icons"


import { useState } from "react"
import React from "react";

import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "./Particles";

import "./highlights";

import avatarImg from "../../../src/assets/svgs/home-main.svg";

import pic1 from "../../assets/photography/pic1.jpg";
import pic2 from "../../assets/photography/pic2.jpg";

import aboutImg from "../../assets/images/my_pic_autumn.JPG";



export default function Intro() {


    const [currentSlide, setCurrentSlide] = useState(0); // setting state variables for photography slide... intial value is = 0.

    const data = [
        {
            img: pic1,
        },
        {
            img: pic2,
        },
        {
            img: "assets/photography/pic3.jpg",
        },
        {
            img: "assets/photography/pic4.jpg",
        },
        {
            img: "assets/photography/pic5.jpg",
        },
        {
            img: "assets/photography/pic6.jpg",
        },
        {
            img: "assets/photography/pic7.jpg",
        },
    ];

    const handlePhotoArrowClick = (direction) => { // direction is the argument passed/of to the function.
        direction === "left" ?
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) // if it is on the left, then if currentSlide number > first slide number(ie, its not on the first slide), then go to the previous slide. Otherwise, go to the last slide when u click left (hence the data.length - 1 is assigned to currentSlide as given at the end of this statement.)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0); // if it is on the right, then if currentSlide number < last slide number, then go to the last slide. Otherwise, go to the first slide (hence the 0 is there at the end of this statement.)
    };



    const history = useHistory();

    const handleProjectClick = () => {
        history.push("/projects");
    };


    const useStyles = makeStyles((theme) => ({
        avatar: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: theme.spacing(1),
        },
        title: {
            color: "tomato",
        },
        subtitle: {
            color: "tan",
            //textTransform: "uppercase",
            // font: "monospace",
        },
        typedContainer: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100vw",
            textAlign: "center",
            zIndex: 1,
        },
    }));

    const classes = useStyles();

    return (
        <div className="sections">
            <div className="intro">
                <Box className={classes.typedContainer}>
                    <div className="imgContainer">
                        <img src={avatarImg} alt="avatar"/>
                    </div>

                    <div className="introText">
                        <Typography className={classes.title} id="introName" variant="h4">
                            <Typed strings={["Shashwat Doshi"]} typeSpeed={40} />
                        </Typography>

                        <Typography className={classes.subtitle} id="introDesc" variant="h5">
                            <Typed
                                strings={[
                                    "I am a student",
                                    "I am a developer",
                                    "I am a learner",
                                    "I am a foodie",
                                    "I am a cricket enthusiast",
                                    "I am an amateur photographer",
                                ]}
                                typeSpeed={90}
                                backSpeed={60}
                                smartBackspace
                                loop
                                showCursor
                                cursorChar="|"
                            />
                        </Typography>
                    </div>
                </Box>
            </div>
            
            <div className="aboutMe" id="aboutMe">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
                <div class="about-wrapper">
                    <div class="about-left">
                        <div class="about-left-content">
                            <div>
                                <div class="shadow">
                                    <div class="about-img">
                                        <img src={aboutImg} alt="aboutImg" />
                                    </div>
                                </div>

                                <h2>Shashwat</h2>
                                <h3>App Developer @ UofT</h3>
                            </div>

                            <ul class="icons">
                                <a href="https://www.facebook.com/shashwat444/" id="iconLink" target="_blank" rel="noreferrer"><li><i class="fab fa-facebook-f"></i></li></a>
                                <a href="https://www.instagram.com/doshiascharged/" id="iconLink" target="_blank" rel="noreferrer"><li><i class="fab fa-instagram"></i></li></a>
                                <a href="mailto:shashwatpdoshi@gmail.com" id="iconLink" target="_blank" rel="noreferrer"><li><i class="fab fa-google"></i></li></a>
                            </ul>
                        </div>
                    </div>

                    <div class="about-right">
                        <h1><span>hello </span>world!</h1>
                        <h2>Check out some of my work here!</h2>
                        <div class="about-btns">

                            <button type="button" class="btn btn-pink" onClick={() => window.open("https://drive.google.com/file/d/1Vf82NTTNe0NpZNjhx1ZybkfnnS8P8xXF/view?usp=sharing", "_blank")}>resume</button>
                            <button type="button" class="btn btn-white" onClick={handleProjectClick}>projects</button>
                        </div>

                        <div className="aboutInfo">
                            <ArrowRight className="arrowRight" /><span className="aboutDesc">I'm an aspiring 3rd year Computer Science student studying at the University of Toronto.</span>
                        </div>
                        <div className="aboutInfo">
                            <ArrowRight className="arrowRight" /><span className="aboutDesc">I hold a passion for new emerging and upcoming technology. My curiosity drives me to learn something new everyday.</span>
                        </div>
                        <div className="aboutInfo">
                            <ArrowRight className="arrowRight" /><span className="aboutDesc">I am specializing in the Entrepreneurship stream with a minor in Statistics.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="highlights">

                <h2>Highlights</h2>

                <div class="container">
                    <div class="card__container">
                        <div class="card" onClick={handleProjectClick}>
                            <div class="card__content">
                                <h3 class="card__header">Project Growth</h3>
                                <p class="card__info">An online incubator platform designed for young African entrepreneurs to build their startups.</p>
                                <div className="allSkills">
                                    <button className="skill">Django</button>
                                    <button className="skill">Javascript</button>
                                    <button className="skill">HTML5</button>
                                    <button className="skill">SCSS</button>
                                </div>
                                {/* <button class="card__button">Read now</button> */}
                            </div>
                        </div>
                        <div class="card" onClick={handleProjectClick}>
                            <div class="card__content">
                                <h3 class="card__header">InSight</h3>
                                <p class="card__info">A seamless web application that gives personalized recommendations for your post to get most trending on Instagram, Twitter, and Facebook.</p>
                                <div className="allSkills">
                                    <button className="skill">Node.js</button>
                                    <button className="skill">AngularJS</button>
                                    <button className="skill">HTML5</button>
                                    <button className="skill">SCSS</button>
                                </div>
                                {/* <button class="card__button">Read now</button> */}
                            </div>
                        </div>
                        <div class="card" onClick={handleProjectClick}>
                            <div class="card__content">
                                <h3 class="card__header">Doodle Jump</h3>
                                <p class="card__info">The infamous Doodle Jump game that supports shooting enemies and obstacles, and in-game score calculations.</p>
                                <div className="allSkills">
                                    <button className="skill">Assembly Language</button>
                                    <button className="skill">MIPS Software</button>
                                    <button className="skill">Game logic</button>
                                </div>
                                {/* <button class="card__button">Read now</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="photography">
                <Particles />
                {/* <ParticlesBg num={50} type="lines" bg={true} /> */}
                <h2>Photography</h2>
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    {/* we do this because whenever we want to click the left arrow, we need to move current slide by "left: -100vw" for next slide to show up. Got this "-100vw" value through experimentation. */}
                    {data.map(item => ( // for each container, return the below container
                        <div className="container">
                            <div className="item">
                                <img className="photographs" src={item.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <ArrowBackIos className="arrow left" onClick={() => handlePhotoArrowClick("left")} />
                <ArrowBackIos className="arrow right" onClick={() => handlePhotoArrowClick()} />
            </div>

            <footer class="site-footer">
                <div class="container">
                    <h3>That's all on this page folks!</h3>
                    <ul class="social-icons">
                        <li><a class="facebook" href="https://www.facebook.com/shashwat444/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f" id="socIcon"></i></a></li>
                        <li><a class="instagram" href="https://www.instagram.com/doshiascharged/" target="_blank" rel="noreferrer"><i class="fab fa-instagram" id="socIcon"></i></a></li>
                        <li><a class="linkedin" href="https://www.linkedin.com/in/shashwatdoshi/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in" id="socIcon"></i></a></li>
                        <li><a class="github" href="https://github.com/shashwat-doshi" target="_blank" rel="noreferrer"><i class="fab fa-github" id="socIcon"></i></a></li>
                    </ul>

                    <em>"The people who are crazy enough to think that they can change the world are the ones who do."</em><em className="quoteAuthor"> ~ Steve Jobs</em>

                    <div className="madebyFooter">
                        <p class="copyright-text"> Made by Shashwat Doshi using React <i class="fab fa-react" id="ReactIcon"></i>
                        </p>
                    </div>
                </div>
            </footer>
        </div>


    )
}
