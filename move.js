//File name: move.js 
//Project name: TETRIS 
//The course name:  GAM100 
//The term:  Fall 2020
//Author: sunwoo.lee(rotate) , hyosang.jung(block move)
//Copyright info:  “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

var rotate_z_num = 0; // check I,S,Z block rotate.


function is_down_blocked()  // check down collision
{
  for (let i = 0; i < block_component_num; i++)
  {
    if (board[(blocks[i].ypos) + 1][blocks[i].xpos] === 2 || (board[(blocks[i].ypos) + 1][blocks[i].xpos] > 9 ))
    {
      return true;
    }
  }
  return false;
}

function go_down()   
{
  if (is_down_blocked() === false)   
  {
    for (let i = block_component_num - 1; i >= 0; i--) 
    {
      board[blocks[i].ypos][blocks[i].xpos] = 0;
      blocks[i].ypos += 1;
    }
    for (let i = block_component_num - 1; i >= 0; i--) 
    {
      board[(blocks[i].ypos)][blocks[i].xpos] = block_type;
    }
  } 
  else if (is_down_blocked() === true)
  {
    for (let i = block_component_num - 1; i >= 0; i--) 
    {
      board[blocks[i].ypos][blocks[i].xpos] =block_type+7;
    }
    stop = true;
  }
}

function is_left_blocked() //check left collision
{
  for (let i = 0; i < block_component_num; i++) 
  {
    if (board[(blocks[i].ypos)][blocks[i].xpos - 1] === 2 || board[(blocks[i].ypos)][blocks[i].xpos - 1] >= 10)
    {
      return true;
    }
  }
  return false;
}

function go_left() {
  if (is_left_blocked() === false) 
  {
    move_sound.play();
    
    for (let i = 0; i < block_component_num; i++)
    {
      board[blocks[i].ypos][blocks[i].xpos] = 0;
      blocks[i].xpos -= 1;
    }
    for (let i = 0; i < block_component_num; i++)
      {
      board[(blocks[i].ypos)][blocks[i].xpos] = block_type;
      }
  }
}

function is_right_blocked()   // check right collision
{
  for (let i = 0; i < block_component_num; i++) 
  {
    if (board[(blocks[i].ypos)][blocks[i].xpos + 1] === 2 || board[(blocks[i].ypos)][blocks[i].xpos + 1] >= 10)
    {
      return true;
    }
  }
  return false;
}

function go_right() {

  if (is_right_blocked() === false) {
    move_sound.play();
    for (let i = block_component_num - 1; i >= 0; i--) {
      board[blocks[i].ypos][blocks[i].xpos] = 0;
      blocks[i].xpos += 1;
    }
    for (let i = block_component_num - 1; i >= 0; i--)
      board[(blocks[i].ypos)][blocks[i].xpos] = block_type;
  }
}



function is_rotate_able_x() {
  let ptx;
  let pty;
  
  for (let u = 0; u < block_component_num; u++) 
  {
    subblocks[u].xpos = blocks[u].xpos;
    subblocks[u].ypos = blocks[u].ypos;
  }
  if(block_type !=6)    // blocks except block_S
  {
      ptx = blocks[1].xpos;
      pty = blocks[1].ypos;
  }
  if(block_type ==6)    // block_S has different base point
    {
       ptx = blocks[0].xpos;
       pty = blocks[0].ypos;
    }
  let temp;
  for (let u = 0; u < block_component_num; u++) 
  {
    subblocks[u].xpos -= ptx;
    subblocks[u].ypos -= pty;
    temp = subblocks[u].xpos;
    subblocks[u].xpos = subblocks[u].ypos * (-1);
    subblocks[u].ypos = temp * 1;
    subblocks[u].xpos += ptx;
    subblocks[u].ypos += pty;
    if (board[subblocks[u].ypos][subblocks[u].xpos] >9 || board[subblocks[u].ypos][subblocks[u].xpos] === 2) 
    {
      return false;
    }
  }
  return true;
}


