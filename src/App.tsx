// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { IconNav, PersonalInfo } from "./components/app/common";
import Sidenav from "./components/app/common/Sidenav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import MainLayout from "./layout/MainLayout";
import {
  About,
  Contact,
  Introduction,
  Portfolio,
  Resume,
  Services,
  Skills,
} from "./pages";
import {
  faBars,
  faBriefcase,
  faEnvelopeCircleCheck,
  faHandFist,
  faHomeAlt,
  faListDots,
  faProjectDiagram,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <MainLayout>
      <div className="container relative">
        <div className="fixed right-0 top-0 z-10 py-4 mr-4 xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div className="px-4 py-3 bg-background border border-gray-500 rounded-full">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <ul className="icon_menu mt-8">
                <li>
                  <SheetClose asChild>
                    <a href="#introduction">
                      <FontAwesomeIcon icon={faHomeAlt} className="mr-2" />
                      Home
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a href="#about">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      About
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a href="#resume">
                      <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                      Resume
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a href="#services">
                      <FontAwesomeIcon icon={faListDots} className="mr-2" />
                      Services
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a href="#skills">
                      <FontAwesomeIcon icon={faHandFist} className="mr-2" />
                      Skills
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a href="#portfolio">
                      <FontAwesomeIcon
                        icon={faProjectDiagram}
                        className="mr-2"
                      />
                      Portfolio
                    </a>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <a href="#contact">
                      <FontAwesomeIcon
                        icon={faEnvelopeCircleCheck}
                        className="mr-2"
                      />
                      Contact
                    </a>
                  </SheetClose>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden xl:block">
          <Sidenav />
        </div>
        <div className="block md:px-16 md:mx-8 pt-20 pb-8 xl:hidden">
          <PersonalInfo />
        </div>
        <div className="mx-auto px-4 xl:mx-32 xl:pl-36 md:py-16">
          <div className="xl:ml-32">
            <section id="introduction">
              <Introduction />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="resume">
              <Resume />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
        <IconNav />
      </div>
    </MainLayout>
  );
}

export default App;
