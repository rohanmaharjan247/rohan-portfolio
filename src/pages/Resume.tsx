import { SectionTitle } from "@/components/app/common";
import {
  GET_EDUCATION_HISTORY,
  GET_WORK_EXPERIENCE,
} from "@/contentful-graphql/gql-queries";
import { IWorkExperiece } from "@/lib/app-utils/types/WorkExperience";
import { useQuery } from "@apollo/client";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { format } from "date-fns";
import { IEducation } from "@/lib/app-utils/types/education";

const Resume = () => {
  const { loading, data, error } =
    useQuery<IWorkExperiece>(GET_WORK_EXPERIENCE);
  const {
    loading: educationLoading,
    data: education,
    error: educationError,
  } = useQuery<IEducation>(GET_EDUCATION_HISTORY);

  const workExperience = useMemo(
    () => data?.workExperience.items,
    [data?.workExperience]
  );
  const educationHistory = useMemo(
    () => education?.education.items,
    [education?.education]
  );
  console.log("workExperience", workExperience);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Resume" icon={faBriefcase} />
      <div>
        <div className="text-6xl text-balance mb-8">
          Education & <span className="text-green-500">Experience</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-xl text-green-500 mb-4">Experience</div>
            <div className="timeline">
              {workExperience?.map((experience) => (
                <div className="timeline_item" key={experience.sys.id}>
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
              ))}
            </div>
          </div>
          <div>
            <div className="text-xl text-green-500 mb-4">Education</div>
            {educationHistory?.map((education) => (
              <div className="timeline_item" key={education.sys.id}>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
