let w = 300; 
let grid = [
  ['','',''],
  ['','',''],
  ['','','']
]
let players = ['X','O']
let game_over = false;
let turn = 0;

function reset_grid() {
  grid = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
}

function grid_full() {
  for (let i in grid) {
    for (let j in grid[i]) {
      if (grid[i][j] == '') {
        return false;
      }
    }
  }
  return true;
}

function check(n1,n2,n3,n4,n5,n6) {
  return grid[n1][n2] == grid[n3][n4] && grid[n3][n4] == grid[n5][n6] && grid[n1][n2] != '' 
}

function check_win() {
  return check(0,0,0,1,0,2) || check(1,0,1,1,1,2) || check(2,0,2,1,2,2)
  || check(0,0,1,0,2,0) || check(0,1,1,1,2,1) || check(0,2,1,2,2,2)
  || check(0,0,1,1,2,2) || check(2,0,1,1,0,2);
}

function draw_board() {
  line(0,w,w*3,w);
  line(0,w*2,w*3,w*2);
  line(w,0,w,w*3);
  line(w*2,0,w*2,w*3);
}

function draw_players() {
  for (let i in grid) {
    for (let j in grid[i]) {
       if (grid[i][j] == players[0]) {
           draw_x(i,j);
       } else if (grid[i][j] == players[1]) {
          draw_o(i,j);
       }
    }
  }
}

function draw_o(x,y) {
  let d = w * 0.75;
  circle((w / 2) + (w * x),(w / 2) + (w * y),d);
}

function draw_x(x,y) {
  let pad = w * 0.15;
  
  line((w * x) + pad,
       (w * y) + pad,
       (w * x + w) - pad,
       (w * y + w) - pad);
  
  line((w * x + w) - pad,
       (w * y) + pad,
       (w * x) + pad,
       (w * y + w) - pad);
}

function setup() {
  createCanvas(3 * w, 3 * w);
  noLoop();
}

function draw() {
  background(150,50,255);
  
  stroke(-50);
  strokeWeight(50);
  fill(255,100,100);
  
  draw_board();
  draw_players();
  
  strokeWeight(2);
  textSize(100);
  textAlign(CENTER,CENTER);
  if (check_win()) {
    fill(0,255,0);
    text(`Player ${players[turn]} won!`, w * 1.5, w * 1.5);
    game_over = true;
  } else if (grid_full()) {
    fill(255,0,0);
    text(`CatsGame`, w * 1.5, w * 1.5);
    game_over = true;
  }
}

function mouseClicked() {
  let x = floor(mouseX / w);
  let y = floor(mouseY / w);
  if (!game_over && grid[x][y] == '') {
    if (turn == 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    grid[x][y] = players[turn];
    redraw();
  } else if (game_over) {
    game_over = false;
    reset_grid();
    redraw();
  }
}