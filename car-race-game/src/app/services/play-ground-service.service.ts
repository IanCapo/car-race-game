import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { playerTurn, playScrores, playStatus } from '../Interfaces/PlayStatus';

@Injectable({
  providedIn: 'root'
})
export class PlayGroundService {

  private playStatus = new BehaviorSubject<playStatus>({
    player1DiceScore: 0,
    player2DiceScore: 0,
  });

  private playerTurn = new BehaviorSubject<playerTurn>({
    startPlay: false,
    isPlayer1Turn: true,
    isPlayer2Turn: false,
  })

  private playTotalScroes = new BehaviorSubject<playScrores>({
    player1TotalScore: 0,
    player2TotalScroe: 0
  });

  currentPlayStatus = this.playStatus.asObservable()
  currentPlayScore = this.playTotalScroes.asObservable()
  currentPlayerTurn = this.playerTurn.asObservable()

  constructor() { }

  changePlayStatus(playStatus: playStatus) {
    this.playStatus.next(playStatus)
    this.playTotalScroes.next({
      player1TotalScore: this.playTotalScroes.value.player1TotalScore + playStatus.player1DiceScore,
      player2TotalScroe: this.playTotalScroes.value.player2TotalScroe + playStatus.player2DiceScore
    })
    console.log("service score")
    console.log(this.playTotalScroes.value.player1TotalScore)
  }

  changePlayerTurn(playerTurn: playerTurn) {
    this.playerTurn.next(playerTurn)
  }

}
