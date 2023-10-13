import { SectionTitle } from "@/components/app/common";
import { GET_PERSONAL_INFO } from "@/contentful-graphql/gql-queries";
import { IPersonalInfo } from "@/lib/app-utils/types/personal-info";
import { useQuery } from "@apollo/client";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import MotionComponent from "@/components/app/animation/MotionComponent";
import { Skeleton } from "@/components/ui/skeleton";

const Introduction = () => {
  const { loading, data, error } = useQuery<IPersonalInfo>(GET_PERSONAL_INFO);
  const personalInfo = useMemo(() => data?.personalInfo, [data?.personalInfo]);

  const introductionVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: -104 },
  };

  if (loading) {
    return (
      <>
        <SectionTitle title="Introduction" icon={faHomeAlt} />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-4 w-full my-12" />
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <Skeleton className="w-[128px] aspect-square" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-[128px] aspect-square" />
            <Skeleton className="w-full h-4" />
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
      <SectionTitle title="Introduction" icon={faHomeAlt} />
      <MotionComponent variants={introductionVariant}>
        <div className="text-6xl text-balance">
          <div className="capitalize">
            Hi From{" "}
            <span className="text-green-500">{personalInfo?.fullName}</span>,{" "}
            {personalInfo?.jobTitle}
          </div>
          <div className="text-gray-400 text-xl my-12">
            {personalInfo?.slogan}
          </div>
        </div>
      </MotionComponent>
      <MotionComponent variants={introductionVariant}>
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-6xl text-green-500">
              {personalInfo?.yearsOfExperience}+
            </div>
            <div className="uppercase text-gray-400">Years of Experience</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-6xl text-green-500">
              {personalInfo?.projectsCompleted}+
            </div>
            <div className="uppercase text-gray-400">
              Major Projects Completed
            </div>
          </div>
        </div>
      </MotionComponent>
    </>
  );
};

export default Introduction;
