import { WorkExperienceFields } from "@/lib/app-utils/types/WorkExperience";
import { format } from "date-fns";

type ExperienceTimelineProps = {
  experience: WorkExperienceFields;
};

const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => {
  return (
    <div className="timeline_item">
      <div className="timeline_item__content">
        <div className="text-gray-500 mb-6">
          {format(new Date(experience.joinedDate), "yyyy")} -{" "}
          {experience.currentlyWorking
            ? "Present"
            : format(new Date(experience.endDate), "yyyy")}
        </div>
        <div>
          <div className="text-2xl">{experience.title}</div>
          <div className="text-gray-500">{experience.company}</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
