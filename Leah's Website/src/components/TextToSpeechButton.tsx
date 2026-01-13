import "./TextToSpeechButton.css";
import { Volume2 } from "lucide-react";

interface TTSButtonProps {
  text: string;
}

function TTSButton({ text }: TTSButtonProps) {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-AU";
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="tts-container">
      <button onClick={speak} className="tts-button" title="Read page aloud"> 
        <Volume2 size={24} /> 
      </button> 
      <p className="tts-label">Read Aloud</p>
    </div>
  );
}

export default TTSButton;

