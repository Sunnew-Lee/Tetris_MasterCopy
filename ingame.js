//File name: ingame.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee(scoring, gameover, speed), hyosang.jung(line clear)
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

var speed = 0;
var SEC_TO_MILL = 1000;
var is_levelup = true;
var full_row = 0;
var curr_full_row = 0;
var full_count = 0;
var n_full_row = 0;
var level = 0;
var level_copy = 0;
var game_over = false;

function line_clear() //if sum of one line are 10, do line_clear
{
  let sum = 0;

  curr_full_row = full_count;
  for (let i = COLUMN - 1; i > 0; i--) {
    for (let j = 0; j < ROW; j++) {
      if (board[i][j] > 9) {
        sum++;
        if (sum == 10) {
          for (let z = i; z > 0; z--) {
            for (let j = 1; j < ROW - 1; j++) {
              board[z][j] = board[z - 1][j]
            }
          }
          sum = 0;
          full_row++;
          full_count++;
        }

      } else {
        sum = 0;
      }
    }
  }
  text(full_row, width * 3 / 4 - 25, height * 3 / 5 + 2);
}

function level_speed() {
  
  switch (level_copy) {
    case 0:
      speed = (53 / 60) * SEC_TO_MILL;
      break;
    case 1:
      speed = (49 / 60) * SEC_TO_MILL;
      break;
    case 2:
      speed = (45 / 60) * SEC_TO_MILL;
      break;
    case 3:
      speed = (41 / 60) * SEC_TO_MILL;
      break;
    case 4:
      speed = (37 / 60) * SEC_TO_MILL;
      break;
    case 5:
      speed = (33 / 60) * SEC_TO_MILL;
      break;
    case 6:
      speed = (28 / 60) * SEC_TO_MILL;
      break;
    case 7:
      speed = (22 / 60) * SEC_TO_MILL;
      break;
    case 8:
      speed = (17 / 60) * SEC_TO_MILL;
      break;
    case 9:
      speed = (11 / 60) * SEC_TO_MILL;
      break;
    case 10:
      speed = (10 / 60) * SEC_TO_MILL;
      break;
    case 11:
      speed = (9 / 60) * SEC_TO_MILL;
      break;
    case 12:
      speed = (8 / 60) * SEC_TO_MILL;
      break;
    case 13:
      speed = (7 / 60) * SEC_TO_MILL;
      break;
    case 14:
    case 15:
      speed = (6 / 60) * SEC_TO_MILL;
      break;
    case 16:
    case 17:
      speed = (5 / 60) * SEC_TO_MILL;
      break;
    case 18:
    case 19:
      speed = (4 / 60) * SEC_TO_MILL;
      break;
    case 20:
      speed = (3 / 60) * SEC_TO_MILL;
      break;
  }
}

function level_up() {
  // first level up: (start level*10)+10 rows cleared
  // next level up: every 10 rows cleared
  
  if (is_levelup == true) {
    if (full_row == (level * 10 + 10)) {
      level_copy++;
      is_levelup = false;
    }
  } 
  else {
    n_full_row = (level_copy + 1) * 10;  //n_full_row: how much lines to clear to go the next level
    if (full_row % 10 == 0) //every 10rows cleared
    {
      if (n_full_row == full_row) {
        level_copy++;
      }
    }
  }
  text(level_copy, width * 3 / 4 - 25, height * 2 / 5 + 30);
}

function scoring() {

  if (curr_full_row == full_count)   //to make scoring only if fullrow doesn't change.
  {
    switch (curr_full_row) {
      case 1:
        score += 40 * (level_copy + 1);
        line_clear_sound.play()
        break;
      case 2:
        score += 100 * (level_copy + 1);
        line_clear_sound.play()
        break;
      case 3:
        score += 300 * (level_copy + 1);
        line_clear_sound.play()
        break;
      case 4:
        score += 1200 * (level_copy + 1);
        tetris_sound.play()
        break;
    }
    curr_full_row = 0;
    full_count = 0
  }
  text(score, width * 3 / 4 - 75, height / 5 + 12);
}

function gameover() 
{
  if (board[2][5] > 9) {
    game_over = true;

    if (timer == 100)   //to make a delay for the end.
    {
      timer = 0;
      MENU_NUM++;
      switch (MUSIC_TYPE) {
        case 0:
          a_type_bgm.pause();
          break;
        case 1:
          b_type_bgm.pause();
          break;
        case 2:
          c_type_bgm.pause();
          break;
      }
      game_over_sound.play()
    } else {
      timer++
    }

  }
}