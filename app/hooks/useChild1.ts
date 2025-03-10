import { useState } from "react";

const useChild1 = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("child1 rerendered");
  const toggleChild1Checked = () => {
    setIsChecked(!isChecked);
  };

  return { isChild1Checked: isChecked, toggleChild1Checked };
};

export default useChild1;
