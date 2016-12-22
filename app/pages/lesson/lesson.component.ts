import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { Kanji } from "../../shared/kanji/kanji";
import { AnswerState, Answer } from "../../shared/answer/answer";
import { Lesson } from "../../shared/lesson/lesson";
import { LessonsService } from "../lessons/lessons.service";
import { InputType } from "../../shared/input_type/input_type";

@Component({
  selector: "lesson",
  templateUrl: "pages/lesson/lesson.html",
  styleUrls: ["pages/lesson/lesson-common.css", "pages/lesson/lesson.css"]
})
export class LessonComponent {
  public input: string;
  public inputType: InputType;
  public answers: Array<Answer> = [];

  private lesson: Lesson;
  private id: number;
  private kanjisToProceed: Array<Kanji>;
  private answer: Answer;

  constructor(private router: Router, private route: ActivatedRoute, private lessonsService: LessonsService) {
    this.route.params
      .forEach((params) => { this.id = +params["id"]; });

    this.lesson = lessonsService.getLesson(this.id);

    this.kanjisToProceed = this.lesson.kanjis.slice();
    this.pickUpNewKanji();
  }

  public giveUp(): void {
    this.answer.giveUp(this.input, this.inputType);
    this.moveOn();
  }

  public inputUpdate(): void {
    if (this.answer.match(this.input, this.inputType)) {
      this.moveOn();
    }
  }

  public answerClass(answer: Answer): string {
    switch (answer.state()) {
      case "Success":
        return "kanji-success";
      case "Fail":
        return "kanji-fail";
      case "Mixed":
        return "kanji-mixed";
    }
  }

  private moveOn(): void {
    if (this.answer.done()) {
      this.pickUpNewKanji();
    }
  }

  private pickUpNewKanji(): void {
    if (this.kanjisToProceed.length) {
      if (this.answer) {
        this.answers.push(this.answer);
      }
      this.answer = new Answer(this.kanjisToProceed.shift());
      this.input = "";
      this.inputType = this.answer.nextInputType();
    } else {
      this.router.navigate(["/"]);
    }
  }
}
