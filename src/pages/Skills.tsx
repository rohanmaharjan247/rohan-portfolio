import MotionComponent from "@/components/app/animation/MotionComponent";
import { SectionTitle } from "@/components/app/common";
import { SkillCard } from "@/components/app/partial";
import { Skeleton } from "@/components/ui/skeleton";
import { GET_SKILLS_SET } from "@/contentful-graphql/gql-queries";
import { ISkills } from "@/lib/app-utils/types/skills";
import { useQuery } from "@apollo/client";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const Skills = () => {
  const { loading, data, error } = useQuery<ISkills>(GET_SKILLS_SET);

  const mySkills = useMemo(() => data?.mySkills.items, [data?.mySkills]);
  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  if (loading) {
    return (
      <>
        <SectionTitle title="Skills" icon={faHandFist} />
        <div>
          <div className="text-6xl text-balance mb-8">
            My <span className="text-green-500">Skills</span>
          </div>
          <div>
            <div className="text-lg font-semibold mb-4">
              <Skeleton className="h-3 w-32" />
            </div>
            <div className="flex flex-wrap gap-8 my-8">
              <div className="text-center">
                <Skeleton className="h-8 w-12" />
              </div>
              <div className="text-center">
                <Skeleton className="h-8 w-12" />
              </div>
              <div className="text-center">
                <Skeleton className="h-8 w-12" />
              </div>
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
      <SectionTitle title="Skills" icon={faHandFist} />
      <div>
        <MotionComponent variants={titleVariant}>
          <div className="text-6xl text-balance mb-8">
            My <span className="text-green-500">Skills</span>
          </div>
        </MotionComponent>
        {mySkills?.map((skill) => (
          <div key={skill.sys.id}>
            <div className="text-lg font-semibold mb-4">{skill.title}</div>
            <div className="flex flex-wrap gap-8 my-8">
              {skill.skills.items.map((s) => (
                <SkillCard skill={s} key={s.sys.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
