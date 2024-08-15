import "./Styles.css";
const NationalAnthem = () => {
  return (
    <>
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-10 text-center">
        জাতীয় সংগীত
      </h1>
      <div class="voice-chat-card ">
        <div class="voice-chat-card-body">
          <div class="audio-container">
            <audio controls>
              <source
                type="audio/ogg"
                src="/audio/National_anthem_of_Bangladesh.ogg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </>
  );
};

export default NationalAnthem;
