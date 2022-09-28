export interface playStatus {
    player1DiceScore: number;
    player2DiceScore: number;
}

export interface playerTurn {
    startPlay: Boolean,
    isPlayer1Turn: Boolean;
    isPlayer2Turn: Boolean;
}

export interface playScrores {
    player1TotalScore: number;
    player2TotalScroe: number;
}