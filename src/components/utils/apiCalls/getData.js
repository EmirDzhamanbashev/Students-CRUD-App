import { BASE_URL } from "../urls";

export const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      return data
    } catch (e) {
      console.log(e);
    }
  };