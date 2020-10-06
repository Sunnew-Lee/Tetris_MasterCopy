let block_number
var sec1
var sec2 = 0
var sec3
var sec4 = 0
let amu = 0.1
let block
let wall_img 

let licence;
let title;
let gtmt;
let level;
let font;


function preload() {
  licence = loadImage('menus/licence.png');
  title = loadImage('menus/title.png');
  gtmt = loadImage('menus/gtmt.png');
  level = loadImage('menus/level.png');
  font = loadFont('menus/Early GameBoy.ttf');
}

function setup() {

  createCanvas(WIDTH * SIZE, HEIGHT * SIZE);
  wall_img = loadImage('wall.png')
  block_number = int(random(0, 7));
  switch (block_number) {
    case 0:
      block = new Piece(5, 1,block_I, board)
      break
    case 1:
      block = new Piece(5, 1,block_L, board)
      break
    case 2:
      block = new Piece(4, 1,block_J, board)
      break
    case 3:
      block = new Piece(5, 1,block_T, board)
      break
    case 4:
      block = new Piece(4, 1,block_S, board)
      break
    case 5:
      block = new Piece(5,1, block_Z, board)
      break
    case 6:
      block = new Piece(5, 1,block_O, board)
      break
  }
      
  block.initial();
}

function draw() {
  
  menu();
   if (i == 5) {
 
  if (CHECK() == false ) {
    
    block_number = int(random(0, 7));
    switch (block_number) {
    case 0:
      block = new Piece(5, 1,block_I, board)
      break
    case 1:
      block = new Piece(5, 1,block_L, board)
      break
    case 2:
      block = new Piece(4, 1,block_J, board)
      break
    case 3:
      block = new Piece(5, 1,block_T, board)
      break
    case 4:
      block = new Piece(4, 1,block_S, board)
      break
    case 5:
      block = new Piece(5,1, block_Z, board)
      break
    case 6: 
      break
    }   
    
    block.initial();
  }
   
  draw_map()
  block.display();
  line_clear() 
    
  sec1 = millis() 
  if (sec1 - sec2 > 500) {
    block.move_down(); 
    sec2 = sec1;
  } 
  }
  
 
}