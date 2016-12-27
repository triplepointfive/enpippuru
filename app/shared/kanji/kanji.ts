import { Inputs, InputType } from "../input_type/input_type";

interface KanjiData {
  meanings?: Array<string>;
  kunyomis?: Array<string>;
  onyomis?: Array<string>;
}

export class Kanji {
  private data: KanjiData = {};
  public inputTypes: Array<InputType> = [];

  constructor(public name: string, meanings: Array<string>) {
    this.data.meanings = meanings;
    this.inputTypes.push("Meaning");
  }

  public meanings(): Array<string> {
    return this.data.meanings;
  }
}
