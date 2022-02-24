import React, { useState } from "react";
import DockerDetails from "../../components/docker/docker-details";
import DockerLogs from "../../components/docker/docker-logs";
import { getContainer, getLogs } from "../../helpers/api-utils";

function ContainerDetail(props) {
  const [showLogs, setShowLogs] = useState(false);
  const [isFetchingLogs, setIsFetchingLogs] = useState(false);

  function toggleLogsHandler() {
    setShowLogs((prevState) => !prevState);
  }
  return (
    <div className="detail-content">
      <DockerDetails container={props.container} />
      <div className="control">
        <button
          className="load-button"
          type="button"
          onClick={toggleLogsHandler}
        >
          {showLogs ? "Hide Logs" : "Load Logs"}
        </button>
      </div>
      {showLogs && isFetchingLogs && (
        <div>
          <p>Is Loading</p>
        </div>
      )}
      {showLogs && !isFetchingLogs && <DockerLogs logs={props.logs} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const container = await getContainer(ctx.params.id);

  const logs = await getLogs(ctx.params.id, process.env.PORTAINER_KEY);

  return {
    props: {
      container: container,
      logs: logs,
    },
  };
};
export default ContainerDetail;
