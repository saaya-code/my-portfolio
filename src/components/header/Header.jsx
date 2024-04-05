import { Link } from "react-router-dom";
import { AvatarSVG, Github, Email, Figma, Linkedin, AvatarPNG } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarPNG} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Mohamed Aziz Bouali, <br /> Software Engineering Student.
              </h1>
            </div>
            <p className="header-text text text-white">
              As a software engineer, my passion lies in crafting innovative
              solutions that push the boundaries of technology. I aspire to
              contribute to projects that not only solve real-world problems
              but also challenge conventional thinking in the field.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">boualimohamed74@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">+216 99187983</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Address: <span className="text">Tunis, Tunisia</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={15} />
                </span>
                <p className="info-item-text">
                  Website:{" "}
                  <span className="text">
                    https://awilson456.github.io/portfolio.html
                  </span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
                <li className="social-item">
                    <Link to="https://github.com/saaya-code" target="_blank">
                        <img src={Github} />
                        <span className="tooltip text">Github</span>
                    </Link>
                </li>
                <li className="social-item">
                    <Link to="https://www.linkedin.com/in/aziz-bouali/" target="_blank">
                        <img src={Linkedin} />
                        <span className="tooltip text">Linkedin</span>
                    </Link>
                </li>
                <li className="social-item">
                    <Link to="mailto:boualimohamed74@gmail.com">
                        <img src={Email} />
                        <span className="tooltip text">Email</span>
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
