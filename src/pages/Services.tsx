import { SectionTitle } from "@/components/app/common";
import { GET_MY_SERVICES } from "@/contentful-graphql/gql-queries";
import { IMyServices } from "@/lib/app-utils/types/my-services";
import { useQuery } from "@apollo/client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";

const Services = () => {
  const { loading, data, error } = useQuery<IMyServices>(GET_MY_SERVICES);

  const myServices = useMemo(() => data?.myServices.items, [data?.myServices]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Services" icon={faListDots} />
      <div>
        <div className="text-6xl text-balance mb-8">
          My <span className="text-green-500">Services</span>
        </div>

        {myServices?.map((service) => (
          <div
            className="border border-gray-500 rounded-lg p-12 my-4"
            key={service.sys.id}
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="order-2 md:order-1">
                <div className="text-2xl mb-2">{service.title}</div>
                <div className="text-gray-500">{service.description}</div>
              </div>
              <div className="order-1 md:order-2">
                <FontAwesomeIcon
                  icon={service.iconName as IconProp}
                  className="text-2xl text-green-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
