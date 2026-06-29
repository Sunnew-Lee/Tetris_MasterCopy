//File name: blocks.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: hyosang.jung
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

var blocks = [];  // make block's xpos and ypos
var subblocks = [];  // check for rotate


const block_O = [
  [null, null, null, null],
  [null, 1, 1, null],
  [null, 1, 1, null],
  [null, null, null, null]
]

const block_I = [
  [null, null, null, null],
 [null, null, null, null],
  [1, 1, 1, 1],
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
 [null, 1, 1, null],
 [1, 1, null, null],
  [null, null, null, null]
]

const block_L = [
  [null, null, null, null],
  [1, 1, 1, null],
  [1, null, null, null],
  [null, null, null, null]
]

const block_J = [
  [null, null, null, null],
  [1, 1, 1, null],
  [null, null, 1, null],
  [null, null, null, null]
]

const block_T = [
  [null, null, null, null],
  [1, 1, 1, null],
  [null, 1, null, null],
  [null, null, null, null]
]

function set_blocks()
{
for (let i = 0; i < block_component_num; i++)
{
  blocks[i] = 
    {
    xpos: 0,
    ypos: 0,
  }
}

for (let i = 0; i < block_component_num; i++) 
{
  subblocks[i] = {
    xpos: 0,
    ypos: 0,
  }
}
}

const BLOCK_SHAPES = {
  3: block_O,
  4: block_I,
  5: block_Z,
  6: block_S,
  7: block_L,
  8: block_J,
  9: block_T
};

function set_random_block()
{
  let index = 0; //  Assign xpos and ypos to each block.
  {
    block_type = next_block_num;
    const shape = BLOCK_SHAPES[block_type];

    for (let i = 0; i < 4; i++)
    {
      for (let j = 0; j < 4; j++)
      {
        if (shape[i][j] == 1)
        {
          blocks[index].xpos = j;
          blocks[index].ypos = i;
          index++;
        }
      }
    }
    for (let i = 0; i < block_component_num; i++)
    {
      blocks[i].xpos += 4;    //make xpos to ceter of board
    }
    index = 0;
  }
  next_block_num = int(random(3, 10));
}