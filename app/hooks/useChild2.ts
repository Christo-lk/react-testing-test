import { useState } from "react";

const useChild2 = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("child2 rerendered");

  const toggleChild2Checked = () => {
    setIsChecked(!isChecked);
  };

  return { isChild2Checked: isChecked, toggleChild2Checked };
};

export default useChild2;
