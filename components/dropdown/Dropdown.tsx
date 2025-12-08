"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect: (value: string) => void;
  className?: string;
}

export default function Dropdown({
  options,
  placeholder = "Select",
  onSelect,
  className,
}: DropdownProps) {
    const t = useTranslations()
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState("");

  const menuRef = useRef<HTMLDivElement>(null);

  // Filter options by search
  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setOpen(false);
    setSearch(""); // reset search
  };

  // Close when click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={menuRef} className={`relative ${className}`}>
      <span className="dark-color text-sm block mb-2">{placeholder}</span>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 border border-[#E4E4E4] rounded-md flex items-center justify-between bg-white"
      >
        <span className="dark-color text-sm">{selected || placeholder}</span>
        <IoChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute mt-1 w-full bg-white border border-[#E4E4E4] rounded-md shadow-md z-50">
          
          {/* Search Input */}
          <div className="p-2 border-b border-[#E4E4E4]">
            <input
              type="text"
              placeholder={t("Search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-md outline-none"
            />
          </div>

          {/* Options List */}
          <div className="max-h-56 overflow-y-auto hide-scrollbar">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-gray-400">{t("No results")}</div>
            ) : (
              filteredOptions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))
            )}
          </div>

        </div>
      )}
    </div>
  );
}
