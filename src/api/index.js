import axios from 'axios';
import {
  QUESTION_PAGING_SIZE,
  WORKBOOK_PAGING_SIZE,
} from '../components/constant/list';

const client = axios.create({
  baseURL: 'https://workbooksapi.ga',
  // baseURL: 'http://localhost:8080',
});

export const requestGetOAuthUri = (provider) => {
  return client.get(`/api/auth/${provider}`);
};

export const requestPostCode = (provider, data) => {
  return client.post(`/api/auth/${provider}/token`, data);
};

export const requestGetCurrentUser = () => {
  if (!localStorage.getItem('accessToken')) {
    return null;
  }
  return client.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const requestGetWorkbook = (id) => {
  return client.get(`/api/workbooks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const requestGetWorkbookList = ({ lastWorkbookId, keyword }) => {
  return client.get('/api/workbooks', {
    params: {
      lastWorkbookId,
      keyword,
      size: WORKBOOK_PAGING_SIZE,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const requestPostMockWorkbook = (data) => {
  return client.post('/api/workbooks/mock', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const requestPostRangeWorkbook = (data) => {
  return client.post('/api/workbooks/range', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
  return client.get('/api/questions', {
    params: { grade, month, point, offset, size: QUESTION_PAGING_SIZE, sort },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const requestPostCustomWorkbook = (data) => {
  return client.post('/api/workbooks/custom', data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
