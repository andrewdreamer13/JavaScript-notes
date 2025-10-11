// Map - it is a collection of key → value pairs
// Map - is an associative collection where the key can be anything
// Allows using any type as keys (including objects and functions)
// Preserves the order of addition
// Has convenient methods: set, get, has, delete, clear
// visually it looks like an array of arrays, but Map is not an array

const map = new Map();

// set
map.set('name', 'Andrew');
map.set(42, 'answer');
map.set({id: 1}, 'object');

//  The curly braces {} are not an object, but simply a way to show the contents
console.log(map); // {'name' => 'Andrew', 42 => 'answer', {…} => 'object'}

// get
map.get('name');      // → 'Andrew'
map.get(42);          // → 'answer'

// has
map.has('name');      // → true

// delete
map.delete(42);

// cycle forEach
map.forEach((value, key, map) => {
  console.log(key, value);
});

// cycle for...of

const map2 = new Map([
  ['a', 1],
  ['b', 2]
]);

for (const [key, value] of map2) {
  console.log(key, value);
}

// Creating Map from Object by using Object.entries()

const obj = {
  userName: 'Andrew',
  userPasword: '13666'
 };
const entries = Object.entries(obj);

console.log(entries);

const mapFromObj = new Map(entries);
console.log(mapFromObj);

// back to Object from Map

const objFromMap = Object.fromEntries(mapFromObj);
console.log(objFromMap); // {userName: 'Andrew', userPasword: '13666'}




// Поверхностное клонирование Map

// Копирует структуру `Map`, но **не копирует вложенные объекты** — они остаются общими.

// 1. Через конструктор


const original = new Map([['a', { x: 1 }]]);
const clone = new Map(original);

// Ключи и значения копируются по ссылке  
clone.get('a') === original.get('a'); // → `true`

// 2. Через `Array.from()` То же, что `new Map(original)` Можно вставить промежуточную обработку

const clone = new Map(Array.from(original));

// 3. Через `for...of` Гибкость: можно фильтровать, логировать, трансформировать  

const clone = new Map();
for (const [key, value] of original) {
  clone.set(key, value);
}

// 🛡 Глубокое клонирование `Map`

// Копирует **и структуру**, и **вложенные объекты**, создавая полную независимость.

// 1. Через `structuredClone()` (встроенный метод)  Работает с большинством типов: объекты, массивы, даты  
//  Ключи остаются по ссылке (если они объекты), значения — независимы

const deepClone = new Map(
  Array.from(original, ([key, value]) => [key, structuredClone(value)])
);

// 2. Через JSON (если значения сериализуемы)
// Подходит для простых объектов 
//  Не работает с функциями, `Map`, `Set`, `Date`, `undefined`

const deepClone = new Map(
  Array.from(original, ([key, value]) => [key, JSON.parse(JSON.stringify(value))])
);
  
// 3. Через кастомную рекурсивную функцию. Полный контроль
// Подходит для вложенных `Map`, массивов, объектов 

function deepCopyValue(value) {
  if (value instanceof Map) {
    return new Map(Array.from(value, ([k, v]) => [k, deepCopyValue(v)]));
  }
  if (Array.isArray(value)) {
    return value.map(deepCopyValue);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, deepCopyValue(v)])
    );
  }
  return value;
}

const deepClone = new Map(
  Array.from(original, ([key, value]) => [key, deepCopyValue(value)])
);

// Кэширование вычислений по объекту
export const ObjectCacheMap = () => {
  const map = new Map();

  return {
    get: (obj) => map.get(obj),
    set: (obj, value) => map.set(obj, value),
    has: (obj) => map.has(obj),
    delete: (obj) => map.delete(obj),
    clear: () => map.clear(),
  };
};

