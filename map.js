//File name: map.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee(diplay board) , hyosang.jung(next)
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

var ROW = 12;
var COLUMN = 18;
var board = [];
var SIZE = 45;


function next() //show next block
{
  for (let i = 0; i < COLUMN; i++) {
    for (let j = 0; j < ROW; j++) {
      {
        switch (next_block_num) {
          case 3:
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_O[i][j] == 1) {
                  image(o_block, (j * SIZE) + 660, (i * SIZE) + 550, SIZE, SIZE);
                }
              }
            }
            break;
            case 4:
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_I[i][j] == 1) {
                  image(i_block, (j * SIZE) + 660, (i * SIZE) + 505, SIZE, SIZE);
                   }
              }
            }
            break;
          case 5:
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_Z[i][j] == 1) {
                  image(z_block, (j * SIZE) + 660, (i * SIZE) + 550, SIZE,SIZE);
                   }
              }
            }
            break;
          case 6:
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_S[i][j] == 1) {
                  image(s_block, (j *SIZE) + 660, (i * SIZE) + 550, SIZE,SIZE);
                   }
              }
            }
            break;
          case 7:
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_L[i][j] == 1) {
                  image(l_block, (j * SIZE) + 660, (i * SIZE) + 550,SIZE, SIZE);
                   }
              }
            }
            break;
          case 8:
          for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_J[i][j] == 1) {
                  image(j_block, (j * SIZE) + 660, (i * SIZE) + 550, SIZE, SIZE);
                   }
              }
            }
            break;
            case 9:
            for (let i = 0; i < 4; i++) {
              for (let j = 0; j < 4; j++) {
                if (block_T[i][j] == 1) {
                  image(t_block, (j * SIZE) + 660, (i * SIZE) + 550, SIZE, SIZE);
                   }
              }
            }
            break;
        }
      }
    }
  }
}

// 0: blank , 2: boundary , 3~9 : active blocks , 10~16: unactive blocks

function display_board() {    
  for (let i = 0; i < COLUMN; i++) {
    for (let j = 0; j < ROW; j++) {
      if (board[i][j] === 2)
      {
        image(boundary_block, j * SIZE, i * SIZE, SIZE, SIZE)
      } 
      else if (board[i][j] >=3 && board[i][j] <=16) 
      {
        if(board[i][j] == 3 || board[i][j] == 10)
          image(o_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
        if(board[i][j] == 4 || board[i][j] == 11)
          image(i_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
        if(board[i][j] == 5 || board[i][j] == 12)
          image(z_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
        if(board[i][j] == 6 || board[i][j] == 13)
          image(s_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
        if(board[i][j] == 7 || board[i][j] == 14)
          image(l_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
        if(board[i][j] == 8 || board[i][j] == 15)
          image(j_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
        if(board[i][j] == 9 || board[i][j] == 16)
          image(t_block, j * SIZE, i * SIZE, SIZE, SIZE);
        
      }
    }
  }
}

function board_set()
{
  for (let i = 0; i < COLUMN; i++) 
  {
    board[i] = [];
    for (let j = 0; j < ROW; j++)
    {
      if (j === 0 || i === COLUMN - 1 || j === ROW - 1) 
      {
        board[i][j] = 2;  //boundary
      } 
      else 
      {
        board[i][j] = 0;  //blank
      }
    }
  }
}