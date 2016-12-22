import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Kanji } from "../../shared/kanji/kanji";
import { Lesson } from "../../shared/lesson/lesson";
import { LessonsService } from "../lessons/lessons.service";

@Component({
  selector: "lesson",
  templateUrl: "pages/lesson/lesson.html",
  styleUrls: ["pages/lesson/lesson-common.css", "pages/lesson/lesson.css"]
})
export class LessonComponent {
  public lesson: Lesson;
  public id: number;
  public inputType: string;

  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) {
    this.route.params
      .forEach((params) => { this.id = +params["id"]; });

    this.lesson = lessonsService.getLesson(this.id);
    this.inputType = "meaning";
  }

  public inputHint(): string {
    switch (this.inputType) {
      case "meaning":
        return "Meaning";
      default:
        return "Undefined";
    };
  }
}
