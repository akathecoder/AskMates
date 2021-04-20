import CardSettings from "./CardSettings";
import CardProfile from "./CardProfile";
import { useState } from "react";

const UserProfilePage = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      <div className="flex flex-col lg:px-48 lg:py-12 md:px-20 md:py-10">
        <div className="px-10">
          {/* Edit Profile */}
          <button
            className="relative flex lg:w-2/12 md:w-2/5 flex-col rounded-lg items-center ml-auto focus:outline-none bg-gray-200 text-gray-700 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 hover:font-bold transititon duration-200 ease-in-out transform hover:scale-105"
            onClick={() => setEnabled(false)}
          >
            <div className="p-3 font-semibold uppercase text-lg break-words">
              Edit Profile
            </div>
          </button>
        </div>
        <div className="flex flex-wrap py-5">
          <div className="w-full lg:w-4/12 px-6 pb-10">
            <CardProfile />
          </div>
          <div className="w-full lg:w-8/12 px-6 pb-10">
            <CardSettings enabled={enabled} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
