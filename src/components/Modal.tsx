import React from "react";

type Props = {
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Modal({ children, onClose }: Props) {
  return (
    <div className="absolute flex  bg-gray-800 inset-0 opacity-40">
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-white text-lg"
      >
        X
      </button>
      {children}
    </div>
  );
}
