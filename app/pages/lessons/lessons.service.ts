import { Injectable } from "@angular/core";

import { Kanji } from "../../shared/kanji/kanji";
import { Lesson } from "../../shared/lesson/lesson";

@Injectable()
export class LessonsService {
  private lessons: Array<Lesson> = [];

  constructor () {
    this.lessons.push(
        new Lesson(1, "N5", [
        new Kanji("一"),
        new Kanji("七"),
        new Kanji("万"),
        new Kanji("三"),
        new Kanji("上")
      ])
    );

    this.lessons.push(
        new Lesson(2, "N4", [
        new Kanji("妹"),
        new Kanji("姉"),
        new Kanji("弟"),
        new Kanji("兄"),
        new Kanji("春")
      ])
    );
  }

  public getLessons(): Array<Lesson> {
    return this.lessons;
  }

  public getLesson(lessonId: number): Lesson {
    return this.lessons.find((lesson) => lesson.id === lessonId);
  }
}
