import React from "react";
import VideoCard from "./VideoCard";
import { baseUrl } from "../config";

function CardsContainer({ videoData, setVideoData, setFetchData }) {
  async function handleDelete(id) {
    fetch(`${baseUrl}/videos/${id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setFetchData(true);
  }

  return (
    <div className="grid justify-center gap-9">
      {videoData
        ?.sort((a, b) => b.rating - a.rating)
        .map((singleVideo) => {
          return (
            <VideoCard
              key={singleVideo.id}
              videoData={videoData}
              singleVideo={singleVideo}
              onDelete={handleDelete}
              setVideoData={setVideoData}
            />
          );
        })}
    </div>
  );
}

export default CardsContainer;
