// TextToSpeech.js
import React from 'react';
import speak from 'speech-synthesis';

const TextToSpeech = ({text}) => {
  const handleSpeak = () => {
    if (text.trim()) {
      speak(text); // Use the `speak` function from `speech-synthesis`
    } else {
      alert("Please enter some text to convert to speech.");
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel(); // Stop the speech entirely
    setIsSpeaking(false); // Set speaking state to false
  };
  
  return (
    <div className='bg-light mb-3 p-3 d-flex gap-3'>
      <button onClick={handleSpeak} className='btn btn-success'>
        Play the news
      </button>
      <button onClick={handleStop} className='btn btn-danger'>
          Stop
        </button>
    </div>
  );
};


export default TextToSpeech;
