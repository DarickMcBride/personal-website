import { FaGithub } from "react-icons/fa";
import TechCarousel from "./components/archive/TechCarousel";
import TechMobile from "./components/archive/TechMobile";
import Heading from "./components/Heading";
import Summary from "./components/Summary";
import ContactButtons from "./components/ContactButtons";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="mx-6 sm:mx-10 pt-20 pb-10 sm:w-5/12 z-10 flex flex-row border-2 border-white h-screen">
      <div className="flex flex-col min-w-96 mr-4 w-1/2 justify-between">
        <div>
          <Heading />
        </div>
        <div className="">
          <ContactButtons />
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto scrollbar-hide">
        <div className="mb-28 ">
          <Summary />
        </div>
        <div className="max-w-lg ">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
