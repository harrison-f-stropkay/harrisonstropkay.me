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
import myPhoto from "./assets/my-photo.jpg";
import dynamicModeIcon from "./assets/mode-blue.png";

/*

Now Add Some Content A picture of yourself Your name Where you're from/where you live A short bio telling us about yourself (you might include/mention: design/programming applications you know, what you enjoy most about ui/ux design/development, why you're excited to work with DALI.) Something interesting about yourself :-) Go here to learn some HTML/CSS: http://learn.shayhowe.com/html-css/ Have fun with this part - experiment. To see your changes just refresh the page in your browser.

*/

export default function App() {
    const [mode, setMode] = useState("dynamic");

    const cloudWhite = new Color("rgb(98%, 98%, 98%)");
    const skyBlue = new Color("rgb(53, 140, 203)");
    const nightBlack = new Color("rgb(5%, 5%, 5%)");

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
            <SocialMedias location="bodyIcons" mode={mode} />
            <div style={{ height: "300px" }} />
            <About mode={mode} />
            <Projects mode={mode} />
            <Experience mode={mode} />
            <div style={{ height: "150px" }} />
        </div>
    );
}

function Banner({ scrollPosition, mode, handleChangeMode }) {
    function getModeIconSource(mode) {
        if (mode === "dynamic") {
            return dynamicModeIcon;
        } else if (mode === "dark") {
            return darkModeIcon;
        } else {
            return lightModeIcon;
        }
    }

    function handleModeIconMouseOver(mode) {
        if (mode === "dynamic") {
            return darkModeIcon;
        } else if (mode === "dark") {
            return lightModeIcon;
        } else {
            return dynamicModeIcon;
        }
    }

    return (
        <div
            className={"banner " + mode}
            style={{ top: 0.5 * Math.min(0, scrollPosition - 350) }}
        >
            <div className="banner-icons-container">
                <img
                    className={"banner-mode-icon " + mode}
                    src={getModeIconSource(mode)}
                    alt="mode icon"
                    onClick={handleChangeMode}
                    onMouseOver={(e) =>
                        (e.currentTarget.src = handleModeIconMouseOver(mode))
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.src = getModeIconSource(mode))
                    }
                />
                <div className="banner-anchors-wrapper">
                    <AnchorLink
                        href="#about"
                        className={"banner-anchor " + mode}
                        offset="50"
                    >
                        intro
                    </AnchorLink>
                    <AnchorLink
                        href="#projects"
                        className={"banner-anchor " + mode}
                        offset="50"
                    >
                        projects
                    </AnchorLink>
                    <AnchorLink
                        href="#experience"
                        className={"banner-anchor " + mode}
                        offset="50"
                    >
                        experience
                    </AnchorLink>
                </div>
            </div>

            <div>
                <SocialMedias location="bannerIcons" mode={mode} />
            </div>
        </div>
    );
}

function Name({ mode }) {
    return <h1 className={"name " + mode}>Harrison Stropkay</h1>;
}

function About({ mode }) {
    return (
        <div className={"section about " + mode} id="about">
            <h2 className="header about-me">About me</h2>
            <div className="about-content">
                <div className="bio-words">
                    <ul className="bio-list">
                        <li>Dartmouth College</li>
                        <li>Computer Science & Math Major</li>
                        <li>Louisville, KY</li>
                    </ul>
                    <h3 className="bio-introduction">An introduction</h3>
                    <p className="bio-info">
                        I'm an aspiring software engineer familiar with Java, C,
                        Python, Git, and AWS. I've had a little experience with
                        web development, but most of what I've learned has been
                        through this project. I've enjoyed making this site, so
                        I'm super excited to potentially continue this type of
                        work with DALI. For some fun facts, I like to teach
                        math, and I try to play a racquet sport every day.
                    </p>
                </div>
                <img className="my-photo" src={myPhoto} alt="me" />
            </div>
        </div>
    );
}

function SocialMedias({ location, mode }) {
    return (
        <div className={"socials-wrapper " + location}>
            <a
                href="https://www.linkedin.com/in/harrisonstropkay"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/linkedin-1464529-1239440.png"
                    alt="linkedin icon"
                    className={"social-media-icon " + location + " " + mode}
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
                    className={"social-media-icon " + location + " " + mode}
                />
            </a>
            <a href="mailto:apples.vole-01@icloud.com">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/88/88042.png"
                    alt="email icon"
                    className={"social-media-icon " + location + " " + mode}
                />
            </a>
        </div>
    );
}

function Experience({ mode }) {
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
            info: "As above + led recitation and graded midterms",
        },
    ];

    return (
        <div className={"section experience " + mode} id="experience">
            <h2 className="header experience">Experience</h2>
            <div className="internship-columns-wrapper">
                <InternshipColumn
                    internships={internships}
                    title="Industry"
                    mode={mode}
                />
                <InternshipColumn
                    internships={academia}
                    title="Academia"
                    mode={mode}
                />
            </div>
        </div>
    );
}

function InternshipColumn({ internships, title, mode }) {
    return (
        <div className="internship-column">
            <h3 className="internship-column-title">{title}</h3>
            {internships.map((i) => (
                <Internship
                    company={i.company}
                    time={i.time}
                    role={i.role}
                    info={i.info}
                    mode={mode}
                />
            ))}
        </div>
    );
}

function Internship({ company, time, role, info, mode }) {
    return (
        <Fade bottom>
            <div className={"internship-wrapper " + mode}>
                <div className="internship-header">
                    <h3 className={"company " + mode}>{company}</h3>
                    <h4 className={"time " + mode}>{time}</h4>
                </div>
                <h4 className={"role " + mode}>{role}</h4>
                <p className={"info " + mode}>{info}</p>
            </div>
        </Fade>
    );
}

function Projects({ mode }) {
    return (
        <div className={"section projects " + mode} id="projects">
            <h2 className="header projects">Projects</h2>
            <div className="projects-column-wrapper">
                <Demo
                    title="Sweeper"
                    video={sweeperVideo}
                    link="https://github.com/harrisonstropkay/sweeper"
                    info="An interactive Minesweeper solver that assesses all possible bomb configurations at every move. It makes a few shortcuts by first searching for simple, guaranteed-value tiles, then calculates bomb probabilities by recursively backtracking along revealed tiles."
                />
                <Demo
                    title="Blackjack"
                    video={BlackjackVideo}
                    link="https://www.cs.dartmouth.edu/~tjp/cs50/project/index.html"
                    info="A self-improving blackjack player written in C for the CS 50 final project. It uses a reinforcement learning algorithm to approach optimal game strategy after trained on hundreds of thousands of practice hands."
                />
            </div>
        </div>
    );
}

function Demo({ title, video, link, info }) {
    return (
        <div className="demo-hover-wrapper">
            <Fade bottom>
                <div className="demo">
                    <a
                        className="demo-link-wrapper"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <HoverVideoPlayer
                            className="hover-video-player"
                            videoSrc={video}
                            loop={false}
                            sizingMode="container"
                            pausedOverlay={
                                <div className="paused-overlay">
                                    <div className="paused-overlay-header">
                                        <h3 className="paused-overlay-title">
                                            {title}
                                        </h3>
                                        <img
                                            className="hover-external-link"
                                            src="https://static.thenounproject.com/png/2863113-200.png"
                                            alt="external link"
                                        />
                                    </div>
                                    <p className="paused-overlay-info">
                                        {info}
                                    </p>
                                </div>
                            }
                        />
                    </a>
                </div>
            </Fade>
        </div>
    );
}
