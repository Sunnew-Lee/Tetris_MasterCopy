//File name: menu.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee (overall menu design), hyosang.jung(twinkle text, sound)
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

var MENU_NUM = 0;
var MUSIC_TYPE = 0;
var GAME_TYPE = true;
var MUSIC_CHECK = true;
var MUSIC_CHECK_2 = false

var timer_1 = 17;
var timer_2 = 17;
var twinkle_time = 0

function twinkle(TEXT, WIDTH, HEIGHT) // twinkle text
{
  twinkle_time++;
  if (twinkle_time % 30 <= 15) {
    fill(0);
    text(TEXT, WIDTH, HEIGHT);
  } else if (twinkle_time % 30 >= 15) {
    push();
    fill(165, 162, 165);
    text(TEXT, WIDTH, HEIGHT);
    pop();
  }

}

function draw_score() {
  let score_text = score;

  score_text = score_text.toString();
  let score_length = score_text.length;

  push();
  noStroke();
  fill(255, 251, 255)
  rect(width / 5 - 13 + (SIZE * 8) + 15, (height / 2) + (SIZE * 4) - 6, (score_length) * SIZE, SIZE);
  pop();
  text(score, width / 5 - 13 + (SIZE * 8) + 15, height / 2 + (SIZE * 5) - 6);

}

// MENU_NUM  0: license  1: title  2: game type select  3: music type  4:level select  5: ingame
// 6~7 : game over  8: top score

