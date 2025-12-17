"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

type Props = {
  onBlock?: () => void;
  onDelete?: () => void;
};

export default function ChatActionsMenu({ onBlock, onDelete }: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!openMenu) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!openMenu) return;
      if (e.key === "Escape") setOpenMenu(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  const handleBlock = () => {
    setOpenMenu(false);
    onBlock?.();
  };

  const handleDelete = () => {
    setOpenMenu(false);
    onDelete?.();
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpenMenu((p) => !p)}
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        aria-haspopup="menu"
        aria-expanded={openMenu}
      >
        <HiOutlineDotsHorizontal className="text-xl" />
      </button>

      {openMenu ? (
        <div
          className="absolute end-0 mt-2 w-40 bg-white border border-[#EDEDED] rounded-lg shadow-sm overflow-hidden z-50"
          role="menu"
        >
          <button
            type="button"
            onClick={handleBlock}
            className="w-full px-4 py-2 text-sm text-[#262626] hover:bg-[#F8F9FA] text-center"
            role="menuitem"
          >
            حظر
          </button>

          <div className="h-px bg-[#EDEDED]" />

          <button
            type="button"
            onClick={handleDelete}
            className="w-full px-4 py-2 text-sm text-[#E02424] hover:bg-[#F8F9FA] text-center"
            role="menuitem"
          >
            حذف
          </button>
        </div>
      ) : null}
    </div>
  );
}
