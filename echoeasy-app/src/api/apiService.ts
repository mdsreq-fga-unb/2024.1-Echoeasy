import axios from "axios";

const httpClient = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000`,
});

export class ApiService {
  post(url: string, data: any) {
    return httpClient.post(url, data);
  }

  get(url: string, token?: string) {
    const config = token ? {
      headers: { Authorization: `Bearer ${token}` }
    } : {};

    return httpClient.get(url, config);
  }

  put(url: string, data: any) {
    return httpClient.put(url, data);
  }

  delete(url: string) {
    return httpClient.delete(url);
  }

  search(url: string, params: any) {
    return httpClient.get(url, { params });
  }
}
