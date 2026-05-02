"use client";

import React from "react";

interface CustomSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
  className?: string;
}

const CustomSelect = ({ placeholder, options, className = '' }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === selected)?.label;

  return (
    <div ref={ref} className={`custom-select ${isOpen ? 'open' : ''} ${className}`}>
      <button
        type="button"
        className={`select-trigger ${selected ? 'has-value' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedLabel || placeholder}
      </button>

      <div className="custom-select-dropdown">
        {options.map((opt) => (
          <div
            key={opt.value}
            className={`custom-select-option ${selected === opt.value ? 'active' : ''}`}
            onClick={() => {
              setSelected(opt.value);
              setIsOpen(false);
            }}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
