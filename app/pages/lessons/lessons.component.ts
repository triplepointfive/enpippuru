import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Lesson } from "../../shared/lesson/lesson";
import { LessonsService } from "./lessons.service";

@Component({
  selector: "my-app",
  templateUrl: "pages/lessons/lessons.html",
  styleUrls: ["pages/lessons/lessons-common.css", "pages/lessons/lessons.css"],
})
export class LessonsComponent {
  public lessons: Array<Lesson> = [];

  constructor(private router: Router, private lessonsService: LessonsService) {
    this.lessons = this.lessonsService.getLessons();
  }

  public openLesson(lessonId: string): void {
    this.router.navigate(["/lesson", lessonId]);
  }
}
