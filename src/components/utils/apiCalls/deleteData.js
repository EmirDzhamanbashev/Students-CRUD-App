import { BASE_URL } from "../urls";

export const deleteData = async (id) => {
  const options = {
    method: "DELETE",
  };
  console.log(BASE_URL + "/" + id);
  try {
    const res = await fetch(BASE_URL + "/" + id, options);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
