import { useRef } from "react";

import VideoJS from "./components/VideoJS";

function App() {
  const playerRef = useRef(null);

  // Video.js configuration with HLS for quality switching
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    muted: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    sources: [
      {
        // Using ImageKit's HLS manifest URL
        src: "https://ik.imagekit.io/3tkqx6m0r/6394054-uhd_4096_2048_24fps.mp4",
        // src: "https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
        type: "application/x-mpegURL",
      },
    ],
    poster:
      "https://ik.imagekit.io/3tkqx6m0r/6394054-uhd_4096_2048_24fps.mp4/ik-thumbnail.jpg?tr=so-10",

    tracks: [
      {
        kind: "chapters",
        src: "/chapters.vtt",
        srclang: "en",
        label: "Chapters",
        default: true,
      },
      // {
      //   kind: "captions",
      //   src: "/english.vtt",
      //   srclang: "en",
      //   label: "English",
      //   default: true,
      // },
      // {
      //   kind: "captions",
      //   src: "/hindi.vtt",
      //   srclang: "hi",
      //   label: "Hindi",
      //   default: true,
      // },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // Log when player events occur
    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("loadedmetadata", () => {
      console.log("Video metadata loaded");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return (
    <div>
      {/* <video
        src="https://ik.imagekit.io/3tkqx6m0r/6394054-uhd_4096_2048_24fps.mp4?updatedAt=1759414136425&tr=w-800"
        width="800"
        height="450"
        controls
        // autoPlay // will only work when *muted*
        // muted
        // loop
        poster="https://ik.imagekit.io/3tkqx6m0r/6394054-uhd_4096_2048_24fps.mp4/ik-thumbnail.jpg?tr=so-10" // Thumbnail image (10th second of the video)
      >
        <track
          kind="subtitles"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />
        <track kind="subtitles" src="/hindi.vtt" srcLang="Hindi" />
      </video> */}

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
