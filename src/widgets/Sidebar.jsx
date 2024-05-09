import {Link, useLocation} from "react-router-dom";
import "./sidebar.css";
import {useEffect, useState} from "react";
import About from "./About.jsx";


function makeSideButton({ico, active_ico, text, onClick}) {
    // eslint-disable-next-line react/display-name
    return (active) => {
        return (
            <button className={active ? "nav-btn active" : "nav-btn"} onClick={onClick}>
                <img src={active ? active_ico : ico} alt={text}/>
                {text}
            </button>
        );
    }
}


function Sidebar() {
    const [buttons, setButton] = useState( [
        {
            component: makeSideButton({
                ico: "/home.svg",
                active_ico: "/home-active.svg",
                text: "Главная"
            }),
            path: "/",
            active: false
        },
        {
            component: makeSideButton({
                ico: "/catalog.svg",
                active_ico: "/catalog.svg",
                text: "Каталог"
            }),
            path: "/catalog",
            active: false
        },
        {
            component: makeSideButton({
                ico: "/about.svg",
                active_ico: "/about-active.svg",
                text: "О нас",
                onClick: () => whenAboutClicked()
            }),
            path: null,
            active: false
        }
    ]);

    const location = useLocation();

    useEffect(() => {
        setButton(buttons.map((button) => {
            return {
                ...button,
                active: button.path === location.pathname
            }
        }));
    }
    , [location]);

    const whenAboutClicked = () => {
        let component = document.getElementById("aboutDialog");
        let dialog = component.querySelector("md-dialog");
        dialog.open = !dialog.open;
    }

    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/logo.svg" alt="Logo"/>
            </div>
            <nav>
              <ul>
                  {
                      buttons.map((button, index) => {
                          let btn = button.component(button.active);
                          if (button.path === null) {
                              return (
                                  <li key={index}>
                                      {btn}
                                  </li>
                              );
                          } else {
                              return (
                                  <li key={index}>
                                      <Link to={button.path}>
                                          {btn}
                                      </Link>
                                  </li>
                              );
                          }
                      })
                  }
              </ul>
            </nav>
            <About />
        </div>
    );
}

export default Sidebar;