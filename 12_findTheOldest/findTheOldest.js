function findTheOldest(people) { 
    const stillLive = new Date().getFullYear();
    return people.reduce((oldestPerson, currentPerson) => { 
        const oldestAge = (oldestPerson.yearOfDeath || stillLive ) - oldestPerson.yearOfBirth; const currentAge = (currentPerson.yearOfDeath || stillLive) - currentPerson.yearOfBirth; 
        
        return currentAge > oldestAge ? currentPerson : oldestPerson; });


    }
// Do not edit below this line
module.exports = findTheOldest;
