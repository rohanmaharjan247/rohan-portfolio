import { SkillSetFields } from "@/lib/app-utils/types/skills";
import MotionComponent from "../animation/MotionComponent";

type SkillCardProps = {
  skill: SkillSetFields;
};

const SkillCard = ({ skill }: SkillCardProps) => {
  const skillVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: -104 },
  };
  return (
    <MotionComponent variants={skillVariant}>
      <div className="text-center">
        <div className="rounded-full border border-gray-500 px-8 py-4 mb-4">
          <div className="text-3xl font-semibold text-green-500">
            {skill.percentage}%
          </div>
        </div>
        <div>{skill.name}</div>
      </div>
    </MotionComponent>
  );
};

export default SkillCard;
