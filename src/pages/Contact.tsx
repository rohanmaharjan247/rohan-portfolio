import MotionComponent from "@/components/app/animation/MotionComponent";
import { SectionTitle } from "@/components/app/common";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const contactVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: -104 },
  };
  return (
    <>
      <SectionTitle title="Contact" icon={faEnvelopeCircleCheck} />
      <div>
        <MotionComponent variants={titleVariant}>
          <div className="text-6xl text-balance mb-8">
            Let Us <span className="text-green-500">Chat</span>
          </div>
        </MotionComponent>
        <MotionComponent variants={contactVariant}>
          <div className="flex flex-wrap gap-12 lg:text-center">
            <div>
              <div className="mb-2 font-semibold text-green-500">Contact</div>
              <div className="text-2xl font-semibold">+977-9841171088</div>
            </div>
            <div>
              <div className="mb-2 font-semibold text-green-500">Email</div>
              <div className="text-2xl font-semibold">
                rohanmaharjan1995@gmail.com
              </div>
            </div>
            <div>
              <div className="mb-2 font-semibold text-green-500">Socials</div>
              <ul className="inline-flex gap-4">
                <li>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </MotionComponent>
      </div>
    </>
  );
};

export default Contact;
