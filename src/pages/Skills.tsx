import { SectionTitle } from "@/components/app/common";
import { GET_SKILLS_SET } from "@/contentful-graphql/gql-queries";
import { ISkills } from "@/lib/app-utils/types/skills";
import { useQuery } from "@apollo/client";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const Skills = () => {
  const { loading, data, error } = useQuery<ISkills>(GET_SKILLS_SET);

  const mySkills = useMemo(() => data?.mySkills.items, [data?.mySkills]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Skills" icon={faHandFist} />
      <div>
        <div className="text-6xl text-balance mb-8">
          My <span className="text-green-500">Skills</span>
        </div>
        {mySkills?.map((skill) => (
          <div key={skill.sys.id}>
            <div className="text-lg font-semibold mb-4">{skill.title}</div>
            <div className="flex flex-wrap gap-8 my-8">
              {skill.skills.items.map((s) => (
                <div key={s.sys.id} className="text-center">
                  <div className="rounded-full border border-gray-500 px-8 py-4 mb-4">
                    <div className="text-3xl font-semibold text-green-500">
                      {s.percentage}%
                    </div>
                  </div>
                  <div>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
