import "./App.css";
import React, { useState, useEffect } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import Fade from "react-reveal/Fade";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Color from "colorjs.io";

import sweeperVideo from "./assets/sweeper.mp4";
import BlackjackVideo from "./assets/blackjack.mp4";
import lightModeIcon from "./assets/mode-white.png";
import darkModeIcon from "./assets/mode-black.png";
import myPhoto from "./assets/my-photo.jpeg";
// import dynamicIcon from "./assets/mode-blue.png";

/*

Now Add Some Content A picture of yourself Your name Where you're from/where you live A short bio telling us about yourself (you might include/mention: design/programming applications you know, what you enjoy most about ui/ux design/development, why you're excited to work with DALI.) Something interesting about yourself :-) Go here to learn some HTML/CSS: http://learn.shayhowe.com/html-css/ Have fun with this part - experiment. To see your changes just refresh the page in your browser.

*/

export default function App() {
    const [mode, setMode] = useState("dynamic");
    const cloudWhite = new Color("rgb(98%, 98%, 98%)");
    const skyBlue = new Color("rgb(5%, 60%, 90%)");
    const nightBlack = new Color("rgb(2%, 2%, 2%)");

    // update scroll position and page height as user scrolls
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
        setPageHeight(document.documentElement.offsetHeight);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // calculate background color based on scroll position and page height
    function getBackgroundColor() {
        if (mode === "light") {
            return {
                background: cloudWhite.to("srgb").toString(),
            };
        }
        if (mode === "dark") {
            return {
                background: nightBlack.to("srgb").toString(),
            };
        }
        const maxScrollPosition = pageHeight - window.innerHeight;
        const proportionScrolledHalf = scrollPosition / (maxScrollPosition / 2);
        if (proportionScrolledHalf < 1) {
            // in first half of scroll down page
            return {
                background:
                    "" +
                    Color.mix(cloudWhite, skyBlue, proportionScrolledHalf, {
                        space: "srgb",
                        outputSpace: "srgb",
                    }),
            };
        } else {
            // in second half of scroll down page
            return {
                background:
                    "" +
                    Color.mix(skyBlue, nightBlack, proportionScrolledHalf - 1, {
                        space: "srgb",
                        outputSpace: "srgb",
                    }),
            };
        }
    }

    function changeMode() {
        if (mode === "dynamic") {
            setMode("dark");
            return;
        }
        if (mode === "dark") {
            setMode("light");
            return;
        }
        if (mode === "light") {
            setMode("dynamic");
            return;
        }
    }

    return (
        <div className={"app " + mode} style={getBackgroundColor()}>
            <Banner
                scrollPosition={scrollPosition}
                mode={mode}
                handleChangeMode={() => changeMode()}
            />
            <Name mode={mode} />
            <SocialMedias mode={mode} />
            <About />
            <Projects />
            <Experience />
        </div>
    );
}

function Banner({ scrollPosition, mode, handleChangeMode }) {
    return (
        <div
            className={"banner " + mode}
            style={{ top: 0.5 * Math.min(0, scrollPosition - 350) }}
        >
            <div className="banner-anchors-and-mode-icon">
                <img
                    src={mode === "light" ? lightModeIcon : darkModeIcon}
                    className={"banner-mode-icon " + mode}
                    alt="mode icon"
                    onClick={handleChangeMode}
                />
                <div className="banner-anchors-wrapper">
                    <AnchorLink
                        href="#about"
                        className={"banner-anchor " + mode}
                    >
                        about
                    </AnchorLink>
                    <AnchorLink
                        href="#experience"
                        className={"banner-anchor " + mode}
                    >
                        experience
                    </AnchorLink>
                    <AnchorLink
                        href="#projects"
                        className={"banner-anchor " + mode}
                    >
                        projects
                    </AnchorLink>
                </div>
            </div>
            <SocialMedias className="banner" />
        </div>
    );
}

function Name({ mode }) {
    return <h1 className={"name " + mode}>Harrison Stropkay</h1>;
}