function menu() {
  if (MENU_NUM == 0) {
    image(licence_m, 0, 0, width, height);
    if (frameCount > 5 * 60) {
      MENU_NUM++;
    }

  } else if (MENU_NUM == 1) {
    if (MUSIC_CHECK == true) {
      title_bgm.play();
      MUSIC_CHECK = false;
    }
    image(title_m, 0, 0, width, height);
    textFont(font);
    textSize(50);
    if (GAME_TYPE) {
      text('~', width * 0.066, height * 0.8271);
    } else {
      text('~', width * 0.56, height * 0.8271);
    }
  } else if (MENU_NUM == 2) {
    title_bgm.stop()
    if (MUSIC_CHECK_2 == false) {

      a_type_bgm.loop();

      MUSIC_CHECK_2 = true;
    }
    image(gtmt_m, 0, 0, width, height);
    textFont(font);
    textSize(47);
    switch (MUSIC_TYPE) {
      case 0:
        text('a-type', width * 0.141, height * 2 / 3 + 50);
        break;
      case 1:
        text('b-type', width * 5 / 9 + 3, height * 2 / 3 + 50);
        break;
      case 2:
        text('c-type', width * 0.141, height * 5 / 6 + 10);
        break;
      case 3:
        text('off', width * 5 / 9 + 50, height * 5 / 6 + 10);
        break;
    }
    if (GAME_TYPE) {
      twinkle('a-type', width * 0.141, height / 3 - 10)
    } else {
      twinkle('b-type', width * 5 / 9 + 3, height / 3 - 10);
    }
  } else if (MENU_NUM == 3) {
    image(gtmt_m, 0, 0, width, height);
    if (GAME_TYPE) {
      text('a-type', width * 0.141, height / 3 - 10);
    } else {
      text('b-type', width * 5 / 9 + 3, height / 3 - 10);
    }
    switch (MUSIC_TYPE) {
      case 0:

        if (MUSIC_CHECK == true) {
          a_type_bgm.stop();
          b_type_bgm.stop();
          c_type_bgm.stop();
          a_type_bgm.loop();
          MUSIC_CHECK = false;
        }
        twinkle('a-type', width * 0.141, height * 2 / 3 + 50)

        break;
      case 1:

        if (MUSIC_CHECK == true) {
          a_type_bgm.stop();
          b_type_bgm.stop();
          c_type_bgm.stop();
          b_type_bgm.loop();
          MUSIC_CHECK = false;
        }
        twinkle('b-type', width * 5 / 9 + 3, height * 2 / 3 + 50)

        break;
      case 2:

        if (MUSIC_CHECK == true) {
          a_type_bgm.stop();
          b_type_bgm.stop();
          c_type_bgm.stop();
          c_type_bgm.loop();
          MUSIC_CHECK = false;
        }
        twinkle('c-type', width * 0.141, height * 5 / 6 + 10)

        break;
      case 3:

        if (MUSIC_CHECK == true) {
          a_type_bgm.stop();
          b_type_bgm.stop();
          c_type_bgm.stop();
          MUSIC_CHECK = false;
        }
        twinkle('off', width * 5 / 9 + 50, height * 5 / 6 + 10)

        break;
    }
  } else if (MENU_NUM == 4) {

    image(level_m, 0, 0, width, height);


    if (score != 0) // for every score exept 0
    {
      push();
      noStroke();
      fill(255, 251, 255)
      rect(width / 5 - 12, (height / 2) + (SIZE * 4) - 6, (pos_max + 1) * SIZE+6, SIZE);
      pop();

      switch (pos_max) //the max position of letter
      {
        case 5:
          if (pos_1_letter_6 >= 0 && pos_1_letter_6 < 26)
            text(char(65 + pos_1_letter_6), width / 5 - 12 + (SIZE * 5), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_6 == 26)
            text(".", width / 5 - 12 + (SIZE * 5), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_6 == 27)
            text("-", width / 5 - 12 + (SIZE * 5), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_6 == 28)
            text("*", width / 5 - 12 + (SIZE * 5), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_6 == 29)
            text(" ", width / 5 - 12 + (SIZE * 5), height / 2 + (SIZE * 5) - 6);

        case 4:
          if (pos_1_letter_5 >= 0 && pos_1_letter_5 < 26)
            text(char(65 + pos_1_letter_5), width / 5 - 12 + (SIZE * 4), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 26)
            text(".", width / 5 - 12 + (SIZE * 4), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 27)
            text("-", width / 5 - 12 + (SIZE * 4), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 28)
            text("*", width / 5 - 12 + (SIZE * 4), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 29)
            text(" ", width / 5 - 12 + (SIZE * 4), height / 2 + (SIZE * 5) - 6);

        case 3:
          if (pos_1_letter_4 >= 0 && pos_1_letter_4 < 26)
            text(char(65 + pos_1_letter_4), width / 5 - 12 + (SIZE * 3), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 26)
            text(".", width / 5 - 12 + (SIZE * 3), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 27)
            text("-", width / 5 - 12 + (SIZE * 3), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 28)
            text("*", width / 5 - 12 + (SIZE * 3), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 29)
            text(" ", width / 5 - 12 + (SIZE * 3), height / 2 + (SIZE * 5) - 6);

        case 2:
          if (pos_1_letter_3 >= 0 && pos_1_letter_3 < 26)
            text(char(65 + pos_1_letter_3), width / 5 - 12 + (SIZE * 2), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 26)
            text(".", width / 5 - 12 + (SIZE * 2), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 27)
            text("-", width / 5 - 12 + (SIZE * 2), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 28)
            text("*", width / 5 - 12 + (SIZE * 2), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 29)
            text(" ", width / 5 - 12 + (SIZE * 2), height / 2 + (SIZE * 5) - 6);

        case 1:
          if (pos_1_letter_2 >= 0 && pos_1_letter_2 < 26)
            text(char(65 + pos_1_letter_2), width / 5 - 12 + (SIZE), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 26)
            text('.', width / 5 - 12 + (SIZE), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 27)
            text('-', width / 5 - 12 + (SIZE), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 28)
            text('*', width / 5 - 12 + (SIZE), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 29)
            text(' ', width / 5 - 12 + (SIZE), height / 2 + (SIZE * 5) - 6);

        case 0:
          if (pos_1_letter_1 >= 0 && pos_1_letter_1 < 26)
            text(char(65 + pos_1_letter_1), width / 5 - 12, height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 26)
            text('.', width / 5 - 12, height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 27)
            text('-', width / 5 - 12, height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 28)
            text('*', width / 5 - 12, height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 29)
            text(' ', width / 5 - 12, height / 2 + (SIZE * 5) - 6);
          break; //if max position: 0, draw letter_1 text, if 5: draw letter_1~6 text.
      }

      draw_score();

    }


    switch (level) {
      case 0:
        twinkle('0', width / 4 - 3, height / 3 + 34)
        break;
      case 1:
        twinkle('1', width / 4 - 3 + 92, height / 3 + 34)
        break;
      case 2:
        twinkle('2', width / 4 - 3 + 92 + 93, height / 3 + 34)
        break;
      case 3:
        twinkle('3', width / 4 - 3 + 92 + 93 + 94, height / 3 + 34)
        break;
      case 4:
        twinkle('4', width / 4 - 3 + 92 + 93 + 94 + 95, height / 3 + 34)
        break;
      case 5:
        twinkle('5', width / 4 - 3, height / 3 + 34 + 91)
        break;
      case 6:
        twinkle('6', width / 4 - 3 + 92, height / 3 + 34 + 91)
        break;
      case 7:
        twinkle('7', width / 4 - 3 + 92 + 93, height / 3 + 34 + 91)
        break;
      case 8:
        twinkle('8', width / 4 - 3 + 92 + 93 + 94, height / 3 + 34 + 91)
        break;
      case 9:
        twinkle('9', width / 4 - 3 + 92 + 93 + 94 + 95, height / 3 + 34 + 91)
        break;
    }
  } else if (MENU_NUM == 6) {
    push();
    fill(255, 251, 255);
    noStroke();
    rect((4 * SIZE) + 470, (4 * SIZE) + 380, 4 * SIZE + 20, 4 * SIZE - 20);
    pop();

    // show animation for the game over screen and go to MENU_NUM 7.
    if (timer_1 > -2) {
      if (timer == 1) {
        timer = 0;
        timer_1--;
        image(close_line, SIZE, SIZE * timer_1, SIZE * (ROW - 2), SIZE);
      } else
        timer++;
    } else if (timer_2 > -2) {
      if (timer == 1) {
        timer = 0;
        timer_2--;
        push();
        fill(255, 251, 255);
        noStroke();
        rect(SIZE, SIZE * timer_2, SIZE * (ROW - 2), SIZE);
        pop();
      } else {
        timer++;
      }
    } else {
      image(game_over_m, SIZE, 0, SIZE * (ROW - 2), SIZE * (COLUMN - 1));
      timer_1 = 17;
      timer_2 = 17;
      board_set();
      next_block = int(random(0, 7));
      set_random_block();
      MENU_NUM++;
    }
  }
}