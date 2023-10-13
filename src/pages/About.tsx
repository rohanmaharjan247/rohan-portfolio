import MotionComponent from "@/components/app/animation/MotionComponent";
import { SectionTitle } from "@/components/app/common";
import { Skeleton } from "@/components/ui/skeleton";
import { GET_ABOUT_ME } from "@/contentful-graphql/gql-queries";
import { IAboutMe } from "@/lib/app-utils/types/about-me";
import { useQuery } from "@apollo/client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const About = () => {
  const { loading, data, error } = useQuery<IAboutMe>(GET_ABOUT_ME);

  const aboutMe = useMemo(() => data?.aboutMe, [data?.aboutMe]);

  const aboutVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: -104 },
  };
  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  if (loading) {
    return (
      <>
        <SectionTitle title="About" icon={faUser} />
        <div>
          <Skeleton className="h-16 w-full mb-8" />
          <Skeleton className="h-12 w-full" />
        </div>
      </>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="About" icon={faUser} />
      <div>
        <MotionComponent variants={titleVariant}>
          <div className="text-6xl text-balance mb-8">{aboutMe?.title}</div>
        </MotionComponent>
        <MotionComponent variants={aboutVariant}>
          <div className="text-gray-400 text-balance">
            {aboutMe?.description}
          </div>
        </MotionComponent>
      </div>
    </>
  );
};

export default About;
