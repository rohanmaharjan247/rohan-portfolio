import { Button } from "@/components/ui/button";
import { GET_PERSONAL_INFO } from "@/contentful-graphql/gql-queries";
import { IPersonalInfo } from "@/lib/app-utils/types/personal-info";
import { useQuery } from "@apollo/client";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
const ProfileInfo = () => {
  const { loading, data, error } = useQuery<IPersonalInfo>(GET_PERSONAL_INFO);
  const personalInfo = useMemo(() => data?.personalInfo, [data?.personalInfo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          {personalInfo?.fullName.split(" ")?.at(0)}
        </h1>
        <h2 className="self-end">{personalInfo?.jobTitle}</h2>
      </div>
      <img
        src={personalInfo?.profileImage.url}
        className="rounded-2xl max-w-sm w-[294px] aspect-square mx-auto grayscale"
      />
      <div className="text-center my-8">
        <div className="text-2xl">{personalInfo?.email}</div>
        <div className="text-xl font-light">{personalInfo?.address}</div>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <a href="#" target="_blank">
            <li className="py-2 px-3 border rounded-full my-4 hover:bg-green-500 text-gray-200 transition-colors">
              <FontAwesomeIcon icon={faGithubAlt} />
            </li>
          </a>
          <li className="py-2 px-3 border rounded-full my-4 hover:bg-green-500 text-gray-200 transition-colors">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="py-2 px-3 border rounded-full my-4 hover:bg-green-500 text-gray-200 transition-colors">
            <a href="mailto:rohanmaharjan1995@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
      <Button className="w-full">
        Hire Me
        <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
      </Button>
    </>
  );
};

export default ProfileInfo;
