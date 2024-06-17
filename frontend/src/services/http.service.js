import axios from "axios";

const httpService = axios.create({
  headers: { "Content-type": "application/json" },
});

httpService.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    console.log("Error in request interceptor", error);
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log("Error in response interceptor", error);

    if (error.response.status === 401) {
      console.log(`Error ${error.response.status}: Unauthorized`);
    } else if (error.response.status === 403) {
      console.log(`Error ${error.response.status}: Forbidden`);
    } else {
      error.message = error?.response?.data?.message ?? "Something went wrong";
    }

    return Promise.reject(error);
  }
);

export default httpService;
