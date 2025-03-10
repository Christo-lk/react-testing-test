import useChild1 from "./useChild1";
import useChild2 from "./useChild2";

const useParentHook = () => {
  const child1 = useChild1();
  const child2 = useChild2();

  return {
    isChild1Checked: child1.isChild1Checked,
    isChild2Checked: child2.isChild2Checked,
    toggleChild1Checked: child1.toggleChild1Checked,
    toggleChild2Checked: child2.toggleChild2Checked,
  };
};

export default useParentHook;
