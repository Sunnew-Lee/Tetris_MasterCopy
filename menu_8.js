//File name: menu_8.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”


var pos_max=0;
var pos_1 = 0;

var pos_1_letter_1 = 0;
var pos_1_letter_2 = 0;
var pos_1_letter_3 = 0;
var pos_1_letter_4 = 0;
var pos_1_letter_5 = 0;
var pos_1_letter_6 = 0;

var twinkle_t1 = 0;
var twinkle_t2 = 0;
var twinkle_t3 = 0;
var twinkle_t4 = 0;
var twinkle_t5 = 0;
var twinkle_t6 = 0;

var reset_background = true;

var rect_letter1 = true;
var rect_letter2 = true;
var rect_letter3 = true;
var rect_letter4 = true;
var rect_letter5 = true;
var rect_letter6 = true;

function twinkle_letter_1() {
  twinkle_t1++;
  
  if (twinkle_t1 <= 10) {
    push()
    noStroke();
    fill(255, 251, 255);
    rect((width / 5 - 12) + (SIZE * pos_1), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
    pop()
  } else if (twinkle_t1 <= 20) {
    if (twinkle_t1 == 20)
      twinkle_t1 = 0;
  }
}

function twinkle_letter_2() {
  twinkle_t2++;
  
  if (twinkle_t2 <= 10) {
    push()
    noStroke();
    fill(255, 251, 255);
    rect((width / 5 - 12) + (SIZE * pos_1), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
    pop()
  } else if (twinkle_t2 <= 20) {
    if (twinkle_t2 == 20)
      twinkle_t2 = 0;
  }
}

function twinkle_letter_3() {
  twinkle_t3++;
  
  if (twinkle_t3 <= 10) {
    push()
    noStroke();
    fill(255, 251, 255);
    rect((width / 5 - 12) + (SIZE * pos_1), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
    pop()
  } else if (twinkle_t3 <= 20) {
    if (twinkle_t3 == 20)
      twinkle_t3 = 0;
  }
}

function twinkle_letter_4() {
  twinkle_t4++;
  
  if (twinkle_t4 <= 10) {
    push()
    noStroke();
    fill(255, 251, 255);
    rect((width / 5 - 12) + (SIZE * pos_1), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
    pop()
  } else if (twinkle_t4 <= 20) {
    if (twinkle_t4 == 20)
      twinkle_t4 = 0;
  }
}

function twinkle_letter_5() {
  twinkle_t5++;
  
  if (twinkle_t5 <= 10) {
    push()
    noStroke();
    fill(255, 251, 255);
    rect((width / 5 - 12) + (SIZE * pos_1), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
    pop()
  } else if (twinkle_t5 <= 20) {
    if (twinkle_t5 == 20)
      twinkle_t5 = 0;
  }
}

function twinkle_letter_6() {
  twinkle_t6++;
  
  if (twinkle_t6 <= 10) {
    push()
    noStroke();
    fill(255, 251, 255);
    rect((width / 5 - 12) + (SIZE * pos_1), (height / 2) + (SIZE * 4) - 6, SIZE+6, SIZE);
    pop()
  } else if (twinkle_t6 <= 20) {
    if (twinkle_t6 == 20)
      twinkle_t6 = 0;
  }
}

function menu_8()
{

  if (MENU_NUM == 8) {
    if (reset_background == true) {
      image(level_m, 0, 0, width, height);
      reset_background = false;
    }
    switch (pos_1) {
      case 0:
        if (rect_letter1 == true) {
          push();
          noStroke();
          fill(255, 251, 255)
          rect((width / 5 - 12) + (SIZE * 0), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
          pop();
          rect_letter1 = false;
        }


        if (pos_1_letter_1 >= 0 && pos_1_letter_1 < 26)
          text(char(65 + pos_1_letter_1), width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_1 == 26)
          text('.', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_1 == 27)
          text('-', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_1 == 28)
          text('*', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_1 == 29)
          text(' ', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);

        twinkle_letter_1();
        break;

      case 1:
        if (rect_letter2 == true) {
          push();
          noStroke();
          fill(255, 251, 255)
          rect((width / 5 - 12) + (SIZE * 1), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
          pop();
          rect_letter2 = false;
        }

        if (pos_1_letter_2 >= 0 && pos_1_letter_2 < 26)
          text(char(65 + pos_1_letter_2), width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_2 == 26)
          text('.', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_2 == 27)
          text('-', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_2 == 28)
          text('*', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_2 == 29)
          text(' ', width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);

        twinkle_letter_2();
        break;

      case 2:
        if (rect_letter3 == true) {
          push();
          noStroke();
          fill(255, 251, 255)
          rect((width / 5 - 12) + (SIZE * 2), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
          pop();
          rect_letter3 = false
        }

        if (pos_1_letter_3 >= 0 && pos_1_letter_3 < 26)
          text(char(65 + pos_1_letter_3), width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_3 == 26)
          text(".", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_3 == 27)
          text("-", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_3 == 28)
          text("*", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_3 == 29)
          text(" ", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);

        twinkle_letter_3();
        break;

      case 3:
        if (rect_letter4 == true) {
          push();
          noStroke();
          fill(255, 251, 255)
          rect((width / 5 - 12) + (SIZE * 3), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
          pop();
          rect_letter4 = false;
        }

        if (pos_1_letter_4 >= 0 && pos_1_letter_4 < 26)
          text(char(65 + pos_1_letter_4), width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_4 == 26)
          text(".", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_4 == 27)
          text("-", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_4 == 28)
          text("*", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_4 == 29)
          text(" ", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);

        twinkle_letter_4();
        break;

      case 4:
        if (rect_letter5== true) {
          push();
          noStroke();
          fill(255, 251, 255)
          rect((width / 5 - 12) + (SIZE * 4), (height / 2) + (SIZE * 4) - 6, SIZE, SIZE);
          pop();
          rect_letter5 = false;
        }

        if (pos_1_letter_5 >= 0 && pos_1_letter_5 < 26)
          text(char(65 + pos_1_letter_5), width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_5 == 26)
          text(".", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_5 == 27)
          text("-", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_5 == 28)
          text("*", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_5 == 29)
          text(" ", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);

        twinkle_letter_5();
        break;

      case 5:
        if (rect_letter6 == true) {
          push();
          noStroke();
          fill(255, 251, 255)
          rect((width / 5 - 12) + (SIZE * 5), (height / 2) + (SIZE * 4) - 6, SIZE+6, SIZE);
          pop();
          rect_letter6 = false;
        }

        if (pos_1_letter_6 >= 0 && pos_1_letter_6 < 26)
          text(char(65 + pos_1_letter_6), width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_6 == 26)
          text(".", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_6 == 27)
          text("-", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_6 == 28)
          text("*", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);
        else if (pos_1_letter_6 == 29)
          text(" ", width / 5 - 12 + (SIZE * pos_1), height / 2 + (SIZE * 5) - 6);

        twinkle_letter_6();
        break;

    }
    draw_score();

    switch (level) {
      case 0:
        text('0', width / 4 - 3, height / 3 + 34)
        break;
      case 1:
        text('1', width / 4 - 3 + 92, height / 3 + 34)
        break;
      case 2:
        text('2', width / 4 - 3 + 92 + 93, height / 3 + 34)
        break;
      case 3:
        text('3', width / 4 - 3 + 92 + 93 + 94, height / 3 + 34)
        break;
      case 4:
        text('4', width / 4 - 3 + 92 + 93 + 94 + 95, height / 3 + 34)
        break;
      case 5:
        text('5', width / 4 - 3, height / 3 + 34 + 91)
        break;
      case 6:
        text('6', width / 4 - 3 + 92, height / 3 + 34 + 91)
        break;

      case 7:
        text('7', width / 4 - 3 + 92 + 93, height / 3 + 34 + 91)
        break;
      case 8:
        text('8', width / 4 - 3 + 92 + 93 + 94, height / 3 + 34 + 91)
        break;
      case 9:
        text('9', width / 4 - 3 + 92 + 93 + 94 + 95, height / 3 + 34 + 91)
        break;
    }
  }

}