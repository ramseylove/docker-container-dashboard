import React from "react";
import DockerDetails from "../../components/docker/docker-details";
import { getContainer, getLogs } from "../../helpers/api-utils";

function ContainerDetail(props) {
  console.log(props.data);
  return <DockerDetails container={props.data} />;
}

export const getServerSideProps = async (ctx) => {
  const container = await getContainer(ctx.params.id);

  const logs = await getLogs(ctx.params.id);

  return {
    props: {
      container: container,
      logs: logs,
    },
  };
};
export default ContainerDetail;
