import axios from "axios";

const client = axios.create({
  baseUrl: "http://127.0.0.1:8080",
});

export const getCurrentUser = () => {
  if (!localStorage.getItem("accessToken")) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject("엑세스 토큰이 존재하지 않습니다.");
  }
  return client.get("/api/users/me", {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};
