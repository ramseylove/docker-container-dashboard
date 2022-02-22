import React from "react";

import DockerCard from "./docker-card";

function DockerCardList(props) {
  const { containers } = props;
  console.log(containers);
  return (
    <div className="main">
      {containers.map((container) => (
        <DockerCard
          key={container.id}
          id={container.id}
          image={container.image}
          state={container.state}
          status={container.status}
          name={container.name}
        />
      ))}
    </div>
  );
}
// export async function getStaticProps() {}

export default DockerCardList;
