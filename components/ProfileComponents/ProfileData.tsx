import Image from "next/image";
function ProfileData({ channelName, channelLogo }) {
  return (
    <div>
      {channelName}
      <Image src={channelLogo} alt={channelName} width="100%" height="100%" />
    </div>
  );
}

export default ProfileData;
