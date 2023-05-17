import React, { useState, useEffect } from "react";
import "./YouTube.css";

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_APPLE_YOUTUBE_API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedYouTubeData = data.items;
        setVideos(fetchedYouTubeData);
      });
  }, []);
  //  console.log(videos);
  return (
    <div>
      <div className="allvideos-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold video-title-wrapper">
                &ldquo; Latest videos &rdquo;
                <br />
              </div>
            </div>
            {videos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={videoLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={videoLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
