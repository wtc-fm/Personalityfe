export type MbtiDimension = "EI" | "SN" | "TF" | "JP";

export interface AnswerMap {
  [key: number]: {
    dimension: MbtiDimension;
    value: "A" | "B";
  };
}

export function calcMbti(answers: AnswerMap) {
  let EI = 0;
  let SN = 0;
  let TF = 0;
  let JP = 0;

  Object.values(answers).forEach((ans) => {
    const score = ans.value === "A" ? 1 : -1;

    if (ans.dimension === "EI") EI += score;
    if (ans.dimension === "SN") SN += score;
    if (ans.dimension === "TF") TF += score;
    if (ans.dimension === "JP") JP += score;
  });

  return (
    (EI >= 0 ? "E" : "I") +
    (SN >= 0 ? "S" : "N") +
    (TF >= 0 ? "T" : "F") +
    (JP >= 0 ? "J" : "P")
  );
}

