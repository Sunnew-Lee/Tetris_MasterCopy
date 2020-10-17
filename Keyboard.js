//File name: keyboard.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee(In menu) , hyosang.jung(block move)
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

function keyboard()   
{
  if (keyIsDown(LEFT_ARROW)) 
  {
    if (timer == 20) {
      go_left();
      timer = 0;
    } 
    else
    {
      timer++
    }

  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    if (timer == 20) {
      go_right();
      timer = 0;
    }
    else 
    {
      timer++
    }
  }
  if (keyIsDown(DOWN_ARROW)) //for soft drop
  {
    if (timer_down == 5) 
    {
      timer_down = 0;
      if( game_over !=true)
      {
        bonus_score++
        go_down();
      }
    }
    else 
    {
      timer_down++
    }
  }

}

function keyReleased() 
{
  if (keyCode == DOWN_ARROW)
    bonus_score = 0;  //for soft drop bonus score
}

function keyPressed() {
  if (MENU_NUM == 5) {
    if (keyCode === ENTER) {
      if (pause == true) {
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
        pause_sound.play()
        image(pause_m, SIZE, 0, SIZE * (ROW - 2), SIZE * (COLUMN - 1));
        pause = false;
      } else {
        switch (MUSIC_TYPE) {
          case 0:
            a_type_bgm.loop();
            break;
          case 1:
            b_type_bgm.loop();
            break;
          case 2:
            c_type_bgm.loop();
            break;
        }
        pause = true;
      }
    }
    else if (pause != false)
    {
      if (keyCode === LEFT_ARROW)
      {
        go_left();
      } else if (keyCode === RIGHT_ARROW) 
      {
        go_right();
      } else if (keyCode === DOWN_ARROW) 
      {
        go_down();
      }
      if (keyCode === 88) 
      {
        if (block_type == 0)
        {
          rotate_sound.play()
        }
        rotate_block_x();
      } 
      else if (keyCode === 90) 
      {
        if (block_type == 0) 
        {
          rotate_sound.play()
        }
        rotate_block_z();
      }
    }

  } 
  else if (MENU_NUM == 7) 
  {
    if (keyCode == 88 || keyCode == ENTER) {
      MENU_NUM++;
      game_over_sound.stop();
      game_over_bgm.loop()
      
      pos_max=0;
      pos_1 = 0;
      pos_1_letter_1 = 0;
      pos_1_letter_2 = 0;
      pos_1_letter_3 = 0;
      pos_1_letter_4 = 0;
      pos_1_letter_5 = 0;
      pos_1_letter_6 = 0;

      full_low = 0;
    }
  } 
  
  else if (MENU_NUM == 8) {

    switch (pos_1) {
      case 0:
        if (keyCode == UP_ARROW) {
          move_sound.play()
          pos_1_letter_1++;
          rect_letter1 = true;
          if (pos_1_letter_1 >= 30) {
            pos_1_letter_1 = 0;
          }
        } else if (keyCode == DOWN_ARROW) {
          move_sound.play()
          pos_1_letter_1--;
          rect_letter1 = true;
          if (pos_1_letter_1 < 0) {
            pos_1_letter_1 = 29;
          }
        }
        break;
      case 1:
        if (keyCode == UP_ARROW) {
          move_sound.play()
          pos_1_letter_2++;
          rect_letter2 = true;
          if (pos_1_letter_2 > 29) {
            pos_1_letter_2 = 0;
          }
        } else if (keyCode == DOWN_ARROW) {
          move_sound.play()
          pos_1_letter_2--;
          rect_letter2 = true;
          if (pos_1_letter_2 < 0) {
            pos_1_letter_2 = 29;
          }
        }
        break;
      case 2:
        if (keyCode == UP_ARROW) {
          move_sound.play()
          pos_1_letter_3++;
          rect_letter3 = true;
          if (pos_1_letter_3 > 29) {
            pos_1_letter_3 = 0;
          }
        } else if (keyCode == DOWN_ARROW) {
          move_sound.play()
          pos_1_letter_3--;
          rect_letter3 = true;
          if (pos_1_letter_3 < 0) {
            pos_1_letter_3 = 29;
          }
        }
        break;
      case 3:
        if (keyCode == UP_ARROW) {
          move_sound.play()
          pos_1_letter_4++;
          rect_letter4 = true;
          if (pos_1_letter_4 > 29) {
            pos_1_letter_4 = 0;
          }
        } else if (keyCode == DOWN_ARROW) {
          move_sound.play()
          pos_1_letter_4--;
          rect_letter4 = true;
          if (pos_1_letter_4 < 0) {
            pos_1_letter_4 = 29;
          }
        }
        break;
      case 4:
        if (keyCode == UP_ARROW) {
          move_sound.play()
          pos_1_letter_5++;
          rect_letter5 = true;
          if (pos_1_letter_5 > 29) {
            pos_1_letter_5 = 0;
          }
        } else if (keyCode == DOWN_ARROW) {
          move_sound.play()
          pos_1_letter_5--;
          rect_letter5 = true;
          if (pos_1_letter_5 < 0) {
            pos_1_letter_5 = 29;
          }
        }
        break;
      case 5:
        if (keyCode == UP_ARROW) {
          move_sound.play()
          pos_1_letter_6++;
          rect_letter6 = true;
          if (pos_1_letter_6 > 29) {
            pos_1_letter_6 = 0;
          }
        } else if (keyCode == DOWN_ARROW) {
          move_sound.play()
          pos_1_letter_6--;
          rect_letter6 = true;
          if (pos_1_letter_6 < 0) {
            pos_1_letter_6 = 29;
          }
        }
        break;
    }




    if (keyCode == 88) // draw recent leftside text
    {
      pos_1++;
      if (pos_1 > pos_max) //give the max position to pos.
      {
        pos_max = pos_1;
      }

      switch (pos_1) {
        case 1:
          rect_letter1 = true;
          if (pos_1_letter_1 >= 0 && pos_1_letter_1 < 26)
            text(char(65 + pos_1_letter_1), width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 26)
            text('.', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 27)
            text('-', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 28)
            text('*', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_1 == 29)
            text(' ', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          break;
        case 2:
          rect_letter2 = true;
          if (pos_1_letter_2 >= 0 && pos_1_letter_2 < 26)
            text(char(65 + pos_1_letter_2), width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 26)
            text('.', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 27)
            text('-', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 28)
            text('*', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_2 == 29)
            text(' ', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          break;
        case 3:
          rect_letter3 = true;
          if (pos_1_letter_3 >= 0 && pos_1_letter_3 < 26)
            text(char(65 + pos_1_letter_3), width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 26)
            text('.', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 27)
            text('-', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 28)
            text('*', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_3 == 29)
            text(' ', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          break;
        case 4:
          rect_letter4 = true;
          if (pos_1_letter_4 >= 0 && pos_1_letter_4 < 26)
            text(char(65 + pos_1_letter_4), width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 26)
            text('.', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 27)
            text('-', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 28)
            text('*', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_4 == 29)
            text(' ', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          break;
        case 5:
          rect_letter5 = true;
          if (pos_1_letter_5 >= 0 && pos_1_letter_5 < 26)
            text(char(65 + pos_1_letter_5), width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 26)
            text('.', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 27)
            text('-', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 28)
            text('*', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          else if (pos_1_letter_5 == 29)
            text(' ', width / 5 - 12 + (SIZE * (pos_1 - 1)), height / 2 + (SIZE * 5) - 6);
          break;
      }
    }
    if (pos_1 > 5 || keyCode == ENTER) // if enter or x, go to level select
    {
      if (pos_max == 6)
        pos_max--;
      
      MENU_NUM = 4;
      
      game_over_bgm.stop();

      switch (MUSIC_TYPE) {
        case 0:
          a_type_bgm.loop();
          break;

        case 1:
          b_type_bgm.loop();
          break;

        case 2:
          c_type_bgm.loop();
          break;
      }
    } else if (keyCode == 90) // draw recent rightside text
    {
      if (pos_1 > 0) {
        pos_1--;
        switch (pos_1) {
          case 0:
            rect_letter2 = true;
            if (pos_1_letter_2 >= 0 && pos_1_letter_2 < 26)
              text(char(65 + pos_1_letter_2), width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_2 == 26)
              text('.', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_2 == 27)
              text('-', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_2 == 28)
              text('*', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_2 == 29)
              text(' ', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            break;
          case 1:
            rect_letter3 = true;
            if (pos_1_letter_3 >= 0 && pos_1_letter_3 < 26)
              text(char(65 + pos_1_letter_3), width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_3 == 26)
              text('.', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_3 == 27)
              text('-', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_3 == 28)
              text('*', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_3 == 29)
              text(' ', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            break;
          case 2:
            rect_letter4 = true;
            if (pos_1_letter_4 >= 0 && pos_1_letter_4 < 26)
              text(char(65 + pos_1_letter_4), width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_4 == 26)
              text('.', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_4 == 27)
              text('-', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_4 == 28)
              text('*', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_4 == 29)
              text(' ', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            break;
          case 3:
            rect_letter5 = true;
            if (pos_1_letter_5 >= 0 && pos_1_letter_5 < 26)
              text(char(65 + pos_1_letter_5), width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_5 == 26)
              text('.', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_5 == 27)
              text('-', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_5 == 28)
              text('*', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_5 == 29)
              text(' ', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            break;
          case 4:
            rect_letter6 = true;
            if (pos_1_letter_6 >= 0 && pos_1_letter_6 < 26)
              text(char(65 + pos_1_letter_6), width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_6 == 26)
              text('.', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_6 == 27)
              text('-', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_6 == 28)
              text('*', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            else if (pos_1_letter_6 == 29)
              text(' ', width / 5 - 12 + (SIZE * (pos_1 + 1)), height / 2 + (SIZE * 5) - 6);
            break;
        }
      }
    }
  }
  
  
  else if (MENU_NUM == 4)
  {
    
    if (keyCode == 90) {
      MENU_NUM--;
    } else if (keyCode == 88 || keyCode == 13) 
    {
      
      level_copy = level;
      MENU_NUM++;
      score=0;
      game_over=false
    }
    if (level >= 0 && level <= 9) 
    {
      if (keyCode == RIGHT_ARROW) 
      {
        if (level < 9) {
          move_sound.play()
          level++;
        }
      } else if (keyCode == LEFT_ARROW)
      {
        if (level > 0) {
          move_sound.play()
          level--;
        }
      } else if (keyCode == UP_ARROW) 
      {
        if (level > 4) {
          move_sound.play()
          level -= 5;
        }
      } else if (keyCode == DOWN_ARROW) 
      {
        if (level < 5) {
          move_sound.play()
          level += 5;
        }
      }
    }
  } 
  else if (MENU_NUM == 3) 
  {
    if (keyCode == 90) {
      MENU_NUM--;
    }
    else if (keyCode == 88 || keyCode == 13) 
    {
      MENU_NUM++;
    } 
    else if (MUSIC_TYPE >= 0 && MUSIC_TYPE <= 3) 
    {
      if (keyCode == RIGHT_ARROW) 
      {
        if (MUSIC_TYPE < 3) {
          MUSIC_TYPE++;
          MUSIC_CHECK = true;
        }
      } 
      else if (keyCode == LEFT_ARROW) 
      {
        if (MUSIC_TYPE > 0) {
          MUSIC_TYPE--;
          MUSIC_CHECK = true;
        }
      } 
      else if (keyCode == UP_ARROW)
      {
        if (MUSIC_TYPE > 1) {
          MUSIC_TYPE -= 2;
          MUSIC_CHECK = true;
        }
      }
      else if (keyCode == DOWN_ARROW) 
      {
        if (MUSIC_TYPE < 2) {
          MUSIC_TYPE += 2;
          MUSIC_CHECK = true;
        }
      }
    }
  }
  else if (MENU_NUM == 2) 
  {
    if (GAME_TYPE) {
      if (keyCode == 13)
      {
        MENU_NUM += 2;
      }
    }
    if (keyCode == RIGHT_ARROW)
    {
       move_sound.play()
      GAME_TYPE = false;
    } 
    else if (keyCode == LEFT_ARROW) 
    {
         move_sound.play()
      GAME_TYPE = true;
    }
    if (GAME_TYPE == false) 
    {
      if (keyCode == 13 || keyCode == 88) 
      {
        GAME_TYPE = true;
      }
    }
    if (GAME_TYPE) 
    {
      if (keyCode == 88) 
      {
        MENU_NUM++;
      }
    }
  } 
  else if (MENU_NUM == 1) 
  {
    if (GAME_TYPE) {
      if (keyCode == 13) 
      {
        MENU_NUM++;
      }
    }

    if (keyCode == RIGHT_ARROW) 
    {
      GAME_TYPE = false;
    }
    else if (keyCode == LEFT_ARROW)
    {
      GAME_TYPE = true;
    }
    if (GAME_TYPE == false) 
    {
      if (keyCode == 13)
      {
        GAME_TYPE = true;
      }
    }
  }
}