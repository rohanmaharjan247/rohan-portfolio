import { SectionTitle } from "@/components/app/common";
import { GET_PORTFOLIO } from "@/contentful-graphql/gql-queries";
import { IPortfolio } from "@/lib/app-utils/types/portfolio";
import { useQuery } from "@apollo/client";
import { faLink, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

const Portfolio = () => {
  const { loading, error, data } = useQuery<IPortfolio>(GET_PORTFOLIO);

  const porfolio = useMemo(() => data?.portfolio.items, [data?.portfolio]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Portfolio" icon={faProjectDiagram} />
      <div className="text-6xl text-balance mb-8">
        Featured <span className="text-green-500">Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {porfolio?.map((p) => (
          <div key={p.sys.id}>
            <div className="relative">
              <img
                src={p.image.url}
                className="rounded-lg mb-4 aspect-square object-contain bg-gray-500"
              />
              <div className="absolute left-4 bottom-4">
                <a
                  href={p.githubUrl}
                  className="rounded-full px-4 py-2 bg-primary text-primary-foreground font-semibold"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} className="mr-2" />
                  Link
                </a>
              </div>
            </div>
            <div className="font-bold">{p.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
