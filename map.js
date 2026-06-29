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


const NEXT_BLOCK_PREVIEW = {
  3: { shape: block_O, get image() { return o_block; }, yOffset: 550 },
  4: { shape: block_I, get image() { return i_block; }, yOffset: 505 },
  5: { shape: block_Z, get image() { return z_block; }, yOffset: 550 },
  6: { shape: block_S, get image() { return s_block; }, yOffset: 550 },
  7: { shape: block_L, get image() { return l_block; }, yOffset: 550 },
  8: { shape: block_J, get image() { return j_block; }, yOffset: 550 },
  9: { shape: block_T, get image() { return t_block; }, yOffset: 550 }
};

function next() //show next block
{
  const preview = NEXT_BLOCK_PREVIEW[next_block_num];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (preview.shape[i][j] == 1) {
        image(preview.image, (j * SIZE) + 660, (i * SIZE) + preview.yOffset, SIZE, SIZE);
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