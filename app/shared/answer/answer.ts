import { Kanji } from "../kanji/kanji";

export type AnswerState
  = "Success"
  | "Fail"
  | "Mixed"
  ;

export class Answer {
  public meaning: string;

  constructor(public kanji: Kanji) {}

  public state(): AnswerState {
    let points = 0;
    if (this.meaning === this.kanji.meaning) {
      points += 1;
    }

    switch (points) {
      case 0:
        return "Fail";
      case 1:
        return "Success";
      default:
        return "Mixed";
    }
  }
}
