import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const NoAnswer = () => {
  return (
    <>
      <div className="px-12 py-6 bg-red-100 shadow-md">
        <div className="flex gap-8 ">
          <FontAwesomeIcon
            icon={faExclamation}
            size="5x"
            color="red"
            className="mt-2"
          />
          <div className="my-auto">
            <h1 className="text-4xl">No Answers yet</h1>
            <h2 className="text-xl">
              Be the first one to answer
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoAnswer;
