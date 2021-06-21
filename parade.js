const finalPosition = function(moves) {
  let x = 0; // Original positions
  let y = 0;
  for (let i = 0; i < moves.length; i++) { // Loops through array
    let direction = moves[i]; // Captures direction
    switch (direction) {
    case 'north' :
      y = y + 1;
      break;
    case 'south' :
      y = y - 1;
      break;
    case 'west' :
      x = x - 1;
      break;
    case 'east' :
      x = x + 1;
      break;
    }
  }
  let xY = [x,y];
  return (xY);
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

finalPosition(moves);