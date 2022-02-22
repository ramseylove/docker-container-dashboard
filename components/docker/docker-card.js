import React from "react";

function DockerCard(props) {
  const { image, name } = props;
  return (
    <a href="/detail.html">
      <div className="card">
        <div className="container-header">{name}</div>
        <div className="content-container">
          <div className="left">
            <img
              src="https://via.placeholder.com/150"
              className="logo"
              alt="Container Logo"
            />
          </div>
          <div className="right">
            <div className="state-status">
              <div className="state">Running</div>
              <div className="status">Up 9 days</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default DockerCard;
