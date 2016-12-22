import { Kanji } from "../kanji/kanji";
import { Inputs, InputType } from "../input_type/input_type";

export type AnswerState
  = "Success"
  | "Fail"
  | "Mixed"
  ;

export class Answer {
  public inputs: Inputs = {};
  private withMatch: boolean = false;
  private withFail: boolean = false;

  static types: Array<InputType> = ["Meaning", "Kunyomi", "Onyomi"];

  constructor(public kanji: Kanji) {}

  public state(): AnswerState {
    if (this.withMatch && !this.withFail) {
      return "Success";
    } else if (this.withMatch) {
      return "Mixed";
    } else {
      return "Fail";
    }
  }

  public done(): boolean {
    return Object.keys(this.inputs).length
      === Object.keys(this.kanji.data).length;
  }

  public nextInputType(): InputType {
    return Answer.types
      .find((inputType) => ((inputType in this.kanji.data) && !(inputType in this.inputs)));
  }

  public giveUp(input: string, inputType: InputType): void {
    this.withFail = true;
    this.inputs[inputType] = input;
  }

  public match(input: string, inputType: InputType): boolean {
    if (input === this.kanji.data[inputType]) {
      if (!(inputType in this.inputs)) {
        this.withMatch = true;
        this.inputs[inputType] = input;
      }
      return true;
    }
    return false;
  }
}
