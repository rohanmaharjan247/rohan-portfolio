import { PorfolioFields } from "@/lib/app-utils/types/portfolio";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionComponent from "../animation/MotionComponent";

type PortfolioCardProps = {
  portfolio: PorfolioFields;
};

const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  const portfolioVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: -104 },
  };
  return (
    <MotionComponent variants={portfolioVariant}>
      <div>
        <div className="relative">
          <img
            src={portfolio.image.url}
            className="rounded-lg mb-4 aspect-square object-contain bg-gray-500"
          />
          <div className="absolute left-4 bottom-4">
            <a
              href={portfolio.githubUrl}
              className="rounded-full px-4 py-2 bg-primary text-primary-foreground font-semibold"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              Link
            </a>
          </div>
        </div>
        <div className="font-bold">{portfolio.title}</div>
      </div>
    </MotionComponent>
  );
};

export default PortfolioCard;
