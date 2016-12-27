import { Inputs, InputType } from "../input_type/input_type";

interface KanjiData {
  meanings?: Array<string>;
  kunyomis?: Array<string>;
  onyomis?: Array<string>;
}

export class Kanji {
  private data: KanjiData = {};
  public inputTypes: Array<InputType> = [];

  constructor(public name: string,
              meanings: Array<string>,
              kunyomis: Array<string>,
              onyomis: Array<string>) {
    this.data.meanings = meanings;
    this.data.kunyomis = kunyomis;
    this.data.onyomis = onyomis;
    this.inputTypes.push("Meaning");
  }

  public get meanings(): Array<string> {
    return this.data.meanings;
  }

  public get kunyomis(): Array<string> {
    return this.data.kunyomis;
  }

  public get onyomis(): Array<string> {
    return this.data.onyomis;
  }
}
