let xpos, ypos;

function keyboard() {
  if (CHECK() != false && keyIsDown(LEFT_ARROW)) {
    {
      if (check_left() != false) {
        for (let i = 0; i < HEIGHT; i++) {
          for (let j = 0; j < WIDTH; j++) {
            if (board[i][j - 1] == 0 && board[i][j] == 1) {
              board[i][j - 1] = 1
              board[i][j] = 0
            }
          }
        }
        block.center_xpos--
      }
    }
  }

  if (CHECK() != false && keyIsDown(RIGHT_ARROW)) {
    if (check_right() != false) {
      for (let i = 0; i < HEIGHT; i++) {
        for (let j = WIDTH - 1; j > 0; j--) {
          if (board[i][j + 1] == 0 && board[i][j] == 1) {
            board[i][j + 1] = 1
            board[i][j] = 0
          }
        }
      }
      block.center_xpos++
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    {
      if (check_down() != false) {
        for (let i = HEIGHT - 1; i > 0; i--) {
          for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] == 1 && board[i + 1][j] == 0) {
              board[i + 1][j] = 1
              board[i][j] = 0
            }
          }
        }
        block.center_ypos++
      }
    }
  }
}


function keyPressed() {

  if (CHECK() != false && keyCode === LEFT_ARROW) {
    {
      if (check_left() != false) {
        for (let i = 0; i < HEIGHT; i++) {
          for (let j = 0; j < WIDTH; j++) {
            if (board[i][j - 1] == 0 && board[i][j] == 1) {
              board[i][j - 1] = 1
              board[i][j] = 0
            }
          }
        }
        block.center_xpos--
      }
    }
  }


  if (CHECK() != false && keyCode === RIGHT_ARROW) {
    if (check_right() != false) {
      for (let i = 0; i < HEIGHT; i++) {
        for (let j = WIDTH - 1; j > 0; j--) {
          if (board[i][j + 1] == 0 && board[i][j] == 1) {
            board[i][j + 1] = 1
            board[i][j] = 0
          }
        }
      }
      block.center_xpos++
    }
  }

  if (keyCode === DOWN_ARROW) {
    {
      if (check_down() != false) {
        for (let i = HEIGHT - 1; i > 0; i--) {
          for (let j = 0; j < WIDTH; j++) {
            if (board[i][j] == 1 && board[i + 1][j] == 0) {
              board[i + 1][j] = 1
              board[i][j] = 0
            }
          }
        }
        block.center_ypos++
      }
    }
  }

  if (keyCode === 90) { // z 

    if (block.block == block_Z) {

      // board[block.center_ypos + 1][block.center_xpos +1]  기준점
      if (check_rotate(block.center_ypos + 1, block.center_xpos + 1) != false)
        if (board[block.center_ypos + 2][block.center_xpos + 1] == 1) {
          if (check_rotate_all(block.center_ypos, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos) == true) 
          {
            board[block.center_ypos][block.center_xpos + 1] = 1
            board[block.center_ypos + 2][block.center_xpos] = 1
          
          board[block.center_ypos + 2][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos + 2] = 0
          }
        }
      else {
        if (check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 2) == true) 
        {
          board[block.center_ypos][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos] = 0
          board[block.center_ypos + 2][block.center_xpos + 1] = 1
          board[block.center_ypos + 2][block.center_xpos + 2] = 1
        }
      }
    }

    if (block.block == block_S) {
      // [block.center_ypos+1][block.center_xpos+2] 기준점 
      if (check_rotate(block.center_ypos + 1, block.center_xpos + 2) != false)
        if (board[block.center_ypos + 1][block.center_xpos + 3] == 1) {
          if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos, block.center_xpos + 1) == true) 
          {
            board[block.center_ypos + 1][block.center_xpos + 1] = 1
            board[block.center_ypos][block.center_xpos + 1] = 1
            board[block.center_ypos + 1][block.center_xpos + 3] = 0
            board[block.center_ypos + 2][block.center_xpos + 1] = 0
          }
        }
      else {
        if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 3) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true) {
          
          board[block.center_ypos + 1][block.center_xpos + 1] = 0
          board[block.center_ypos][block.center_xpos + 1] = 0
          board[block.center_ypos + 1][block.center_xpos + 3] = 1
          board[block.center_ypos + 2][block.center_xpos + 1] = 1
        }
      }
    }

    if (block.block == block_I) {
      if (check_rotate_I_block(block.center_ypos + 1, block.center_xpos + 1) != false)
        //board[block.center_ypos+1][block.center_xpos+1] 기준값

        if (board[block.center_ypos + 1][block.center_xpos + 2] == 1) {

          if (check_rotate_all(block.center_ypos - 1, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true)

          {
            board[block.center_ypos - 1][block.center_xpos + 1] = 1
            board[block.center_ypos][block.center_xpos + 1] = 1
            board[block.center_ypos + 2][block.center_xpos + 1] = 1

            board[block.center_ypos + 1][block.center_xpos] = 0
            board[block.center_ypos + 1][block.center_xpos + 2] = 0
            board[block.center_ypos + 1][block.center_xpos + 3] = 0
          }
        }
      else {
        if (check_rotate_all(block.center_ypos + 1, block.center_xpos) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 3) == true) {
          board[block.center_ypos - 1][block.center_xpos + 1] = 0
          board[block.center_ypos][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos + 1] = 0

          board[block.center_ypos + 1][block.center_xpos] = 1
          board[block.center_ypos + 1][block.center_xpos + 2] = 1
          board[block.center_ypos + 1][block.center_xpos + 3] = 1
        }
      }
    }

    if (block.block == block_L) {
      if (check_rotate(block.center_ypos + 2, block.center_xpos + 1) != false)
        //board[block.center_ypos+2][block.center_xpos+1] 기준값

        if (board[block.center_ypos + 3][block.center_xpos + 2] == 1) {
          if (check_rotate_all(block.center_ypos + 2, block.center_xpos) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 2) == true ) {
            board[block.center_ypos + 2][block.center_xpos] = 1
            board[block.center_ypos + 2][block.center_xpos + 2] = 1
            board[block.center_ypos + 1][block.center_xpos + 2] = 1

            board[block.center_ypos + 1][block.center_xpos + 1] = 0
            board[block.center_ypos + 3][block.center_xpos + 1] = 0
            board[block.center_ypos + 3][block.center_xpos + 2] = 0
          }
        } else if (board[block.center_ypos + 1][block.center_xpos + 2]) {

        if (check_rotate_all(block.center_ypos + 3, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 0) == true)

        {
          board[block.center_ypos + 3][block.center_xpos + 1] = 1
          board[block.center_ypos + 1][block.center_xpos + 1] = 1
          board[block.center_ypos + 1][block.center_xpos] = 1

          board[block.center_ypos + 2][block.center_xpos] = 0
          board[block.center_ypos + 2][block.center_xpos + 2] = 0
          board[block.center_ypos + 1][block.center_xpos + 2] = 0
        }
      } else if (board[block.center_ypos + 1][block.center_xpos] == 1) {
        if (check_rotate_all(block.center_ypos + 2, block.center_xpos) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos) == true) {
          board[block.center_ypos + 2][block.center_xpos] = 1
          board[block.center_ypos + 2][block.center_xpos + 2] = 1
          board[block.center_ypos + 3][block.center_xpos] = 1

          board[block.center_ypos + 3][block.center_xpos + 1] = 0
          board[block.center_ypos + 1][block.center_xpos + 1] = 0
          board[block.center_ypos + 1][block.center_xpos] = 0
        }
      } else if (board[block.center_ypos + 3][block.center_xpos] == 1) {
        if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos + 2) == true) {
          board[block.center_ypos + 1][block.center_xpos + 1] = 1
          board[block.center_ypos + 3][block.center_xpos + 1] = 1
          board[block.center_ypos + 3][block.center_xpos + 2] = 1

          board[block.center_ypos + 2][block.center_xpos] = 0
          board[block.center_ypos + 2][block.center_xpos + 2] = 0
          board[block.center_ypos + 3][block.center_xpos] = 0
        }
      }
    }

    if (block.block == block_J) {
      //board[block.center_ypos+2][block.center_xpos+2] 기준점
      if (check_rotate(block.center_ypos + 2, block.center_xpos + 2) != false)
        if (board[block.center_ypos + 3][block.center_xpos + 1] == 1) {
          if (check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 3) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos + 3) == true) {
            board[block.center_ypos + 2][block.center_xpos + 1] = 1
            board[block.center_ypos + 2][block.center_xpos + 3] = 1
            board[block.center_ypos + 3][block.center_xpos + 3] = 1

            board[block.center_ypos + 1][block.center_xpos + 2] = 0
            board[block.center_ypos + 3][block.center_xpos + 2] = 0
            board[block.center_ypos + 3][block.center_xpos + 1] = 0
          }
        } else if (board[block.center_ypos + 3][block.center_xpos + 3] == 1) {
        if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 3) == true) {
          board[block.center_ypos + 2][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos + 3] = 0
          board[block.center_ypos + 3][block.center_xpos + 3] = 0

          board[block.center_ypos + 1][block.center_xpos + 2] = 1
          board[block.center_ypos + 3][block.center_xpos + 2] = 1
          board[block.center_ypos + 1][block.center_xpos + 3] = 1
        }
      } else if (board[block.center_ypos + 1][block.center_xpos + 3] == 1) {

        if (check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 3) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 1) == true) {
          board[block.center_ypos + 1][block.center_xpos + 2] = 0
          board[block.center_ypos + 3][block.center_xpos + 2] = 0
          board[block.center_ypos + 1][block.center_xpos + 3] = 0

          board[block.center_ypos + 2][block.center_xpos + 1] = 1
          board[block.center_ypos + 2][block.center_xpos + 3] = 1
          board[block.center_ypos + 1][block.center_xpos + 1] = 1
        }
      } else if (board[block.center_ypos + 1][block.center_xpos + 1] == 1) {

        if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos + 1) == true) {
          board[block.center_ypos + 2][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos + 3] = 0
          board[block.center_ypos + 1][block.center_xpos + 1] = 0

          board[block.center_ypos + 1][block.center_xpos + 2] = 1
          board[block.center_ypos + 3][block.center_xpos + 2] = 1
          board[block.center_ypos + 3][block.center_xpos + 1] = 1
        }
      }
    }

    if (block.block == block_T) {
      if (check_rotate(block.center_ypos + 2, block.center_xpos + 1) != false)
        // board[block.center_ypos+2][block.center_xpos+1] 기준점
        if (board[block.center_ypos + 3][block.center_xpos + 1] == 0) {
          if (check_rotate_all(block.center_ypos + 3, block.center_xpos + 1) == true) {
            board[block.center_ypos + 2][block.center_xpos + 2] = 0
            board[block.center_ypos + 3][block.center_xpos + 1] = 1
          }
        } else if (board[block.center_ypos + 2][block.center_xpos + 2] == 0) {
        if (check_rotate_all(block.center_ypos + 2, block.center_xpos + 2) == true) {
          board[block.center_ypos + 2][block.center_xpos + 2] = 1
          board[block.center_ypos + 1][block.center_xpos + 1] = 0
        }
      } else if (board[block.center_ypos + 1][block.center_xpos + 1] == 0) {
        if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 1) == true) {
          board[block.center_ypos + 2][block.center_xpos] = 0
          board[block.center_ypos + 1][block.center_xpos + 1] = 1
        }
      } else if (board[block.center_ypos + 2][block.center_xpos] == 0) {
        if (check_rotate_all(block.center_ypos + 2, block.center_xpos) == true) {
          board[block.center_ypos + 3][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos] = 1
        }
      }
    }

  }
  if (keyCode == 88) { // X key
    if (block.block == block_Z) {
      if (check_rotate(block.center_ypos + 1, block.center_xpos + 1) != false)

        // center_ypos + 1 이 맞는값
        if (board[block.center_ypos + 2][block.center_xpos + 1] == 1) {
          if (check_rotate_all(block.center_ypos, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos) == true) {
            board[block.center_ypos][block.center_xpos + 1] = 1
            board[block.center_ypos + 2][block.center_xpos] = 1
            board[block.center_ypos + 2][block.center_xpos + 1] = 0
            board[block.center_ypos + 2][block.center_xpos + 2] = 0
          }
        } else {
          if (check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 2) == true) 
          {
            board[block.center_ypos][block.center_xpos + 1] = 0
            board[block.center_ypos + 2][block.center_xpos] = 0
            board[block.center_ypos + 2][block.center_xpos + 1] = 1
            board[block.center_ypos + 2][block.center_xpos + 2] = 1
          }
        }
    }

    if (block.block == block_S) {
      if (check_rotate(block.center_ypos + 1, block.center_xpos + 2) != false)
        // [block.center_ypos+1][block.center_xpos+2] 기준점 
        if (board[block.center_ypos + 1][block.center_xpos + 3] == 1) {

          if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 0, block.center_xpos + 1) == true) {
            board[block.center_ypos + 1][block.center_xpos + 1] = 1
            board[block.center_ypos][block.center_xpos + 1] = 1
            board[block.center_ypos + 1][block.center_xpos + 3] = 0
            board[block.center_ypos + 2][block.center_xpos + 1] = 0
          }
        }
      else {
        if (check_rotate_all(block.center_ypos + 1, block.center_xpos + 3) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true) {
          board[block.center_ypos + 1][block.center_xpos + 1] = 0
          board[block.center_ypos][block.center_xpos + 1] = 0
          board[block.center_ypos + 1][block.center_xpos + 3] = 1
          board[block.center_ypos + 2][block.center_xpos + 1] = 1
        }
      }
    }



    if (block.block == block_I) {
      //board[block.center_ypos+1][block.center_xpos+1] 기준값, I 블럭은 옆칸,2번째칸 둘다확인
      if (check_rotate_I_block(block.center_ypos + 1, block.center_xpos + 1) != false)
        if (board[block.center_ypos + 1][block.center_xpos + 2] == 1) {
          if (check_rotate_all(block.center_ypos - 1, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos, block.center_xpos + 1) == true && check_rotate_all(block.center_ypos + 2, block.center_xpos + 1) == true) {
            board[block.center_ypos - 1][block.center_xpos + 1] = 1
            board[block.center_ypos][block.center_xpos + 1] = 1
            board[block.center_ypos + 2][block.center_xpos + 1] = 1

            board[block.center_ypos + 1][block.center_xpos] = 0
            board[block.center_ypos + 1][block.center_xpos + 2] = 0
            board[block.center_ypos + 1][block.center_xpos + 3] = 0
          }
        } else {
          if (check_rotate_all(block.center_ypos +1, block.center_xpos) == true && check_rotate_all(block.center_ypos+1, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 1, block.center_xpos + 3) == true)
          {board[block.center_ypos - 1][block.center_xpos + 1] = 0
          board[block.center_ypos][block.center_xpos + 1] = 0
          board[block.center_ypos + 2][block.center_xpos + 1] = 0

          board[block.center_ypos + 1][block.center_xpos] = 1
          board[block.center_ypos + 1][block.center_xpos + 2] = 1
          board[block.center_ypos + 1][block.center_xpos + 3] = 1}
        }
    }

    if (block.block == block_L) {
      if (check_rotate(block.center_ypos + 2, block.center_xpos + 1) != false)
        //board[block.center_ypos+2][block.center_xpos+1] 기준값

        if (board[block.center_ypos + 3][block.center_xpos + 2] == 1) {
          
if (check_rotate_all(block.center_ypos +2, block.center_xpos ) == true && check_rotate_all(block.center_ypos+2, block.center_xpos + 2) == true && check_rotate_all(block.center_ypos + 3, block.center_xpos) == true)
{board[block.center_ypos + 2][block.center_xpos] = 1
          board[block.center_ypos + 2][block.center_xpos + 2] = 1
          board[block.center_ypos + 3][block.center_xpos] = 1

          board[block.center_ypos + 3][block.center_xpos + 1] = 0
          board[block.center_ypos + 3][block.center_xpos + 2] = 0
          board[block.center_ypos + 1][block.center_xpos + 1] = 0}
        } else if (board[block.center_ypos + 3][block.center_xpos] == 1) {
if (check_rotate_all(block.center_ypos +3, block.center_xpos + 1) == true &&
    check_rotate_all(block.center_ypos+1, block.center_xpos + 1) == true && 
    check_rotate_all(block.center_ypos + 1, block.center_xpos ) == true)
  {
        board[block.center_ypos + 3][block.center_xpos + 1] = 1
        board[block.center_ypos + 1][block.center_xpos + 1] = 1
        board[block.center_ypos + 1][block.center_xpos] = 1

        board[block.center_ypos + 3][block.center_xpos] = 0
        board[block.center_ypos + 2][block.center_xpos] = 0
        board[block.center_ypos + 2][block.center_xpos + 2] = 0
  }
      } else if (board[block.center_ypos + 1][block.center_xpos] == 1) {
        
        if (check_rotate_all(block.center_ypos +2, block.center_xpos) == true &&
    check_rotate_all(block.center_ypos+1, block.center_xpos + 2) == true && 
    check_rotate_all(block.center_ypos + 2, block.center_xpos +2) == true)
       {   
        board[block.center_ypos + 2][block.center_xpos] = 1
        board[block.center_ypos + 1][block.center_xpos + 2] = 1
        board[block.center_ypos + 2][block.center_xpos + 2] = 1

        board[block.center_ypos + 3][block.center_xpos + 1] = 0
        board[block.center_ypos + 1][block.center_xpos + 1] = 0
        board[block.center_ypos + 1][block.center_xpos] = 0
       }
      } else if (board[block.center_ypos + 1][block.center_xpos + 2] == 1) {
        
        if (check_rotate_all(block.center_ypos +1, block.center_xpos + 1) == true &&
    check_rotate_all(block.center_ypos+3, block.center_xpos + 1) == true && 
    check_rotate_all(block.center_ypos + 3, block.center_xpos +2) == true)
       {   
        board[block.center_ypos + 1][block.center_xpos + 1] = 1
        board[block.center_ypos + 3][block.center_xpos + 1] = 1
        board[block.center_ypos + 3][block.center_xpos + 2] = 1

        board[block.center_ypos + 2][block.center_xpos] = 0
        board[block.center_ypos + 1][block.center_xpos + 2] = 0
        board[block.center_ypos + 2][block.center_xpos + 2] = 0
       }
      }
    }

    if (block.block == block_J) {
      if (check_rotate(block.center_ypos + 2, block.center_xpos + 2) != false)
        //board[block.center_ypos+2][block.center_xpos+2] 기준점
        if (board[block.center_ypos + 3][block.center_xpos + 1] == 1) {
          
          if (check_rotate_all(block.center_ypos +2, block.center_xpos + 1) == true &&
    check_rotate_all(block.center_ypos+2, block.center_xpos + 3) == true && 
    check_rotate_all(block.center_ypos + 1, block.center_xpos +1 ) == true)
        {    
          board[block.center_ypos + 3][block.center_xpos + 2] = 0
          board[block.center_ypos + 3][block.center_xpos + 1] = 0
          board[block.center_ypos + 1][block.center_xpos + 2] = 0

          board[block.center_ypos + 2][block.center_xpos + 1] = 1
          board[block.center_ypos + 2][block.center_xpos + 3] = 1
          board[block.center_ypos + 1][block.center_xpos + 1] = 1
        }
        } else if (board[block.center_ypos + 1][block.center_xpos + 1] == 1) {
          
          if (check_rotate_all(block.center_ypos +1, block.center_xpos + 2) == true &&
    check_rotate_all(block.center_ypos+3, block.center_xpos + 2) == true && 
    check_rotate_all(block.center_ypos + 1, block.center_xpos +3) == true)
     {       
        board[block.center_ypos + 2][block.center_xpos + 1] = 0
        board[block.center_ypos + 2][block.center_xpos + 3] = 0
        board[block.center_ypos + 1][block.center_xpos + 1] = 0

        board[block.center_ypos + 1][block.center_xpos + 2] = 1
        board[block.center_ypos + 3][block.center_xpos + 2] = 1
        board[block.center_ypos + 1][block.center_xpos + 3] = 1
     }
      } else if (board[block.center_ypos + 1][block.center_xpos + 3] == 1) {
        
        if (check_rotate_all(block.center_ypos +2, block.center_xpos + 1) == true &&
    check_rotate_all(block.center_ypos+2, block.center_xpos + 3) == true && 
    check_rotate_all(block.center_ypos +3, block.center_xpos+3 ) == true)
      {    
        board[block.center_ypos + 1][block.center_xpos + 2] = 0
        board[block.center_ypos + 3][block.center_xpos + 2] = 0
        board[block.center_ypos + 1][block.center_xpos + 3] = 0

        board[block.center_ypos + 2][block.center_xpos + 1] = 1
        board[block.center_ypos + 2][block.center_xpos + 3] = 1
        board[block.center_ypos + 3][block.center_xpos + 3] = 1
      }
      } else if (board[block.center_ypos + 3][block.center_xpos + 3] == 1) {
        if (check_rotate_all(block.center_ypos +1, block.center_xpos + 2) == true &&
    check_rotate_all(block.center_ypos+3, block.center_xpos + 2) == true && 
    check_rotate_all(block.center_ypos + 3, block.center_xpos+1 ) == true)
       { board[block.center_ypos + 2][block.center_xpos + 1] = 0
        board[block.center_ypos + 2][block.center_xpos + 3] = 0
        board[block.center_ypos + 3][block.center_xpos + 3] = 0

        board[block.center_ypos + 1][block.center_xpos + 2] = 1
        board[block.center_ypos + 3][block.center_xpos + 2] = 1
        board[block.center_ypos + 3][block.center_xpos + 1] = 1}

      }
    }

    if (block.block == block_T) {
      if (check_rotate(block.center_ypos + 2, block.center_xpos + 1) != false)
        // board[block.center_ypos+2][block.center_xpos+1] 기준점
        if (board[block.center_ypos + 3][block.center_xpos + 1] == 0) {
          if (check_rotate_all(block.center_ypos +3, block.center_xpos + 1) == true )
          {board[block.center_ypos + 2][block.center_xpos] = 0
          board[block.center_ypos + 3][block.center_xpos + 1] = 1}
        } else if (board[block.center_ypos + 2][block.center_xpos] == 0) {
           if (check_rotate_all(block.center_ypos +2, block.center_xpos) == true )
           {board[block.center_ypos + 1][block.center_xpos + 1] = 0
        board[block.center_ypos + 2][block.center_xpos] = 1}
      } else if (board[block.center_ypos + 1][block.center_xpos + 1] == 0) {
         if (check_rotate_all(block.center_ypos +1, block.center_xpos + 1) == true )
         {board[block.center_ypos + 2][block.center_xpos + 2] = 0
        board[block.center_ypos + 1][block.center_xpos + 1] = 1}
      } else if (board[block.center_ypos + 2][block.center_xpos + 2] == 0) {
         if (check_rotate_all(block.center_ypos +2, block.center_xpos + 2) == true )
         {board[block.center_ypos + 2][block.center_xpos + 2] = 1
        board[block.center_ypos + 3][block.center_xpos + 1] = 0}
      }

    }
  }
}