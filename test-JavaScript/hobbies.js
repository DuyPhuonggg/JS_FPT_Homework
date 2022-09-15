// Implement the findAllHobbyists function that takes a hobby, and an object consisting of peoples names mapped to their respective hobbies.
// The function should return an Array containing the names of the people (in any order) that enjoy the hobby.
// For example, the following code should display the name 'Chad'.
// var hobbies = {
//   "Steve": ['Fashion', 'Piano', 'Reading'],
//   "Patty": ['Drama', 'Magic', 'Pets'],
//   "Chad": ['Puzzles', 'Pets', 'Yoga']
// };

// console.log(findAllHobbyists('Yoga', hobbies));

const hobbies = {
  "Steve": ['Fashion', 'Piano', 'Reading'],
  "Patty": ['Drama', 'Magic', 'Pets'],
  "Chad": ['Puzzles', 'Pets', 'Yoga'],
  "Steve2": ['Fashion', 'Yoga', 'Reading'],
  "Steve3": ['Fashion', 'Piano', 'Reading'],
  "Steve4": ['Fashion', 'Yoga', 'Reading'],
  "Steve5": ['Fashion', 'Piano', 'Reading'],
};

function findAllHobbyists(item,object) {
    //takes array list name
    const keys = Object.keys(object);
    
    let listName = [];
    //take array hobbies for each name
    for(const key of keys) {
        const values = Object.values(object[key]);
        // return name if each element equal item
        values.forEach(v => {
            if(v === item) listName.push(key);
        })
    }
    return listName;
}

const a = findAllHobbyists('Yoga',hobbies);
console.log(a);
