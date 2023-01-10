import { http } from "./http.service";

const endpoint = "locations";

export const locationsService = {
  getLocations: async () => {
    const data = await http.get(endpoint);
    return data;
  }
};
