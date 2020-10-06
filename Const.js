// 맵 빈칸 = 0 움직이고있는도형 =1 테두리 = 2 안움직이는 도형 =3

const HEIGHT = 19
const WIDTH = 14
const SIZE = 20
let board = []

let blank_space = 0
let active_block = 1
let boundary_line =2 
let not_active = 3

let SCORE=0

for (let i = 0; i < HEIGHT; i++) {
  board[i] = []
  for (let j = 0; j < WIDTH; j++)
    board[i][j] = blank_space;
}

for (let j = 0; j < WIDTH; j++) {
  board[18][j] = boundary_line; //테두리는 2 빈칸은 0 
}

for (let i = 0; i < HEIGHT; i++) {
  board[i][0] = boundary_line;
  board[i][1] = boundary_line;
}

for (let i = 0; i < HEIGHT; i++) {
  board[i][12] = boundary_line;
  board[i][13] = boundary_line;
}

function draw_map() {
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++)
      if (board[i][j] == boundary_line)
        image(wall_img, j * SIZE, (i * SIZE),20)
  }
}

function line_clear() {
  let sum = 0;
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (board[i][j] == 3)
        sum++
    }
    if (sum == 10) {
      for (let z = i; z > 0; z--)
        for (let j = 0; j < WIDTH; j++) {
          board[z][j] = board[z - 1][j]
        }
      for (let j = 2; j < WIDTH - 2; j++)
        board[0][j] = 0
      block.center_ypos += 1
      SCORE +=1
    } else {
      sum = 0
    }
    sum = 0
  }
}



const block_O = [
  [null, null, null, null],
  [null, 1, 1, null],
  [null, 1, 1, null],
  [null, null, null, null]
]

const block_I = [
  [null, null, null, null],
  [1, 1, 1, 1],
  [null, null, null, null],
  [null, null, null, null]
]

const block_Z = [
  [null, null, null, null],
  [1, 1, null, null],
  [null, 1, 1, null],
  [null, null, null, null]
]

const block_S = [
  [null, null, null, null],
  [null, null, 1, 1],
  [null, 1, 1, null],
  [null, null, null, null]
]

const block_L = [
  [null, null, null, null],
  [null, 1, null, null],
  [null, 1, null, null],
  [null, 1, 1, null]
]

const block_J = [
  [null, null, null, null],
  [null, null, 1, null],
  [null, null, 1, null],
  [null, 1, 1, null]
]

const block_T = [
  [null, null, null, null],
  [null, 1, null, null],
  [1, 1, 1, null],
  [null, null, null, null]
]