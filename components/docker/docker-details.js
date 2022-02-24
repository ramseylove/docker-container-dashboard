import React from "react";
import { getLogs } from "../../helpers/api-utils";
import DockerLogs from "./docker-logs";

function DockerDetails({ container, logs }) {
  console.log(container);

  return (
    <div className="container-info">
      <div className="label">Description:</div>
      <div className="container-description">
        Docker container for Nginx Proxy Manager
      </div>
      <div className="label">Status: </div>
      <div className="container-state-status">
        <span className="container-state">{container.State}</span>
        <span className="container-status">{container.Status}</span>
      </div>
      <div className="label">Image: </div>
      <div className="image-name">{container.Image}</div>
      <div className="label">Version: </div>
      <div className="container-version">123.123</div>
      <div className="label">Repository: </div>
      <div className="container-repository">
        <a href="https://github.com/jlesage/docker-nginx-proxy-manager">
          https://github.com/jlesage/docker-nginx-proxy-manager
        </a>
      </div>
    </div>
  );
}

export default DockerDetails;
