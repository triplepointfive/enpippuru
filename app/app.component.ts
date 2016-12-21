import { Component } from "@angular/core";

import { LessonsService } from "./pages/lessons/lessons.service";

@Component({
  selector: "main",
  providers: [LessonsService],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}
