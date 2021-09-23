import React from "react";

const Thumbnail = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/3FNfhEy_c8o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Thumbnail;
