import React from "react";

function DockerLogs(props) {
  return (
    <>
      <div className="logs">
        <pre>{props.logs}</pre>
      </div>
      <div className="control">
        <button className="load-button" type="button">
          Load More
        </button>
      </div>
    </>
  );
}

export default DockerLogs;
