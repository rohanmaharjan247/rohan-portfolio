import { MyServicesFields } from "@/lib/app-utils/types/my-services";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionComponent from "../animation/MotionComponent";

type MyServicesCardProps = {
  service: MyServicesFields;
};

const MyServicesCard = ({ service }: MyServicesCardProps) => {
  const serviceVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: -104 },
  };
  return (
    <MotionComponent variants={serviceVariant}>
      <div className="border border-gray-500 rounded-lg p-12 my-4">
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
    </MotionComponent>
  );
};

export default MyServicesCard;
