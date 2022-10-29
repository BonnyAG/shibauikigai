import { Header } from "../components/Header";
import Offers from "../components/Offers";
import Plans from "../components/Plans";

const Services = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
        <Header/>
        <Plans />
        <Offers />
      </div>
    </>
    )
  };
  
  export default Services;