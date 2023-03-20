// Code your solution here
/*scribe('findMatching()', function () {
    it('returns all drivers that match the passed in name', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
      */

      function findMatching(drivers, str){
        return drivers.filter(i => i.toLowerCase() == str.toLowerCase());
    }


    // accesses the data structure to check if name matches:

    function matchName(driver, str){
        let drivers = driver.filter(i => i.name == str)
        return drivers;
    }
//This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(driverArray, str){
    let deres = driverArray.filter(i =>{ 
        let letters = ""
        for (let letter = 0; letter < str.length; letter++){
            letters += i[letter];
        }
        return letters == str
        })
    return deres

    }