import { DTOItem, DTOList, DTOMood } from "./Types";

const url = "http://10.0.2.2:3000";

//LIST

export async function getLists() {
  try {
    const response = await fetch(`${url}/list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}

export async function postList(list: DTOList) {
  try {
    const response = await fetch(`${url}/list`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...list }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return {};
  }
}

export async function updateList(list: DTOList) {
  try {
    const response = await fetch(`${url}/list`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ list }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return {};
  }
}

//MOOD

export async function getMoods() {
  try {
    const response = await fetch(`${url}/mood`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}

export async function postMood(mood: DTOMood) {
  try {
    const response = await fetch(`${url}/mood`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...mood }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting data: ", error);
    return {};
  }
}

export async function deleteMood() {
  try {
    const response = await fetch(`${url}/mood`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting data: ", error);
    return [];
  }
}

//ITEMS

export async function getItems() {
  try {
    const response = await fetch(`${url}/item`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
}

export async function postItem(item: DTOItem) {
  try {
    const response = await fetch(`${url}/item`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...item }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting data: ", error);
    return {};
  }
}
