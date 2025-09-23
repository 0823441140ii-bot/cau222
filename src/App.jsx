import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.scss";
import LoginForm from "./LoginForm";
import { useRef } from "react";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      setShowIntro(false);
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);
  const leftRef = useRef(null);

  const handleShowForm = () => {
    setIsShowModal(true);
  };
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const handleCloseForm = () => {
    setIsShowModal(false);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu &&
        leftRef.current &&
        !leftRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      <>
        <div className="fixed-taskbar">
          <div className="taskbar-inner">
            <div className="taskbar-left">
              <img
                src="/favicon-32x32.png"
                alt="Meta Logo"
                className="taskbar-logo"
              />
              <span className="taskbar-title">Help Center</span>
            </div>

            {/* <div className="taskbar-right">
              {isMobile && (
                <div
                  className="hamburger-icon"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  <img src="/hamburger.svg" alt="Menu" />
                </div>
              )}

              <div className="language-switch">
                <div className="language-icon">
                  <i className="fa-solid fa-language"></i>
                </div>
                <button className="language-button">English</button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          {/* <div className={`left ${showMenu ? "show" : "hide"}`} ref={leftRef}>
            <div className="left-content">
              <button className="btn-lock">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.5035 4.99843L6.3345 2.14643C6.24269 2.06379 6.12353 2.01806 6 2.01806C5.87647 2.01806 5.75731 2.06379 5.6655 2.14643L2.4965 4.99843C2.34021 5.1391 2.21525 5.31106 2.12971 5.50315C2.04418 5.69523 1.99999 5.90316 2 6.11343V9.41843C2 9.52643 2.035 9.60843 2.0745 9.65843C2.10894 9.70393 2.15999 9.73395 2.2165 9.74193C2.6465 9.81193 3.2365 9.88693 4 9.93743V7.99993C4 7.6021 4.15804 7.22057 4.43934 6.93927C4.72064 6.65796 5.10218 6.49993 5.5 6.49993H6.5C6.89782 6.49993 7.27936 6.65796 7.56066 6.93927C7.84196 7.22057 8 7.6021 8 7.99993V9.93743C8.59725 9.90063 9.19241 9.83555 9.7835 9.74243C9.84008 9.73432 9.89115 9.70411 9.9255 9.65843C9.97637 9.58896 10.0026 9.50449 10 9.41843V6.11343C10 5.90316 9.95582 5.69523 9.87029 5.50315C9.78475 5.31106 9.65979 5.1391 9.5035 4.99843ZM1.8275 4.25493L4.9965 1.40293C5.27194 1.15501 5.62941 1.01782 6 1.01782C6.37059 1.01782 6.72806 1.15501 7.0035 1.40293L10.1725 4.25493C10.433 4.4894 10.6413 4.77602 10.7838 5.0962C10.9264 5.41638 11 5.76295 11 6.11343V9.41843C11 10.0644 10.582 10.6249 9.945 10.7289C9.475 10.8054 8.841 10.8849 8.0285 10.9379C7.466 10.9744 7 10.5199 7 9.95593V7.99993C7 7.86732 6.94732 7.74014 6.85355 7.64638C6.75979 7.55261 6.63261 7.49993 6.5 7.49993H5.5C5.36739 7.49993 5.24021 7.55261 5.14645 7.64638C5.05268 7.74014 5 7.86732 5 7.99993V9.95593C5 10.5199 4.534 10.9744 3.9715 10.9379C3.32985 10.899 2.69045 10.8293 2.0555 10.7289C1.418 10.6249 1 10.0649 1 9.41893V6.11343C0.999952 5.76295 1.0736 5.41638 1.21616 5.0962C1.35871 4.77602 1.567 4.4894 1.8275 4.25493Z"
                    fill="white"
                  ></path>
                </svg>
                Home Page
              </button>
              <button className="btn-lock-child" onClick={handleShowForm}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                  className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                  ></path>
                </svg>
                Search
              </button>
              <button
                className="btn-lock-child"
                onClick={() => setIsShow1((prev) => !prev)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                  className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                >
                  <path d="M12 12a2 2 0 0 1 1 3.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 12 12z"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 6a5 5 0 0 1 10 0v2h.857c1.282 0 2.417.818 2.664 2.076A25.71 25.71 0 0 1 21 15a25.71 25.71 0 0 1-.479 4.924C20.274 21.182 19.14 22 17.857 22H6.143c-1.282 0-2.417-.818-2.664-2.076A25.711 25.711 0 0 1 3 15c0-1.984.236-3.692.479-4.924C3.726 8.818 4.86 8 6.143 8H7V6zm8 0v2H9V6a3 3 0 1 1 6 0zm-8.857 4h11.714a.84.84 0 0 1 .508.157c.107.082.17.182.194.305.223 1.133.441 2.71.441 4.538 0 1.828-.218 3.405-.441 4.538a.488.488 0 0 1-.194.305.84.84 0 0 1-.508.157H6.143a.84.84 0 0 1-.508-.157.489.489 0 0 1-.194-.305A23.712 23.712 0 0 1 5 15c0-1.828.218-3.405.441-4.538a.489.489 0 0 1 .194-.305.84.84 0 0 1 .508-.157z"
                  ></path>
                </svg>
                Privacy Policy
                {isShow1 ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </button>
              {isShow1 && (
                <ul>
                  <li onClick={handleShowForm}>
                    What is the Privacy Policy and what does it cover?
                  </li>
                  <li onClick={handleShowForm}>
                    What information do we collect?
                  </li>
                  <li onClick={handleShowForm}>
                    How do we use your information?
                  </li>
                  <li onClick={handleShowForm}>
                    How do we share your information on Meta Products or with
                    integrated partners?
                  </li>
                  <li onClick={handleShowForm}>
                    How do we share information with third parties?
                  </li>
                  <li onClick={handleShowForm}>
                    How is the cooperation between Meta Companies organized?
                  </li>
                  <li onClick={handleShowForm}>
                    How can you manage or delete your information and exercise
                    your rights?
                  </li>
                  <li onClick={handleShowForm}>
                    How long do we keep your information?
                  </li>
                  <li onClick={handleShowForm}>
                    How do we transmit information?
                  </li>
                </ul>
              )}
              <button
                className="btn-lock-child"
                onClick={() => setIsShow2((prev) => !prev)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                  className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-13.702c.483 0 .875.391.875.875V17a.875.875 0 0 1-1.75 0v-6.827c0-.484.392-.875.875-.875zm0-1.275c.833 0 1.25-.405 1.25-1.012C13.25 6.405 12.833 6 12 6s-1.25.405-1.25 1.011c0 .607.417 1.012 1.25 1.012z"
                  ></path>
                </svg>
                Other rules and articles
                {isShow2 ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </button>
              {isShow2 && (
                <ul>
                  <li onClick={handleShowForm}>Cookie Policy</li>
                  <li onClick={handleShowForm}>
                    Information for those who do not use Meta Products
                  </li>
                  <li onClick={handleShowForm}>
                    How Meta uses information for generative AI models?
                  </li>
                  <li onClick={handleShowForm}>
                    Data Transfer Framework Policy
                  </li>
                  <li onClick={handleShowForm}>Other terms and conditions</li>
                </ul>
              )}
              <button
                className="btn-lock-child"
                onClick={() => setIsShow3((prev) => !prev)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                  className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m22.191 9.207-2.224 2.06a8.112 8.112 0 0 1 0 1.466l2.224 2.06a1 1 0 0 1 .187 1.233l-1.702 2.948a1 1 0 0 1-1.162.455l-2.895-.896a7.991 7.991 0 0 1-1.27.735l-.672 2.954a1 1 0 0 1-.975.778H10.3a1 1 0 0 1-.975-.778l-.672-2.954a8 8 0 0 1-1.27-.735l-2.895.896a1 1 0 0 1-1.162-.455l-1.702-2.948a1 1 0 0 1 .187-1.233l2.224-2.06a8.1 8.1 0 0 1 0-1.466L1.81 9.207a1 1 0 0 1-.187-1.233l1.702-2.948a1 1 0 0 1 1.162-.455l2.895.896a7.992 7.992 0 0 1 1.27-.735l.672-2.954A1 1 0 0 1 10.299 1h3.403a1 1 0 0 1 .975.778l.672 2.954a7.99 7.99 0 0 1 1.27.735l2.895-.896a1 1 0 0 1 1.162.455l1.702 2.948a1 1 0 0 1-.187 1.233zm-8.574-3.071.894.412c.335.155.653.34.952.551l.805.57 3.075-.951.903 1.564-2.36 2.186.09.98a6.093 6.093 0 0 1 0 1.104l-.09.98 2.36 2.185-.903 1.565-3.075-.951-.805.57a5.993 5.993 0 0 1-.952.55l-.894.413L12.904 21h-1.807l-.713-3.136-.894-.412a5.993 5.993 0 0 1-.952-.551l-.805-.57-3.075.951-.904-1.565 2.36-2.185-.089-.98a6.102 6.102 0 0 1 0-1.104l.09-.98-2.36-2.186.903-1.564 3.075.951.805-.57c.299-.212.617-.396.952-.55l.894-.413L11.097 3h1.807l.713 3.136z"
                  ></path>
                </svg>
                Settings
                {isShow3 ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </button>
              {isShow3 && (
                <ul>
                  <li onClick={handleShowForm}>Facebook Settings</li>
                  <li onClick={handleShowForm}>Instagram Settings</li>
                </ul>
              )}
            </div>
          </div> */}
          <div className="right">
            <div className="right-content">
              <div className="border">
                <LoginForm />
              </div>
            </div>
            {/* <footer className="meta-footer">
              <div className="footer-links">
                <div className="footer-column">
                  <a href="#">About</a>
                  <a href="#">Ad choices</a>
                  <a href="#">Create ad</a>
                </div>
                <div className="footer-column">
                  <a href="#">Privacy</a>
                  <a href="#">Careers</a>
                  <a href="#">Create Page</a>
                </div>
                <div className="footer-column">
                  <a href="#">Terms and policies</a>
                  <a href="#">Cookies</a>
                </div>
              </div>

              <hr />

              <div className="footer-bottom">
                <span className="footer-meta">
                  from{" "}
                  <a href="#">
                    <img src="/metalogo.svg" alt="Meta" className="meta-logo" />{" "}
                  </a>
                </span>
                <span className="footer-copy">© 2025 Meta</span>
              </div>
            </footer> */}
          </div>
        </div>
      </>
    </>
  );
}

export default App;
