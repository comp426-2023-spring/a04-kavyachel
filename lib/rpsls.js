//Rules for RPSLS
const RULES = {
  'rock': {
      'rock': 'tie',
      'paper': 'lose',
      'scissors': 'win',
      'lizard': 'win',
      'spock': 'lose'
  },
  'paper': {
      'rock': 'win',
      'paper': 'tie', 
      'scissors': 'lose',
      'lizard': 'lose',
      'spock': 'win'
  },
  'scissors': {
      'rock': 'lose',
      'paper': 'win',
      'scissors': 'tie',
      'lizard': 'win',
      'spock': 'lose'
  },
  'lizard': {
      'rock': 'lose',
      'paper': 'win',
      'scissors': 'lose',
      'lizard': 'tie',
      'spock': 'win'
  },
  'spock': {
      'rock': 'win',
      'paper': 'lose',
      'scissors': 'win',
      'lizard': 'lose',
      'spock': 'tie'
  }
};

//RPS function
export function rps(play) {
  const options = ['rock', 'paper', 'scissors'];
  //If move is undefined, pick a random option
  if (play === undefined)
      return {player: options[Math.floor(Math.random() * 3)]};

  //if move is not in options list, throw error.
  play = play.toLowerCase();
  if (!options.includes(play)) {
    console.error(play + " is out of range");
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    process.exit(1);
  }
  //opponents move is random
  var opponent_play = options[Math.floor(Math.random() * 3)];
  return {player: play, opponent: opponent_play, result: RULES[play][opponent_play]}
}

//RPSLS function
export function rpsls(play) {
  const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  //if play is undefined, pick a random play.
  if (play === undefined)
      return {player: options[Math.floor(Math.random() * 5)]};

  //if play not in options list, out of range.
  play = play.toLowerCase();
  if (!options.includes(play)) {
      console.error(play + ' is out of range.');
      console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock SMOOSHES Lizard
      - Lizard POISONS Spock
      - Spock SMASHES Scissors
      - Scissors DECAPITATES Lizard
      - Lizard EATS Paper
      - Paper DISPROVES Spock
      - Spock VAPORIZES Rock
      - Rock CRUSHES Scissors`);
      process.exit(1);
  }

  var opponent_play = options[Math.floor(Math.random() * 5)];
  return {player: play, opponent: opponent_play, result: RULES[play][opponent_play]}
}