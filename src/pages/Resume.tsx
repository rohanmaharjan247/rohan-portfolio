import { SectionTitle } from "@/components/app/common";
import {
  GET_EDUCATION_HISTORY,
  GET_WORK_EXPERIENCE,
} from "@/contentful-graphql/gql-queries";
import { IWorkExperiece } from "@/lib/app-utils/types/WorkExperience";
import { useQuery } from "@apollo/client";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { IEducation } from "@/lib/app-utils/types/education";
import MotionComponent from "@/components/app/animation/MotionComponent";
import {
  EducationTimeline,
  ExperienceTimeline,
} from "@/components/app/partial";
import { Skeleton } from "@/components/ui/skeleton";

const Resume = () => {
  const { loading, data, error } =
    useQuery<IWorkExperiece>(GET_WORK_EXPERIENCE);
  const { data: education } = useQuery<IEducation>(GET_EDUCATION_HISTORY);

  const experienceVariants = {
    visible: { opacity: 1, translateX: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateX: -104 },
  };
  const educationVariants = {
    visible: { opacity: 1, translateX: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateX: 104 },
  };

  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const workExperience = useMemo(
    () => data?.workExperience.items,
    [data?.workExperience]
  );
  const educationHistory = useMemo(
    () => education?.education.items,
    [education?.education]
  );

  if (loading) {
    return (
      <>
        <SectionTitle title="Resume" icon={faBriefcase} />
        <div>
          <div className="text-6xl text-balance mb-8">
            Education & <span className="text-green-500">Experience</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full h-full">
              <Skeleton className="w-full aspect-square" />
            </div>
            <div className="w-full h-full">
              <Skeleton className="w-full aspect-square" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Resume" icon={faBriefcase} />
      <div>
        <MotionComponent variants={titleVariant}>
          <div className="text-6xl text-balance mb-8">
            Education & <span className="text-green-500">Experience</span>
          </div>
        </MotionComponent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionComponent initialValue="hidden" variants={experienceVariants}>
            <div className="text-xl text-green-500 mb-4">Experience</div>
            <div className="timeline">
              {workExperience?.map((experience) => (
                <ExperienceTimeline
                  experience={experience}
                  key={experience.sys.id}
                />
              ))}
            </div>
          </MotionComponent>
          <MotionComponent initialValue="hidden" variants={educationVariants}>
            <div className="text-xl text-green-500 mb-4">Education</div>
            {educationHistory?.map((education) => (
              <EducationTimeline education={education} key={education.sys.id} />
            ))}
          </MotionComponent>
        </div>
      </div>
    </>
  );
};

export default Resume;
