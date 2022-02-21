import React from "react";
import path from "path";
import { readFile } from "fs/promises";

function DockerCardList(props) {
  return (
    <div>
      {props.containers.map((container) => {
        <h1>{container.image}</h1>;
      })}
    </div>
  );
}
export async function getStaticProps() {
  console.log("re-generating");

  return {
    props: {
      containers: data.containers,
    },
  };
}

export default DockerCardList;
