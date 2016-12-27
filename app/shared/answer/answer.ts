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
      === this.kanji.inputTypes.length;
  }

  public nextInputType(): InputType {
    return Answer.types.find((inputType) => this.isTypeFree(inputType));
  }

  public giveUp(input: string, inputType: InputType): void {
    this.withFail = true;
    this.inputs[inputType] = input;
  }

  public match(input: string, inputType: InputType): boolean {
    switch (inputType) {
      case "Meaning":
        return this.matchMeaning(input);
      case "Kunyomi":
        return this.matchKunyomi(input);
      case "Onyomi":
        return this.matchOnyomi(input);
      default:
        throw `Undefined match type ${inputType}`;
    }
  }

  private matchMeaning(input: string): boolean {
    if (this.kanji.meanings().some((meaning) => meaning === input)) {
      this.markMatched(input, "Meaning");
      return true;
    }
    return false;
  }

  private matchKunyomi(input: string): boolean {
    return false;
  }

  private matchOnyomi(input: string): boolean {
    return false;
  }

  private markMatched(input: string, inputType: InputType): void {
    if (!(inputType in this.inputs)) {
      this.withMatch = true;
      this.inputs[inputType] = input;
    }
  }

  private isTypeFree(inputType: InputType): boolean {
    return ((this.kanji.inputTypes.indexOf(inputType) > -1) && !(inputType in this.inputs));
  }
}
