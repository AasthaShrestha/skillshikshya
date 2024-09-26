import { useState } from "react";

const LightBulb = () => {
  const [on, setOn] = useState(false);

  //   useEffect(() => {
  //     setOn(true);
  //     return () => {};
  //   }, []);

  return (
    <>
      <p>{`Light Bulb is ${on ? "on" : "off"}`}</p>
      <button
        onClick={(e) => {
          console.log(e);
          setOn((on) => !on);
        }}
        className="rounded-full bg-amber-200 p-3"
      >
        Toggle
      </button>
    </>
  );
};

export default LightBulb;
