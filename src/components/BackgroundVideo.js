import bannerVideo from "../assets/video/banner_bg.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={bannerVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;