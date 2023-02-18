import './App.css';
import React, {useState, useEffect} from "react";
import HoverVideoPlayer from 'react-hover-video-player';
import Reveal from 'react-reveal/Reveal';
import sweeperVideo from "./assets/sweeper.mp4"
import BlackjackVideo from "./assets/blackjack.mp4"

/*

Now Add Some Content A picture of yourself Your name Where you're from/where you live A short bio telling us about yourself (you might include/mention: design/programming applications you know, what you enjoy most about ui/ux design/development, why you're excited to work with DALI.) Something interesting about yourself :-) Go here to learn some HTML/CSS: http://learn.shayhowe.com/html-css/ Have fun with this part - experiment. To see your changes just refresh the page in your browser.

*/

//<video src={vid} alt="s"/>

export default function App() {
    return (
        <div className="App">
            <TopBar/>
            <Name/>
            <SocialMedias/>
            <Intro/>
            <Experience/>
            <Projects/>
            
            
        </div>
    );
}

function TopBar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="banner" style={{top: 0.5 * Math.min(0, scrollPosition - 350)}}>
            <h1 className="banner-anchors">
                <a href="#intro" className="banner-anchor">intro</a>
                <a href="#experience" className="banner-anchor">experience</a>
                <a href="#projects" className="banner-anchor">projects</a>
            </h1>
            <div className="banner-social-medias">
                <SocialMedias/>
            </div>
        </div>
    )
}

function Name() {
    return (
        <h1 className="name">
            Harrison Stropkay
        </h1>
    )
}

function Intro() {
    return (
        <div className="intro" id="intro">
            
            
            <div>
                <div className="about-me">
                    <h1 className="about-me-header">
                        About me
                    </h1>
                    An aspiring software engineer from Louisville, Kentucky. I enjoy studying math and computer science, and I work as a TA and research assistant. I also like to teach math and try to play a racquet sport every day. 
                </div>
            </div>
        </div>
    );
}

function SocialMedias() {
    return (
        <div className="social-medias">
            <a 
                href="https://www.linkedin.com/in/harrisonstropkay" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/linkedin-1464529-1239440.png" 
                    alt="linkedin icon"
                    className="social-media-icon"
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
                    className="social-media-icon"
                /> 
            </a>
            <a href="mailto:apples.vole-01@icloud.com">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/88/88042.png" 
                    alt="email icon"
                    className="social-media-icon"
                /> 
            </a>
        </div>
    )
}

function Experience() {
    const internships = [
        {
            company: "Jacobs",
            time: "*Summer 2023",
            role: "Incoming Software Engineer Intern", 
            info: "TBD"
        },
        
        {
            company: "Grid Protection Alliance",
            time: "Winter 2023",
            role: "Software Engineer Intern", 
            info: "Implemented web dev features and bug fixes"
        },
        {
            company: "Glennis Solutions",
            time: "Summer 2022",
            role: "Software Engineer Intern", 
            info: "Worked with AWS in a DevOps role"
        },
    ]

    const academia = [
        {
            company: "Dartmouth CS Department",
            time: "*Spring 2023",
            role: "Research Assistant", 
            info: "Analyze the stylometry of ChatGPT"
        },
        {
            company: "Dartmouth CS 50",
            time: "Winter 2023",
            role: "Teaching Assistant", 
            info: "Graded problem sets and held office hours"
        },
        {
            company: "Dartmouth CS 10",
            time: "Fall 2022",
            role: "Teaching Assistant", 
            info: "As above, plus led recitation and graded midterms"
        },
    ]

    return (
        <div className="experience" id="experience">
            <h1 className="experience-header">
                Experience
            </h1>
            <div className="InternshipColumns">
                <InternshipColumn internships={internships} title="Industry"/>
                <InternshipColumn internships={academia} title="Academia"/>
            </div>
        </div>
    )
}

function InternshipColumn({ internships, title }) {
    return (
        <div className="InternshipColumn">
            <h1 className="internship-column-title">
                {title}
            </h1>
            { internships.map(i => <Internship company={i.company} time={i.time} role={i.role} info={i.info}/>) }
        </div>
    )
}

function Internship({ company, time, role, info }) {
    return (
        <Reveal effect="fadeInUp">
            <div className="Internship">
                <div className="Internship-Header">
                    <h2 className="Company">
                        {company} 
                    </h2>
                    <h3 className="Time">
                        {time}
                    </h3>
                </div>
                <h3 className="Role">
                    {role}
                </h3>
                <p className="Info">
                    {info}
                </p>
            </div>
        </Reveal>
    )
}

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1 className="projects-title">
                Projects
            </h1>
            <div className="demos">
                <Demo 
                    title="Sweeper" 
                    video={sweeperVideo}
                    link="https://github.com/harrisonstropkay/sweeper"
                />
                <Demo 
                    title="21" 
                    video={BlackjackVideo}
                    link="https://www.cs.dartmouth.edu/~tjp/cs50/project/index.html"
                />
            </div>
        </div>
        
    )
}

function Demo({ title, video, link }) {
    return (
        <div className="demo">
            <a 
                
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
                                <h1 className> 
                                    {title}
                                </h1>
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
    )
}
