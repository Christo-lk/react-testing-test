import useParentHook from "../hooks/useParentHook";
import Button from "./Button";

const HookTest = () => {
  const {
    toggleChild1Checked,
    toggleChild2Checked,
    isChild1Checked,
    isChild2Checked,
  } = useParentHook();

  console.log("HookTest rerendered");

  return (
    <div>
      <div>
        <Button onClick={toggleChild1Checked}>Toggle Child 1</Button>
        {isChild1Checked && <span>Child 1 is checked</span>}
      </div>

      <div>
        <Button onClick={toggleChild2Checked}>Toggle Child 2</Button>
        {isChild2Checked && <span>Child 2 is checked</span>}
      </div>
    </div>
  );
};

export default HookTest;
