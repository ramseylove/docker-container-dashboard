import Link from "next/link";
import React from "react";

function DockerCard(props) {
  const { name, id, status, state } = props;
  return (
    <Link href={`/containers/${id}`}>
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
              <div className="state">{state}</div>
              <div className="status">{status}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DockerCard;
