import Header from "components/Header";
import VideoUploadForm from "components/videoUploadComponent";
import React from "react";

function UploadVideo() {
  return (
    <div>
      <Header />
      <h1>Upload Page</h1>
      <VideoUploadForm />
    </div>
  );
}

export default UploadVideo;
