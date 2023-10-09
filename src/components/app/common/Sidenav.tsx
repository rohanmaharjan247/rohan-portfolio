import { PersonalInfo } from ".";

const Sidenav = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 border rounded-md py-12 px-8">
      <PersonalInfo />
    </div>
  );
};

export default Sidenav;
