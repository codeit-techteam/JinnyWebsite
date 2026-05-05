"use client";

import React from "react";

interface CustomSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
  className?: string;
  helperText?: string;
  theme?: "light" | "dark";
}

const CustomSelect = ({
  placeholder,
  options,
  className = "",
  helperText,
  theme = "light",
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((option) => option.value === selected)?.label;

  return (
    <div
      ref={ref}
      className={`custom-select custom-select-theme-${theme} ${isOpen ? "open" : ""} ${className}`}
    >
      <button
        type="button"
        className={`select-trigger ${selected ? "has-value" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selectedLabel || placeholder}
      </button>

      <div className="custom-select-dropdown" role="listbox">
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={`custom-select-option ${selected === option.value ? "active" : ""}`}
            onClick={() => {
              setSelected(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      {helperText ? <p className="select-helper-text">{helperText}</p> : null}
    </div>
  );
};

export default CustomSelect;
