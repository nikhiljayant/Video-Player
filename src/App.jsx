function App() {
  return (
    <div>
      <video
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
      </video>
    </div>
  );
}

export default App;
