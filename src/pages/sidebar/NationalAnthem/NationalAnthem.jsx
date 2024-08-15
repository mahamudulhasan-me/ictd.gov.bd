const NationalAnthem = () => {
  return (
    <>
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-10 text-center">
        জাতীয় সংগীত
      </h1>
      <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-3 px-2 py-4 flex text-xl  items-center gap-2 rounded-md bg-violet-50 border border-gray-300">
        <audio controls>
          <source
            type="audio/ogg"
            src="/audio/National_anthem_of_Bangladesh.ogg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};

export default NationalAnthem;
