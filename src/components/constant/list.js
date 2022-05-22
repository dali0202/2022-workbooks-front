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

const QUESTION_POINT = {
  TWO: 2,
  THREE: 3,
  FOUR: 4,
};

const QUESTION_SEARCH_TYPE = {
  GRADE: "학년",
  MONTH: "월",
  POINT: "점수",
};

const LANGUAGE_CONVERTER = {
  학년: "grade",
  월: "month",
  점수: "point",
};

const SEARCH_TYPE_LIST = {
  학년: [0, 1, 2, 3],
  월: [0, 3, 6, 9, 11],
  점수: [0, 2, 3, 4],
};

const SORT_TYPE = {
  최신순: "CREATED_DESC",
  오래된순: "CREATED_ASC",
  "정답률 낮은순": "ANSWER_RATE_ASC",
  "정답률 높은순": "ANSWER_RATE_DESC",
};

const WORKBOOK_TYPE = {
  0: {
    name: "모의",
    color: "#F2A7C3",
  },
  1: {
    name: "범위",
    color: "#6FBFB1",
  },
  2: {
    name: "커스텀",
    color: "#F2CD5C",
  },
};

export {
  QUESTION_UNIT,
  QUESTION_POINT,
  QUESTION_SEARCH_TYPE,
  LANGUAGE_CONVERTER,
  SEARCH_TYPE_LIST,
  SORT_TYPE,
  WORKBOOK_TYPE,
};
