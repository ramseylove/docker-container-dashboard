import { capitalize } from "./utils";

const apiUrl = "http://localhost:5500/containers/";

export async function getAllContainers() {
  const response = await fetch(apiUrl);

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

  return containers;
}

export async function getContainer(id) {
  const response = await fetch(apiUrl + id);

  const data = await response.json();

  const container = { ...data };

  return container;
}

export async function getLogs(id, key) {
  let headers = new Headers();
  headers.append("X-API-Key", key);
  try {
    const response = await fetch(
      "http://192.168.0.49:9000/api/endpoints/1/docker/containers/" +
        id +
        "/logs?stdout=true&tail=20",
      {
        headers: headers,
      }
    );

    const data = await response.text();
    return data;
  } catch (error) {
    console.log(err);
    throw error;
  }

  return data;
}
