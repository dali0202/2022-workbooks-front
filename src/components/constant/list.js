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
  학년: ["1학년", "2학년", "3학년"],
  월: ["3월", "6월", "9월", "11월"],
  점수: ["2점", "3점", "4점"],
};

const FILTER_TYPE = {
  CREATED_AT: "출제 연도",
  ANSWER_RATE: "정답률",
};

const SORT_TYPE = {
  DESC: "내림차순",
  ASC: "오름차순",
};

export {
  QUESTION_UNIT,
  QUESTION_POINT,
  QUESTION_SEARCH_TYPE,
  FILTER_TYPE,
  SORT_TYPE,
  LANGUAGE_CONVERTER,
  SEARCH_TYPE_LIST,
};
