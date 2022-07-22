// console.log('Hello hi 🌺')

const foods = [
  'clams',
  'pizza',
  'peanut butter',
  'salmon',
  'cheese',
  'anchovies',
  'pretzels',
  'avocados',
]

// Print out to the console a sentence that uses each food, like
// "Would you like some ___?"

// Do I need to use an index?
// console.log('Would you like some ' + foods[2] + '?')

for (let i = 0; i < foods.length; i++) {
  // console.log('🥝 The value of i is now: ', i)
  console.log('Would you like some ' + foods[i] + '?')
}

for (let oneItem of foods) {
  // console.log(oneItem)
  console.log('Would you like some ' + oneItem + '?')
}
