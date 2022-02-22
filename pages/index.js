import { useContext } from "react";
import { getAllContainers } from "../helpers/api-utils";
import DockerCardList from "../components/docker/docker-card-list";

function HomePage(props) {
  console.log(props.containers);
  return (
    <div>
      <h3>Hello Docker Cards</h3>
      <DockerCardList containers={props.containers} />
    </div>
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

export default HomePage;
