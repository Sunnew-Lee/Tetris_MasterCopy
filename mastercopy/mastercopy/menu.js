let i = 0;
let b = 0;
let c = 0;
let a = true;
let type = [1, 2, 3, 4];

function menu() {
  if (i == 0) {
    image(licence, 0, 0, width, height);
    if (frameCount > 5 * 60) {
      i++;
    }

  } else if (i == 1) {
    image(title, 0, 0, width, height);
    textFont(font);
    textSize(50);
    if (a) {
      text('~', width * 0.066, height * 0.8271);
    } else {
      text('~', width * 0.56, height * 0.8271);
    }
  } else if (i == 2) {
    image(gtmt, 0, 0, width, height);
    textFont(font);
    textSize(47);
    switch (b) {
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
    if (a) {
      text('a-type', width * 0.141, height / 3 - 10);
    } else {
      text('b-type', width * 5 / 9 + 3, height / 3 - 10);
    }
  } else if (i == 3) {
    image(gtmt, 0, 0, width, height);
    if (a) {
      text('a-type', width * 0.141, height / 3 - 10);
    } else {
      text('b-type', width * 5 / 9 + 3, height / 3 - 10);
    }
    switch (b) {
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
  } else if (i == 4) {
    image(level, 0, 0, width, height);
    switch (c) {
      case 0:
        text('0', width / 4 - 3, height / 3 + 34);
        break;
      case 1:
        text('1', width / 4 - 3 + 92, height / 3 + 34);
        break;
      case 2:
        text('2', width / 4 - 3 + 92 + 93, height / 3 + 34);
        break;
      case 3:
        text('3', width / 4 - 3 + 92 + 93 + 94, height / 3 + 34);
        break;
      case 4:
        text('4', width / 4 - 3 + 92 + 93 + 94 + 95, height / 3 + 34);
        break;
      case 5:
        text('5', width / 4 - 3, height / 3 + 34 + 95);
        break;
      case 6:
        text('6', width / 4 - 3 + 92, height / 3 + 34 + 95);
        break;
      case 7:
        text('7', width / 4 - 3 + 92 + 93, height / 3 + 34 + 95);
        break;
      case 8:
        text('8', width / 4 - 3 + 92 + 93 + 94, height / 3 + 34 + 95);
        break;
      case 9:
        text('9', width / 4 - 3 + 92 + 93 + 94 + 95, height / 3 + 34 + 95);
        break;
    }
  } else {
    background(0);
  }
}
function keyPressed() {

  if (i == 4) {
    if (keyCode == 90) {
      i--;
    } else if (keyCode == 88 || keyCode == 13) {
      i++;
    }
    if (c >= 0 && c <= 9) {
      if (keyCode == RIGHT_ARROW) {
        if (c < 9) {
          c++;
        }
      } else if (keyCode == LEFT_ARROW) {
        if (c > 0) {
          c--;
        }
      } else if (keyCode == UP_ARROW) {
        if (c > 4) {
          c -= 5;
        }
      } else if (keyCode == DOWN_ARROW) {
        if (c < 5) {
          c += 5;
        }
      }
    }
  }
  if (i == 3) {
    if (keyCode == 90) {
      i--;
    } else if (keyCode == 88 || keyCode == 13) {
      i++;
    } else if (b >= 0 && b <= 3) {
      if (keyCode == RIGHT_ARROW) {
        if (b < 3) {
          b++;
        }
      } else if (keyCode == LEFT_ARROW) {
        if (b > 0) {
          b--;
        }
      } else if (keyCode == UP_ARROW) {
        if (b > 1) {
          b -= 2;
        }
      } else if (keyCode == DOWN_ARROW) {
        if (b < 2) {
          b += 2;
        }
      }
    }
  }
  if (i == 2) {
    if (a) {
      if (keyCode == 13) {
        i += 2;
      }
    }
    if (keyCode == RIGHT_ARROW) {
      a = false;
    } else if (keyCode == LEFT_ARROW) {
      a = true;
    }
    if (a == false) {
      if (keyCode == 13 || keyCode == 88) {
        a = true;
      }
    }
    if (a) {
      if (keyCode == 88) {
        i++;
      }
    }
  } else if (i == 1) {
    if (a) {
      if (keyCode == 13) {
        i++;
      }
    }

    if (keyCode == RIGHT_ARROW) {
      a = false;
    } else if (keyCode == LEFT_ARROW) {
      a = true;
    }
    if (a == false) {
      if (keyCode == 13) {
        a = true;

      }
    }
  }

}