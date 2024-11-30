"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  toggle: () => void;
}


const Modal = ({ onClose, toggle }: ModalProps) => {
    return createPortal(
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
        <div
          className="bg-gradient-to-br from-[#1a1f36] to-[#252b45] border border-accent/30 
              border-solid backdrop-blur-md shadow-lg shadow-blue-500/20
              py-8 px-6 xs:px-10 sm:px-16 rounded-xl text-center space-y-8 relative animate-fade-in"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-blue-500/10 blur-lg"></div>
  
          <p className="font-light text-white text-lg">
            Would you like to play the background music?
          </p>
  
          <div className="flex items-center justify-center space-x-4 relative z-10">
            <button
              onClick={toggle}
              className="px-4 py-2 border border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-white rounded transition-shadow hover:shadow-lg hover:shadow-blue-500/40"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-500 bg-gray-700/10 hover:bg-gray-700/20 text-white rounded transition-shadow hover:shadow-lg hover:shadow-gray-500/40"
            >
              No
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("my-modal") as HTMLElement
    );
  };
  

const Sound = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current?.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (
      consent && consentTime && new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date().getTime()
    ) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    // !isPlaying ? audioRef.current?.play(): audioRef.current?.pause()
    newState ? audioRef.current?.play() : audioRef.current?.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
      <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        // aria-label={"Sound control button"}
        // name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
