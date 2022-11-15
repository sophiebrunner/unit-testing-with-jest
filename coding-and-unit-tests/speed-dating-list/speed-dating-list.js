/* Speed Dating List
Accepts a list of names (array) and should return an nested array of dates. 
Each person on the list should talk to each person in a 1on1.

  const result = speedDatingList([]);
  // []
  const result = speedDatingList(["Peter", "Paul"]);
  // [["Peter", "Paul"]]
  const result = speedDatingList(["Peter", "Paul", "Mary"]);
  // [["Peter", "Paul"], ["Peter", "Mary"], ["Paul", "Mary"]] */

export function speedDatingList(persons) {
  const dates = [];
  for (let i = 0; i < persons.length - 1; i++) {
    for (let j = i + 1; j < persons.length; j++) {
      dates.push([persons[i], persons[j]]);
    }
  }
  return dates;
}