function rotate_block_x()   //// rotate clockwise
{
    let ptx = blocks[1].xpos;
    let pty = blocks[1].ypos;
    let temp;
  
  if(block_type ==4 || block_type ==5 || block_type ==6)  // I,Z,S blocks have 2 rotations
    {
      rotate_block_z();
    }
  
  else
  {
    if (is_rotate_able_x() === true && block_type != 3) // O block don't rotate
  { 
    rotate_sound.play();
      for (let u = 0; u < block_component_num; u++) {
      {
        board[(blocks[u].ypos)][blocks[u].xpos] = 0;
        blocks[u].xpos -= ptx;
        blocks[u].ypos -= pty;
        temp = blocks[u].xpos;
        blocks[u].xpos = blocks[u].ypos * (-1);
        blocks[u].ypos = temp * 1;
        blocks[u].xpos += ptx;
        blocks[u].ypos += pty;
      }
    }
    for (let u = 0; u < block_component_num; u++)
      board[(blocks[u].ypos)][blocks[u].xpos] = block_type;
  }
  }
}


function is_rotate_able_z() 
{
  let ptx;
  let pty;
  
  for (let u = 0; u < block_component_num; u++) 
  {
    subblocks[u].xpos = blocks[u].xpos;
    subblocks[u].ypos = blocks[u].ypos;
  }
  if(block_type !=6)
  {
       ptx = blocks[1].xpos;
       pty = blocks[1].ypos;
  }
  if(block_type ==6)   //s block has different base point
    {
       ptx = blocks[0].xpos;
       pty = blocks[0].ypos;
    }
  let temp;
  for (let u = 0; u < block_component_num; u++) 
  {
    subblocks[u].xpos -= ptx;
    subblocks[u].ypos -= pty;
    temp = subblocks[u].xpos;
    subblocks[u].xpos = subblocks[u].ypos * (1);
    subblocks[u].ypos = temp * (-1);
    subblocks[u].xpos += ptx;
    subblocks[u].ypos += pty;
    if (board[subblocks[u].ypos][subblocks[u].xpos] > 9 || board[subblocks[u].ypos][subblocks[u].xpos] === 2)
    {
      return false;
    }
  }
  return true;
}


function rotate_block_z() {  // rotate conter clockwise
  
  let temp;
  let ptx;
  let pty;
  
  if(block_type !=6)
  {
       ptx = blocks[1].xpos;
       pty = blocks[1].ypos;
  }
  if(block_type ==6)   //s block has different base point
    {
       ptx = blocks[0].xpos;
       pty = blocks[0].ypos;
    }
  
  if( (block_type==4 || block_type ==5 || block_type ==6 ) && rotate_z_num==1)
       {
        if(is_rotate_able_x()==true )
       {
          rotate_sound.play();
        for (let u = 0; u < block_component_num; u++)
        {
        board[(blocks[u].ypos)][blocks[u].xpos] = 0;
        blocks[u].xpos -= ptx;
        blocks[u].ypos -= pty;
        temp = blocks[u].xpos;
        blocks[u].xpos = blocks[u].ypos * (-1);
        blocks[u].ypos = temp * 1;
        blocks[u].xpos += ptx;
        blocks[u].ypos += pty;
        }
        rotate_z_num=0;
       
         for (let u = 0; u < block_component_num; u++)
         {
           board[(blocks[u].ypos)][blocks[u].xpos] = block_type;
         }
       }
       }
  else
    {
      
    if (is_rotate_able_z() === true && block_type != 3) 
     {
        rotate_sound.play();
        for (let u = 0; u < block_component_num; u++) 
      {
        board[(blocks[u].ypos)][blocks[u].xpos] = 0;
        blocks[u].xpos -= ptx;
        blocks[u].ypos -= pty;
        temp = blocks[u].xpos;
        blocks[u].xpos = blocks[u].ypos * (1);
        blocks[u].ypos = temp * (-1);
        blocks[u].xpos += ptx;
        blocks[u].ypos += pty;
        rotate_z_num = 1;
      }
      }

      for (let u = 0; u < block_component_num; u++)
      board[(blocks[u].ypos)][blocks[u].xpos] = block_type;
      
    }
}
