const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
  // Input Structure = [Name, Capacity, Type]
  
  // Need a loop to go through each Array index (i.e, location)
  let outputArray = [ ]; // Initialize empty array to store outputs
  for (let i = 0; i < stations.length; i++) {
    let checkArray = stations[i]; // Stores the indexed array item
    if (checkArray[1] >= 20 && (checkArray[2] === 'school' || checkArray[2] === 'community centre')) {
      outputArray.push(checkArray[0]);
    }
      
  }
  return outputArray;
};

chooseStations(stations);