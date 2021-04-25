import React, { useEffect, useState } from "react";

function LightDark() {
  const [light, setLight] = useState(null);

  useEffect(() => {
    if (light === null) {
      setLight(
        !document
          .querySelector("html")
          .classList.contains("dark")
      );
    } else {
      light
        ? document
            .querySelector("html")
            .classList.remove("dark")
        : document
            .querySelector("html")
            .classList.add("dark");
    }
  }, [light]);

  return (
    <div
      className={
        "cursor-pointer flex rounded-full px-2 mx-4 py-0.5 shadow-2xl " +
        (light ? "bg-white" : "bg-gray-700")
      }
      onClick={() => {
        setLight(!light);
      }}
    >
      {light ? (
        <img
          src="/assets/sun.png"
          width="30"
          className="animate-spin-slow"
        />
      ) : (
        <img
          src="/assets/moon.png"
          width="30"
          className="animate-spin-slow"
        />
      )}

      <h1 className="my-auto ml-1 text-lg font-medium select-none">
        {light ? (
          <span>Light</span>
        ) : (
          <span className="text-white">Dark</span>
        )}
      </h1>
    </div>
  );
}

export default LightDark;
