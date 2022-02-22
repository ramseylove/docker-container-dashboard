import { useContext } from "react";
import { getAllContainers } from "../helpers/api-utils";
import DockerCardList from "../components/docker/docker-card-list";

function HomePage(props) {
  console.log(props.containers);
  return (
    <>
      <DockerCardList containers={props.containers} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  console.log("re-generating");
  const allContainers = await getAllContainers();

  return {
    props: {
      containers: allContainers,
    },
  };
};

// export const getStaticPaths = async () => {
//   const allContainers = await getAllContainers();

//   const ids = allContainers.map((container) => container.id);
//   const pathsWithParams = ids.map((id) => ({ params: { id: id } }));

//   return {
//     paths: pathsWithParams,
//     fallback: false,
//   };
// };

export default HomePage;
