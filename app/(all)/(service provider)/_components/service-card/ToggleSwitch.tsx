import React from "react";

interface ToggleSwitchProps {
  isActive: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isActive }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        defaultChecked={isActive}
      />

      <div
        className="
          w-11 h-6 bg-gray-300 rounded-full 
          peer-checked:bg-green-500 transition-colors duration-200
          after:absolute after:top-[2px] after:right-[3px]
          after:bg-white after:w-5 after:h-5 after:rounded-full
          after:transition-all after:duration-200
          peer-checked:after:translate-x-[-20px]
        "
      />
    </label>
  );
};

export default ToggleSwitch;
