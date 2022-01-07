import axios from "axios";
import Header from "components/Header";
import ProfileData from "components/ProfileComponents/ProfileData";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";

function ProfilePage({ channel }) {
  return (
    <>
      <Head>
        <title>{channel.channelName} - Mintuts</title>
        <meta name="description" content="A place to watch short tutorials" />
        <link rel="icon" href="/mintut-logo.svg" />
      </Head>
      <div className="">
        <Header />
      </div>
      <div>
        Profile Page
        {channel?.channelName}
        <div className="rounded-full flex justify-center items-center">
          <ProfileData
            channelName={channel.channelName}
            channelLogo={channel.channelLogo}
          />
        </div>
        <div>
          {!channel.channelVideos.length ? (
            <>No videos found</>
          ) : (
            <>
              {channel.channelVideos.map((v) => {
                return <>{v.videoId}</>;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const userid = params?.userid;
  const response = await axios.get(
    `http://localhost:5000/profile/info?id=${userid}`
  );
  return {
    props: {
      channel: response.data,
    },
  };
};
