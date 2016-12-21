import { Kanji } from "../kanji/kanji";

export class Lesson {
  constructor(public id: number, public name: string, public kanjis: Array<Kanji>) {}
}
