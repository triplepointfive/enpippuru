import { Injectable } from "@angular/core";

import { Kanji } from "../../shared/kanji/kanji";
import { Lesson } from "../../shared/lesson/lesson";

@Injectable()
export class LessonsService {
  private lessons: Array<Lesson> = [];

  constructor () {
    this.lessons.push(
      new Lesson(1, "N5", [
        new Kanji("一", ["1"]),
        new Kanji("七", ["2"]),
        new Kanji("万", ["3"]),
        new Kanji("三", ["4"]),
        new Kanji("上", ["5"])
      ])
    );

    this.lessons.push(
      new Lesson(2, "N4", [
        new Kanji("妹", ["6", "1"]),
        new Kanji("姉", ["7", "2"]),
        new Kanji("弟", ["8", "3"]),
        new Kanji("兄", ["9", "4"]),
        new Kanji("春", ["10", "5"])
      ])
    );

    this.lessons.push(
      new Lesson(3, "N4-2", [
        new Kanji("妹", ["6", "1"]),
        new Kanji("姉", ["7", "2"]),
        new Kanji("弟", ["8", "3"]),
        new Kanji("兄", ["9", "4"]),
        new Kanji("妹", ["6", "1"]),
        new Kanji("姉", ["7", "2"]),
        new Kanji("弟", ["8", "3"]),
        new Kanji("兄", ["9", "4"]),
        new Kanji("妹", ["6", "1"]),
        new Kanji("姉", ["7", "2"]),
        new Kanji("弟", ["8", "3"]),
        new Kanji("兄", ["9", "4"]),
        new Kanji("妹", ["6", "1"]),
        new Kanji("姉", ["7", "2"]),
        new Kanji("弟", ["8", "3"]),
        new Kanji("兄", ["9", "4"]),
        new Kanji("春", ["10", "5"])
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
