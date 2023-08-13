import React, { useState } from "react";

const CaptionInput = () => {
  const [caption, setCaption] = useState("");

  return (
    <div className="caption-input-container">
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter your caption here..."
      />
      {/* You can add a date-time picker component here */}
    </div>
  );
};

export default CaptionInput;
