import { EducationHistoryFields } from "@/lib/app-utils/types/education";
import { format } from "date-fns";

type EducationTimelineProps = {
  education: EducationHistoryFields;
};

const EducationTimeline = ({ education }: EducationTimelineProps) => {
  return (
    <div className="timeline_item">
      <div className="timeline_item__content">
        <div className="text-gray-500 mb-6">
          {format(new Date(education.startedDate), "yyyy")} -{" "}
          {education.currentlyStudying
            ? "Present"
            : format(new Date(education.endDate), "yyyy")}
        </div>
        <div>
          <div className="text-2xl">{education.degree}</div>
          <div className="text-gray-500">{education.collegeName}</div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