function About() {
    return (
        <div className="about" id="about">
            <div className="about-words">
                <h1 className="about-me-header">About me</h1>
                <p className="bio">
                    I'm an aspiring software engineer from Louisville, Kentucky
                    who enjoys studying math and computer science. I also work
                    as a TA and research assistant, and I like to play a racquet
                    sport every day.
                </p>
            </div>

            <img className="my-photo" src={myPhoto} alt="me" />
        </div>
    );
}

function SocialMedias({ mode }) {
    return (
        <div className={"social-media-icons"}>
            <a
                href="https://www.linkedin.com/in/harrisonstropkay"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/linkedin-1464529-1239440.png"
                    alt="linkedin icon"
                    className={"social-media-icon " + mode}
                />
            </a>
            <a
                href="https://github.com/harrisonstropkay/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
                    alt="github icon"
                    className={"social-media-icon " + mode}
                />
            </a>
            <a href="mailto:apples.vole-01@icloud.com">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/88/88042.png"
                    alt="email icon"
                    className={"social-media-icon " + mode}
                />
            </a>
        </div>
    );
}

function Experience() {
    const internships = [
        {
            company: "Jacobs",
            time: "*Summer 2023",
            role: "Incoming Software Engineer Intern",
            info: "TBD",
        },

        {
            company: "Grid Protection Alliance",
            time: "Winter 2023",
            role: "Software Engineer Intern",
            info: "Implemented web dev features and bug fixes",
        },
        {
            company: "Glennis Solutions",
            time: "Summer 2022",
            role: "Software Engineer Intern",
            info: "Worked with AWS in a DevOps role",
        },
    ];

    const academia = [
        {
            company: "Dartmouth CS Department",
            time: "*Spring 2023",
            role: "Research Assistant",
            info: "Analyze the stylometry of ChatGPT",
        },
        {
            company: "Dartmouth CS 50",
            time: "Winter 2023",
            role: "Teaching Assistant",
            info: "Graded problem sets and held office hours",
        },
        {
            company: "Dartmouth CS 10",
            time: "Fall 2022",
            role: "Teaching Assistant",
            info: "As above, plus led recitation and graded midterms",
        },
    ];

    return (
        <div className="experience" id="experience">
            <h1 className="experience-header">Experience</h1>
            <div className="internship-columns">
                <InternshipColumn internships={internships} title="Industry" />
                <InternshipColumn internships={academia} title="Academia" />
            </div>
        </div>
    );
}

function InternshipColumn({ internships, title }) {
    return (
        <div className="InternshipColumn">
            <h1 className="internship-column-title">{title}</h1>
            {internships.map((i) => (
                <Internship
                    company={i.company}
                    time={i.time}
                    role={i.role}
                    info={i.info}
                />
            ))}
        </div>
    );
}

function Internship({ company, time, role, info }) {
    return (
        <Fade bottom>
            <div className="Internship">
                <div className="Internship-Header">
                    <h2 className="Company">{company}</h2>
                    <h3 className="Time">{time}</h3>
                </div>
                <h3 className="Role">{role}</h3>
                <p className="Info">{info}</p>
            </div>
        </Fade>
    );
}

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1 className="projects-title">Some of my projects</h1>
            <div className="project-demos">
                <Demo
                    title="Sweeper"
                    video={sweeperVideo}
                    link="https://github.com/harrisonstropkay/sweeper"
                />
                <Demo
                    title="Blackjack"
                    video={BlackjackVideo}
                    link="https://www.cs.dartmouth.edu/~tjp/cs50/project/index.html"
                />
            </div>
        </div>
    );
}

function Demo({ title, video, link }) {
    return (
        <div className="demo">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <HoverVideoPlayer
                    className="hover-video-player"
                    videoSrc={video}
                    loop={false}
                    sizingMode="container"
                    pausedOverlay={
                        <div className="paused-overlay">
                            <h1 className>{title}</h1>
                            <img
                                className="hover-external-link"
                                src="https://static.thenounproject.com/png/2863113-200.png"
                                alt="external link"
                            />
                        </div>
                    }
                />
            </a>
        </div>
    );
}
