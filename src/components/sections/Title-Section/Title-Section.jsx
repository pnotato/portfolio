import './Title-Section.css';
import githubIcon from '../../../assets/logos/github.svg';
import linkedinIcon from '../../../assets/logos/linkedin.svg';

export default function TitleSection() {
    return (
        <>
            <div className="title">
                <h1> Hi, I'm</h1>
                <div className="title-text">
                    Nicholas Chan
                </div>

                <div className="socials">
                    <a href="https://github.com/pnotato/">
                        <img className="social-icons" src={githubIcon} alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/nicholasch-an/">
                        <img className="social-icons-linkedin" src={linkedinIcon} alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </>
    )
}