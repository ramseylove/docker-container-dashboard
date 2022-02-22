import { capitalize } from "./utils";

export async function getAllContainers() {
  const response = await fetch("http://localhost:5500/containers");

  const data = await response.json();

  const containers = data.map((container) => {
    const cleanName = capitalize(container.Names[0].substr(1));
    return {
      id: container.id,
      key: container.id,
      image: container.Image,
      labels: { ...container.Labels },
      state: container.State,
      status: container.Status,
      name: cleanName,
    };
  });

  // for (const c in data) {
  //   containers.push({
  //     id: c.id,
  //     image: c.Image,
  //     labels: { ...c.Labels },
  //     // description: c.Labels["org.label-schema.description"],
  //     // name: c.Labels["org.label-schema.name"],
  //     // version: c.Labels["org.label-schema.version"],
  //     // created: c.Labels["org.opencontainers.image.created"],
  //     // vcsUrl: c.Labels["org.label-schema.vcs-url"],
  //   });
  // }

  return containers;
}
