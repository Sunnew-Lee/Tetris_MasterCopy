function CHECK() { // 안움직이는 도형을 3으로 설정
  for (let i = HEIGHT - 1; i >=0; i--) {
    for (let j = 0; j < WIDTH; j++) {
      if (board[i][j] == 1) {
        if (board[i + 1][j] == 2 || board[i + 1][j] == 3) {
          {
            sec1 = millis()
            if (sec1 - sec2 > 499) {
              for (let i = 0; i < HEIGHT; i++)        //블럭 하나라도 3이면 그시점에서 1인블럭들을 다 3으로 초기화
                for (let j = 0; j < WIDTH; j++)
                  if (board[i][j] == 1) {
                    board[i][j] = 3
                    sec2 = sec1;
                  }
              return false;
            }
          }
        }
      }
    }
  }
   
}

function check_left() {

  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (board[j][i] == 1 && (board[j][i - 1] == 2 || board[j][i - 1] == 3)) {
        return false
      }
    }
  }
}

function check_right() {

  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (board[j][i] == 1 && (board[j][i + 1] == 2 || board[j][i + 1] == 3)) {
        return false
      }
    }
  }
}

function check_down() {
  for (let i = HEIGHT - 1; i > 0; i--) {
    for (let j = 0; j < WIDTH; j++) {
      if (board[i][j] == 1 && (board[i + 1][j] == 2 || board[i + 1][j] == 3)) {
        return false
      }
    }
  }
}

function check_rotate(ypos, xpos) { // 기준점 기준 양옆,밑  벽이나 블럭이없는지 체크
  if ((board[ypos][xpos - 1] == 2 || board[ypos][xpos - 1] == 3 || board[ypos][xpos + 1] == 2 || board[ypos][xpos + 1] == 3 || board[ypos+1][xpos] == 3 || board[ypos+1][xpos] == 2 )) {
    return false
  }
}

function check_rotate_I_block(ypos, xpos) { // 기준점 기준 양옆이 벽이나 블럭이없는지 체크
  if ((board[ypos][xpos - 1] == 2 || board[ypos][xpos - 1] == 3 || board[ypos][xpos + 1] == 2 || board[ypos][xpos + 1] == 3 || board[ypos][xpos + 2] == 2 || board[ypos][xpos + 2] == 3 || board[ypos + 1][xpos] == 2 || board[ypos + 1][xpos] == 3 || board[ypos-2][xpos] == 2)) {
    return false
  }
}


function check_rotate_all(ypos, xpos) // 로테이트 해야되는곳에 맵이 0이면 로테이트
{
  if (board[ypos][xpos] == 0 || board[ypos][xpos] != 3 )
    return true
}