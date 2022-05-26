const QUESTION_UNIT = {
  0: "지수함수와 로그함수",
  1: "삼각 함수",
  2: "수열",
  3: "함수의 극한과 연속",
  4: "미분",
  5: "적분",
  6: "경우의 수",
  7: "확률",
  8: "통계",
  9: "수열의 극한",
  10: "미분법",
  11: "적분법",
  12: "이차곡선",
  13: "평면벡터",
  14: "공간도형과 공간좌표",
};
const GRADE_LIST = [
  { value: 0, label: "전체" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
];
const POINT_LIST = [
  { value: 0, label: "전체" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];
const SORT_LIST = [
  { value: "CREATED_DESC", label: "최신순" },
  { value: "CREATED_ASC", label: "오래된순" },
  { value: "ANSWER_RATE_ASC", label: "정답률 낮은순" },
  { value: "ANSWER_RATE_DESC", label: "정답률 높은순" },
];
const MONTH_LIST = [
  { value: 0, label: "전체" },
  { value: 3, label: "3" },
  { value: 6, label: "6" },
  { value: 9, label: "9" },
];
const EXTENDED_MONTH_LIST = [
  { value: 0, label: "전체" },
  { value: 3, label: "3" },
  { value: 6, label: "6" },
  { value: 9, label: "9" },
  { value: 11, label: "11" },
];
const QUESTION_POINT = {
  TWO: 2,
  THREE: 3,
  FOUR: 4,
};

const WORKBOOK_TYPE = {
  0: {
    name: "모의",
    color: "#e65100",
  },
  1: {
    name: "범위",
    color: "#1b5e20",
  },
  2: {
    name: "문제",
    color: "#01579b",
  },
};

const QUESTION_PAGING_SIZE = 6;
const WORKBOOK_PAGING_SIZE = 12;

export {
  GRADE_LIST,
  POINT_LIST,
  SORT_LIST,
  MONTH_LIST,
  EXTENDED_MONTH_LIST,
  QUESTION_UNIT,
  QUESTION_POINT,
  WORKBOOK_TYPE,
  QUESTION_PAGING_SIZE,
  WORKBOOK_PAGING_SIZE,
};
