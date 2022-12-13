import { useState, useEffect } from "react";
import { FaCloud, FaRegMoon, FaRegSun } from "react-icons/fa";
import SwitchBtn from "react-switch";

const Switch = () => {
    const [checked, setChecked] = useState<{checked: boolean}>({checked: false})
  const [mode, setMode] = useState<{ mode: "dark" | "light" }>({
    mode: "dark",
  });

  function handleChange(checked: boolean) {
    setChecked({ checked: checked });
  }

  useEffect(() => {
    setMode({ mode: "dark" });
  }, []);
  return (
    <div>
      <label>
        <SwitchBtn onChange={handleChange} checked={checked.checked}
        checkedIcon={<FaRegSun accentHeight={2}/>}
        uncheckedIcon={<FaRegMoon/>}
        onColor= "#00fa9a"
        />
      </label>
    </div>
  );
};

export default Switch;
