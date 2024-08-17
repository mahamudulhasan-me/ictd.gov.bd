const loading = () => {
  return (
    <div className="flex justify-center h-[50vh] items-center">
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
