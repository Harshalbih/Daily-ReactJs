const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(15)
        .fill("")
        .map((e, index) => {
          return (
            <div key= {index} className="shimmer-card">
              <div className="shimmer-img">
                <p></p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
