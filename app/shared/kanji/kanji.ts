import { Inputs, InputType } from "../input_type/input_type";

export class Kanji {
  public data: Inputs = {};
  constructor(public name: string, public meaning: string) {
    this.data["Meaning"] = meaning;
  }
}
