import { http } from "./http.service";

const endpoint = "authors";

export const authorsService = {
  getAuthors: async () => {
    const data = await http.get(endpoint);
    return data;
  }
};
