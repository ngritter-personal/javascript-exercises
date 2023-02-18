const findTheOldest = function(people) {

    const oldest = people.sort(function(a,b) {
        let todayYear = new Date().getFullYear();
        let lastGuyBirth = a.yearOfBirth;
        let nextGuyBirth = b.yearOfBirth;
        let lastGuyDeath;
        let nextGuyDeath;
        
        if (a.yearOfDeath === undefined) {
            lastGuyDeath = todayYear;
        } else {
            lastGuyDeath = a.yearOfDeath;
        };

        if (b.yearOfDeath === undefined) {
            nextGuyDeath = todayYear;
        } else {
            nextGuyDeath = b.yearOfDeath;
        }
        
        const lastGuy = lastGuyDeath - lastGuyBirth;
        const nextGuy = nextGuyDeath - nextGuyBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];
    
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
