import Header from "components/Header";
import VideoDetailsEditForm from "components/videoUploadComponent/VideoDetailsEditForm";
import React from "react";

function VideoUploadEditPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex bg-white border mt-8 max-w-4xl shadow-slate-100 drop-shadow-sm m-auto flex-col w-full h-full">
        <h1 className="m-auto py-2 px-2 border-b w-full text-center  font-medium text-3xl">
          Edit Video Details
        </h1>
        <VideoDetailsEditForm />
      </div>
    </>
  );
}
export default VideoUploadEditPage;
