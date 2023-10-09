import { SectionTitle } from "@/components/app/common";
import { GET_ABOUT_ME } from "@/contentful-graphql/gql-queries";
import { IAboutMe } from "@/lib/app-utils/types/about-me";
import { useQuery } from "@apollo/client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const About = () => {
  const { loading, data, error } = useQuery<IAboutMe>(GET_ABOUT_ME);

  const aboutMe = useMemo(() => data?.aboutMe, [data?.aboutMe]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="About" icon={faUser} />
      <div>
        <div className="text-6xl text-balance mb-8">{aboutMe?.title}</div>
        <div className="text-gray-400 text-balance">{aboutMe?.description}</div>
      </div>
    </>
  );
};

export default About;
