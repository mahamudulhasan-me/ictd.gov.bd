const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="loader">
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
        <div className="loader__circle"></div>
      </div>
    </div>
  );
};

export default loading;
