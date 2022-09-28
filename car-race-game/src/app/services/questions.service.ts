import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questions } from '../Interfaces/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient ) { }

  private questions = new BehaviorSubject<Questions>([])
  
  currentQuestions = this.questions.asObservable()


  getQuestions() {
    this.http.get<Questions>(environment.baseUrl).subscribe({
      next: (response) => {
        this.questions.next(response)
        this.currentQuestions.subscribe(data => console.log(data))
      }
    })
  }

  changeQuestion(){
    this.questions.value.pop()
  }
}
