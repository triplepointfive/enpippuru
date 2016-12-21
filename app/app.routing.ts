import { LessonsComponent } from "./pages/lessons/lessons.component";
import { LessonComponent } from "./pages/lesson/lesson.component";

export const routes = [
  { path: "", component: LessonsComponent },
  { path: "lesson/:id", component: LessonComponent },
];

export const navigatableComponents = [
  LessonsComponent,
  LessonComponent
];
