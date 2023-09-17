import React from "react";

export const Loading = ({ loadingGif, fullScreen }) => {
  return (
    <section className={`loading-container ${ !fullScreen && "absolute"}`} >
      <div className={`loading-inner ${!fullScreen && "absolute"}`} >
        <img className="loading-gif" src={loadingGif} alt="loading" />
      </div>
    </section>
  );
};
