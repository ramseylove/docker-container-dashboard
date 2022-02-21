import { useContext } from "react";
import DockerCardList from "../components/docker/docker-card-list";

function HomePage(props) {
  return (
    <div>
      <DockerCardList />
    </div>
  );
}

export default HomePage;
