import React from "react";

const Video = () => {
  return (
    <div className="pt-4 pb-4">
      <iframe
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/3FNfhEy_c8o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
