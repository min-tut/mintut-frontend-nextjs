import Header from "components/Header";
import VideoDetailsEditForm from "components/videoUploadComponent/VideoDetailsEditForm";
import React from "react";

function VideoUploadEditPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        Form Edit Page
        <VideoDetailsEditForm />
      </div>
    </>
  );
}
export default VideoUploadEditPage;
