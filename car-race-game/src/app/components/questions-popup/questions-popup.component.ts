import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/Interfaces/questions';
import { QuestionsService } from 'src/app/services/questions.service';
import { MatDialogRef } from '@angular/material/dialog';
import { playerTurn } from 'src/app/Interfaces/PlayStatus';
import { PlayGroundService } from 'src/app/services/play-ground-service.service';

@Component({
  selector: 'app-questions-popup',
  templateUrl: './questions-popup.component.html',
  styleUrls: ['./questions-popup.component.sass']
})
export class QuestionsPopupComponent implements OnInit {

  questionArray: Questions = [] 
  question: String = ""

  answersArray: Array<string> = []
  correctAnswer = ""
  chosenAnswer: String  = ""
  isAnswerCorrect?: boolean
  shouldRevealAnswer = false

  playerTurn?: playerTurn

  constructor(
    private questionsData: QuestionsService,
    private playerTurnData: PlayGroundService,
    public dialogRef: MatDialogRef<QuestionsPopupComponent>) { }

  ngOnInit(): void {
    console.log("question component")
    this.questionsData.currentQuestions.subscribe(data => this.questionArray = data)
    this.playerTurnData.currentPlayerTurn.subscribe(data => this.playerTurn = data)
    this.chooseQuestion()
  }

  chooseQuestion(){

    this.question = this.questionArray[this.questionArray.length - 1].question
    this.correctAnswer = this.questionArray[this.questionArray.length - 1].correctAnswer

    this.answersArray.push(this.questionArray[this.questionArray.length - 1].correctAnswer)
    this.answersArray.push(this.questionArray[this.questionArray.length - 1].incorrectAnswers[0])
    this.answersArray.push(this.questionArray[this.questionArray.length - 1].incorrectAnswers[1])
    this.answersArray.push(this.questionArray[this.questionArray.length - 1].incorrectAnswers[2])
    this.answersArray = this.shuffleAnswers(this.answersArray)
  }

  shuffleAnswers(answersArray: Array<string>){
    let currentIndex = answersArray.length,  randomIndex;

    while (currentIndex != 0) {  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [answersArray[currentIndex], answersArray[randomIndex]] = [
        answersArray[randomIndex], answersArray[currentIndex]];
    }
    
    return answersArray;
  }

  sumbitAnswer(answer: String){
    this.shouldRevealAnswer = true

    if(answer == this.correctAnswer){
      this.isAnswerCorrect = true
      if (this.playerTurn != null){
        this.newPlayerTurn({
          startPlay: false,
          isPlayer1Turn: this.playerTurn.isPlayer1Turn,
          isPlayer2Turn: this.playerTurn.isPlayer2Turn
        })
      }
    }
    else {
      this.isAnswerCorrect = false
      if (this.playerTurn != null){
        this.newPlayerTurn({
          startPlay: false,
          isPlayer1Turn: !this.playerTurn.isPlayer1Turn,
          isPlayer2Turn: !this.playerTurn.isPlayer2Turn
        })
      }
    }
    setTimeout(() => {
      this.dialogRef.close()
      this.removeRevealedQuestion()
    }, 1000)
    
  }

  newPlayerTurn(playerTurn: playerTurn){
    this.playerTurnData.changePlayerTurn(playerTurn)
  }

  removeRevealedQuestion(){
    this.questionsData.changeQuestion()
  }
}
