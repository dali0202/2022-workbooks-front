import axios from "axios";
import {
  QUESTION_PAGING_SIZE,
  WORKBOOK_PAGING_SIZE,
} from "../components/constant/list";

const client = axios.create({
  baseURL: "https://workbooksapi.ga",
});

export const requestGetCurrentUser = () => {
  if (!localStorage.getItem("accessToken")) {
    console.log("no accessToken");
    return null;
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

export const requestGetWorkbook = (id) => {
  return client.get(`/api/workbooks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

// export const requestGetWorkbookList = ({ keyword, page }) => {
//   return client.get("/api/workbooks", {
//     params: {
//       keyword,
//       page: page * WORKBOOK_PAGING_SIZE,
//       size: WORKBOOK_PAGING_SIZE,
//     },
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//     },
//   });
// };

export const requestGetWorkbookList = ({ lastWorkbookId, keyword }) => {
  return client.get("/api/workbooks", {
    params: {
      lastWorkbookId,
      keyword,
      size: WORKBOOK_PAGING_SIZE,
    },
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

export const requestGetQuestionList = ({
  grade,
  month,
  point,
  offset,
  sort,
}) => {
  return client.get("/api/questions", {
    params: { grade, month, point, offset, size: QUESTION_PAGING_SIZE, sort },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const requestPostCustomWorkbook = (data) => {
  return client.post("/api/workbooks/custom", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const requestGetStorage = () => {
  return client.get("/api/storage", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};
