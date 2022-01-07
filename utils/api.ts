import axios from "axios";

export async function fetchUserProfile(token) {
  const response = await axios.get("http://localhost:5000/auth/profile", {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
}

export async function uploadVideoToServer(video, token, setPercentage) {
  const response = await axios.post(
    "http://localhost:5000/upload/video",
    video,
    {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded * 100) / total);

        if (percent <= 100) {
          setPercentage({ displayProgress: true, percent });
        }
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
}
