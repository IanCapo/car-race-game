import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'car-race-game';

  constructor (private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService.getQuestions()
  }


}
