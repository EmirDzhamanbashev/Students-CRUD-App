import { BASE_URL } from "../urls";

export const updateData = async (newStudent) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  };
  try {
    const res = await fetch(BASE_URL + "/" + newStudent.id, options);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
