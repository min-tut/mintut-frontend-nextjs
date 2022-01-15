import { useAppSelector } from "app/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { uploadVideoToServer } from "utils/api";

const maxLength = 30;
const maxSize = 524288000;

const initialValue = {
  video: "",
};
const initialError = {
  code: "",
  message: "",
};
const initialProgress = {
  displayProgress: false,
  percent: 0,
};

function VideoUploadFormCard() {
  const [video, setVideo]: any = useState(initialValue.video);
  const [disableInput, setDisableInput] = useState(false);
  const [error, setError] = useState(initialError);
  const { token } = useAppSelector((state) => state.userReducer);
  const [data, setData] = useState("");
  const [percentage, setPercentage] = useState(initialProgress);
  function handleOnchange(e) {
    setError(initialError);
    setPercentage(initialProgress);
    const file = e.target.files[0];
    if (file.name.length > maxLength) {
      return setError({
        code: "name-too-large",
        message: `Name is larger than ${maxLength} characters`,
      });
    }
    if (file.size > maxSize) {
      return setError({
        code: "File-too-large",
        message: `File is larger than 500MB`,
      });
    }
    return setVideo(file);
  }
  useEffect(() => {}, []);
  const uploadVideo = async (e) => {
    e.preventDefault();
    console.log(video);
    const formdata = new FormData();
    formdata.append("video", video);
    await uploadVideoToServer(formdata, token, setPercentage).then(
      ({ data }) => {
        setData(data);
        setDisableInput(true);
      }
    );
    setVideo(initialValue.video);
  };
  return (
    <>
      <div className="w-full px-10 flex items-center h-full flex-col justify-center">
        <form onSubmit={uploadVideo} className="w-full max-w-3xl">
          <div className="w-full p-2 h-80 bg-slate-200 items-center justify-center rounded flex flex-col">
            <label
              className="flex outline-dashed outline-1 outline-slate-600 flex-col cursor-pointer text-center w-full h-full items-center justify-center flex-1"
              htmlFor="video"
            >
              {!disableInput && (
                <div className="flex items-center opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="rgb(55 65 81) "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span className=" font-roboto text-xl font-semibold text-gray-700">
                    {" "}
                    Select Video
                  </span>
                </div>
              )}
              <div> {video && video?.name} </div>
              <div>
                {percentage.displayProgress && (
                  <>
                    <div>
                      <h1>Uploading</h1>
                    </div>
                    <div>{percentage.percent}%</div>
                  </>
                )}
              </div>
              <div>
                {error.code ? (
                  <>
                    <div className="text-center flex flex-col items-center justify-center text-2xl text-red-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      {error.message}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </label>
            <input
              value={initialValue.video}
              onChange={handleOnchange}
              disabled={disableInput}
              className="hidden"
              type="file"
              name="video"
              accept="video/mp4, video/x-matroska, video/avi, video/3gp, video/webm"
              id="video"
            />
          </div>
          <div className="flex bg-white w-full py-2 px-4 items-end justify-end">
            <button
              className="px-4 rounded-sm py-2 font-Roboto font-medium hover:bg-pink-600 outline-hidden bg-pink-700  text-white"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>

      <div>{!data ? "" : <Link href={`upload/${data}`}>Next</Link>}</div>
      <div>
        {error.code ? (
          <>
            <div className="text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              {error.message}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default VideoUploadFormCard;
