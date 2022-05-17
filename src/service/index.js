import axios from "axios";

const client = axios.create({
  baseUrl: "http://127.0.0.1:8080",
});

export const requestGetCurrentUser = () => {
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

export const requestGetBoardList = () => {
  return client.get("/api/boards", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestGetBoard = (id) => {
  return client.get(`/api/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestPostBoard = (data) => {
  return client.post("/api/boards/write", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestPatchBoard = (id, data) => {
  return client.patch(`/api/boards/edit/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestDeleteBoard = (id) => {
  return client.delete(`/api/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestPostMockWorkbook = (data) => {
  return client.post("/api/workbooks/mock", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestPostRangeWorkbook = (data) => {
  return client.post("/api/workbooks/range", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestGetQuestionList = ({ grade, month, point }) => {
  return client.get("/api/questions", {
    params: { grade, month, point },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};
