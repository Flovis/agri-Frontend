import React, { useState } from "react";

const Audio = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [translatedAudioUrl, setTranslatedAudioUrl] = useState("");

  const handleTranslate = async () => {
    try {
      const audio = await fetch(`https://api.youtube.com/audio/${youtubeUrl}`);
      const audioUrl = await audio.json();

      const translatedAudio = await fetch(
        `https://api.translate.com/translate?audio=${audioUrl}&to=fr`
      );
      const translatedAudioUrl = await translatedAudio.json();

      setTranslatedAudioUrl(translatedAudioUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">YouTube Audio Translator</h1>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="youtubeUrl">
          Enter YouTube URL:
        </label>
        <input
          id="youtubeUrl"
          type="text"
          className="border border-gray-300 px-4 py-2 rounded"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleTranslate}
      >
        Translate Audio
      </button>

      {translatedAudioUrl && (
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">Translated Audio:</h2>
          <audio src={translatedAudioUrl} controls />
        </div>
      )}
    </div>
  );
};

export default Audio;
