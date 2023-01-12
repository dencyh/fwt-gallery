import { http } from "./http.service";

const endpoint = "paintings";

export const paintingsService = {
  getPaintings: async (payload = { _page: 1, _limit: 12 }) => {
    const data = await http.get(endpoint, {
      params: {
        ...payload
      }
    });
    return data;
  }
};
