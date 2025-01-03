import Button from "./Button";
import Modal from "./Modal";
import Portal from "./Portal";
import { useState } from "react";
import ModalContent from "./ModalContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-5">
      <header className="flex justify-between py-3 border-b">
        <h1 className="text-3xl font-bold ">Three.js</h1>
        <Button text="License" onClick={() => setIsModalOpen(true)} />
      </header>
      <main className="flex justify-center items-center w-full h-svh p-5">
        {children}
      </main>
      <footer className="text-center">
        Copyright 2025. Soli. All right reserved.
      </footer>
      <div></div>
      {isModalOpen && (
        <Portal>
          <Modal onClose={() => setIsModalOpen(false)}>
            <ModalContent />
          </Modal>
        </Portal>
      )}
    </div>
  );
}
