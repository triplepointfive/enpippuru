import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { Kanji } from "../../shared/kanji/kanji";
import { AnswerState, Answer } from "../../shared/answer/answer";
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
  private inputType: string;
  public input: string;

  public currentKanji: Kanji;
  public kanjisToProceed: Array<Kanji>;

  public answers: Array<Answer> = [];
  private answer: Answer;

  constructor(private router: Router, private route: ActivatedRoute, private lessonsService: LessonsService) {
    this.route.params
      .forEach((params) => { this.id = +params["id"]; });

    this.lesson = lessonsService.getLesson(this.id);
    this.inputType = "meaning";

    this.kanjisToProceed = this.lesson.kanjis.slice();
    this.pickUpNewKanji();
  }

  public pickUpNewKanji(): void {
    if (this.kanjisToProceed.length) {
      this.currentKanji = this.kanjisToProceed.shift();
      if (this.answer) {
        this.answers.push(this.answer);
      }
      this.answer = new Answer(this.currentKanji);
    } else {
      this.router.navigate(["/"]);
    }
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
