import { useState, useEffect, ReactNode } from "react";
import { FaCloud, FaRegMoon, FaRegSun } from "react-icons/fa";
import SwitchBtn from "react-switch";

const centerDiv = (icon: ReactNode) => {
  return <div className="centerize">{icon}</div>;
};

const Switch = () => {
  const [checked, setChecked] = useState<{ checked: boolean }>({
    checked: false,
  });
  const [mode, setMode] = useState<{ mode: "dark" | "light" }>({
    mode: "dark",
  });

  function handleChange(checked: boolean) {
    setChecked({ checked: checked });
  }

  useEffect(() => {
    setMode({ mode: "dark" });
  }, []);

  let light = "#3730a3"
  let dark = "#00fa9a"

  return (
    <div>
      <label>
        <SwitchBtn
          onChange={handleChange}
          checked={checked.checked}
          checkedIcon={centerDiv(<FaRegSun />)}
          uncheckedIcon={centerDiv(<FaRegMoon />)} 
          onColor={light}
        />
      </label>
    </div>
  );
};

export default Switch;
