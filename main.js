console.log('js:loaded')
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's

    //creates a constant oldInventors.
    //then takes the array inventors and filters out any inventor who was born after 1500
    //it then checks the second conditional. If the birth year is below 1600
    //if both are true (&& operator), then it stores the filtered elements in the oldInventors array.
const oldInventors = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600 ) 
// console.log(oldInventors);

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
// Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
const firstAndLast = inventors.map(investor => `${investor.first} ${investor.last}`);
//console.log(firstAndLast)

// Array.prototype.sort()
// 3. Sort the inventors by birth date (year property), in ascending order
const sortByDate = inventors.sort((a,b) => a.year - b.year);
//console.log(sortByDate);


// Array.prototype.find()
// 4. Find the inventor object with the first name of 'Ada'

const firstNameAda = inventors.find(inventor => inventor.first === 'Ada');
//console.log(firstNameAda);


// Array.prototype.reduce()
// 5. How many years did all the inventors live?

const totalYears = inventors.reduce((acc, inventor) => {
    return acc + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator

  const formattedNames = people.map(person => {
    const [lastName, firstName] = person.split(',');
    return `${firstName} ${lastName}`
  })

  console.log(formattedNames);

