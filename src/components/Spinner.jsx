import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
  let [color] = useState("#ffffff");

  return (
    <RingLoader
      color={color}
      size={60}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
