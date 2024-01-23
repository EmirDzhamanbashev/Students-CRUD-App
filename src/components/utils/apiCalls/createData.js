import { BASE_URL } from "../urls";

export const createData = async (newStudent) => {
  const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newStudent)
  };
  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
