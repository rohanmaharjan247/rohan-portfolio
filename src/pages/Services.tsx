import MotionComponent from "@/components/app/animation/MotionComponent";
import { SectionTitle } from "@/components/app/common";
import { MyServicesCard } from "@/components/app/partial";
import { Skeleton } from "@/components/ui/skeleton";
import { GET_MY_SERVICES } from "@/contentful-graphql/gql-queries";
import { IMyServices } from "@/lib/app-utils/types/my-services";
import { useQuery } from "@apollo/client";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const Services = () => {
  const { loading, data, error } = useQuery<IMyServices>(GET_MY_SERVICES);

  const myServices = useMemo(() => data?.myServices.items, [data?.myServices]);

  const titleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  if (loading) {
    return (
      <>
        <SectionTitle title="Services" icon={faListDots} />
        <div>
          <MotionComponent variants={titleVariant}>
            <div className="text-6xl text-balance mb-8">
              My <span className="text-green-500">Services</span>
            </div>
          </MotionComponent>

          <Skeleton className="w-full h-32 mb-4" />
          <Skeleton className="w-full h-32" />
        </div>
      </>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <SectionTitle title="Services" icon={faListDots} />
      <div>
        <MotionComponent variants={titleVariant}>
          <div className="text-6xl text-balance mb-8">
            My <span className="text-green-500">Services</span>
          </div>
        </MotionComponent>

        {myServices?.map((service) => (
          <MyServicesCard service={service} key={service.sys.id} />
        ))}
      </div>
    </>
  );
};

export default Services;
