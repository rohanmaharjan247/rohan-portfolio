import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SectionTitleProps = {
  title: string;
  icon: IconDefinition;
};

const SectionTitle = ({ title, icon }: SectionTitleProps) => {
  return (
    <span id="section-title" className="rounded-full px-4 pb-1 border border-slate-700">
      <FontAwesomeIcon icon={icon} className="mr-2 text-xs" />
      <span className="uppercase font-light text-xs align-middle">{title}</span>
    </span>
  );
};

export default SectionTitle;
