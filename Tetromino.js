class Piece {

  constructor(center_xpos, center_ypos, block = [
    []
  ], board = [
    []
  ]) {
    this.center_xpos = center_xpos
    this.center_ypos = center_ypos
    this.block = block
    this.board = board

  }

  initial() {
    for (let i = 0; i < 4; i++) // board의 시작점을 1로 만들기
    {
      for (let j = 0; j < 4; j++) {
        if (this.block[i][j] == 1) {
          this.board[i + this.center_ypos][j + this.center_xpos] = 1 //보드의 [1][중간]을 1로 초기화
        }
      }
    }
  }


  display() {

    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        if (this.board[i][j] == 1 || this.board[i][j] == 3) {
          rect(j * SIZE, (i * SIZE), SIZE)
        }
      }
    }

  }
  move_down() {
    if(check_down()!=false)
     {
      for (let i = HEIGHT; i > 0; i--) {
        for (let j = 0; j < WIDTH; j++) {
          if (i < 18 && board[i + 1][j] == 0 && board[i][j] == 1)
          {
            board[i + 1][j] = 1
            board[i][j] = 0
          }
        }
      }
      this.center_ypos++
    }
  }


}