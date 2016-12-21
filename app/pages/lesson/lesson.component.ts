import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { Kanji } from "../../shared/kanji/kanji";
import { Lesson } from "../../shared/lesson/lesson";
import { LessonsService } from "../lessons/lessons.service";

@Component({
  selector: "my-app",
  templateUrl: "pages/lesson/lesson.html",
  styleUrls: [],
})
export class LessonComponent {
  public lesson: Lesson;
  public id: number;

  constructor(private route: ActivatedRoute, private lessonsService: LessonsService) {
    this.route.params
      .forEach((params) => { this.id = +params["id"]; });

    this.lesson = lessonsService.getLesson(this.id);
  }
}
