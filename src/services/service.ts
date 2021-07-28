import axios from "axios";
import AppConfig from "configs/config";

export default class Service {
  constructor() {
    this.api.interceptors.request.use(async (config) => {
      return config;
    });
    this.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (e) => {
        if (e.response?.data) return Promise.reject(e.response.data);
        return Promise.reject(e);
      }
    );
  }

  api = axios.create({
    baseURL: AppConfig.apiBaseUrl,
    timeout: AppConfig.timeout,
  });

  static timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
}
