//File name: sketch.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee , hyosang.jung  // put together each function 
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”


var millisecond1 = 0;
var millisecond2 = 0;

var stop = false;  // check block stop
var pause = true;

var block_component_num = 4; 

var timer_down = 0;
var timer = 0;

var score = 0;
var bonus_score = 0;   // for soft drop
var next_block_num;   
var block_type;


function preload() {
  licence_m = loadImage('menus/licence.png');
  title_m = loadImage('menus/title.png');
  gtmt_m = loadImage('menus/select1.png');
  level_m = loadImage('menus/select2.png');
  pause_m = loadImage('menus/pause.png');
  interface_m = loadImage('menus/game.png');
  game_over_m = loadImage('menus/game_over.png');

  i_block = loadImage('blocks/block_I.png');
  j_block = loadImage('blocks/block_J.png');
  l_block = loadImage('blocks/block_L.png');
  o_block = loadImage('blocks/block_O.png');
  s_block = loadImage('blocks/block_S.png');
  t_block = loadImage('blocks/block_T.png');
  z_block = loadImage('blocks/block_Z.png');
  boundary_block = loadImage('blocks/boundary.png');
  
  close_line = loadImage('blocks/close_line.png');

  font = loadFont('menus/tetris.ttf');
  soundFormats('mp3', 'ogg');
  
  title_bgm = loadSound('sound/bgm_title');
  a_type_bgm = loadSound('sound/bgm_a-type');
  b_type_bgm = loadSound('sound/bgm_b-type');
  c_type_bgm = loadSound('sound/bgm_c-type');
  game_over_bgm = loadSound('sound/bgm_top_score');
  
  move_sound = loadSound('sound/move');
  landing_sound = loadSound('sound/block_fall');
  pause_sound = loadSound('sound/pause');
  line_clear_sound = loadSound('sound/clear_line');
  tetris_sound = loadSound('sound/tetris');
  rotate_sound = loadSound('sound/rotate');
  level_up_sound = loadSound('sound/level_up');
  game_over_sound = loadSound('sound/gameover');
}


function setup() {
  createCanvas(900, 765);
  set_blocks()
  board_set();
  millisecond1 = millis();
  millisecond2 = millis();
  next_block_num = int(random(3, 10));
  set_random_block();
  title_bgm.setVolume(0.2);
  a_type_bgm.setVolume(0.2);
  b_type_bgm.setVolume(0.2);
  c_type_bgm.setVolume(0.2);
  game_over_bgm.setVolume(0.2);
}

function draw()
{
  if (MENU_NUM == 5) 
  {
    if (pause != false) 
    {
      millisecond1 = millis();
      background(255);
      image(interface_m, SIZE * (ROW) + 5, 0, width - SIZE * (ROW), height);
      
      display_board();
      keyboard();
      line_clear();
      level_speed();
      level_up();
      scoring();
      next(); 
      
       if (millisecond1 - millisecond2 >= speed) 
      {
        if (stop === false)  // check block moving 
        {
          go_down();
        }
        millisecond2 = millisecond1;
      }
      if (stop === true)
      {
        landing_sound.play();
        set_random_block();
        score += bonus_score;
        bonus_score = 0;
        stop = false;
      }
      gameover();
    }
  } 
  else 
  {
    menu();
    menu_8();
  }
 
}

