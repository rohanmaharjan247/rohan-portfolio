import MotionComponent from "@/components/app/animation/MotionComponent";
import { SectionTitle } from "@/components/app/common";
import { PortfolioCard } from "@/components/app/partial";
import { Skeleton } from "@/components/ui/skeleton";
import { GET_PORTFOLIO } from "@/contentful-graphql/gql-queries";
import { IPortfolio } from "@/lib/app-utils/types/portfolio";
import { useQuery } from "@apollo/client";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const Portfolio = () => {
  const { loading, error, data } = useQuery<IPortfolio>(GET_PORTFOLIO);

  const porfolio = useMemo(() => data?.portfolio.items, [data?.portfolio]);

  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  if (loading) {
    return (
      <>
        <SectionTitle title="Portfolio" icon={faProjectDiagram} />
        <div className="text-6xl text-balance mb-8">
          Featured <span className="text-green-500">Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="w-full aspect-square" />
          <Skeleton className="w-full aspect-square" />
          <Skeleton className="w-full aspect-square" />
        </div>
      </>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Portfolio" icon={faProjectDiagram} />
      <MotionComponent variants={titleVariant}>
        <div className="text-6xl text-balance mb-8">
          Featured <span className="text-green-500">Projects</span>
        </div>
      </MotionComponent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {porfolio?.map((p) => (
          <PortfolioCard portfolio={p} key={p.sys.id} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
