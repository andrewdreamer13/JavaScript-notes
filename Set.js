// Set - colection with unic values
// Accepts any iterable object (array, string, Map.keys(), etc.)

// creating Set()

const mySet = new Set(); // пустой
const numbers = new Set([1, 2, 3]); // с начальными значениями


// using a set
//Removing duplicates from an array

const arr = ['a', 'b', 'a', 'c'];
const unique = [...new Set(arr)]; // → ['a', 'b', 'c']

// Storing unique states

const visited = new Set();
visited.add('home');
visited.add('about');
visited.has('home'); // → true

// Filtering by uniqueness

const users = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 1, name: 'A' }
];

const seen = new Set();
const deduped = users.filter((user) => {
  if (seen.has(user.id)) return false;
  seen.add(user.id);
  return true;
});


// Уникальные значения, фильтрация, выбор
export const SelectionSet = () => {
  const set = new Set();

  return {
    add: (id) => set.add(id),
    remove: (id) => set.delete(id),
    has: (id) => set.has(id),
    toggle: (id) => set.has(id) ? set.delete(id) : set.add(id),
    clear: () => set.clear(),
    values: () => [...set],
    size: () => set.size,
  };
};

// weakSet() - object storage