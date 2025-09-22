// Intl object

// 1. Intl.NumberFormat
//This constructor helps you format numbers, including currency, percentages, and plain numbers:

// 1 variant
let number = 1234567.89;
let formattedNumber = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
console.log(formattedNumber); // Outputs: $1,234,567.89

// 2 variant
const numberFormatOptions = {
  style: 'currency', // 'decimal', 'currency', 'percent', 'unit'
  currency: 'USD', // Specify a currency code, e.g., 'EUR', 'JPY'
  currencyDisplay: 'symbol', // 'symbol', 'narrowSymbol', 'code', 'name'
  currencySign: 'standard', // 'standard', 'accounting'
  useGrouping: true, // `true` or `false`
  minimumIntegerDigits: 1, // 1 to 21
  minimumFractionDigits: 2, // 0 to 20
  maximumFractionDigits: 2, // 0 to 20
  minimumSignificantDigits: 1, // 1 to 21
  maximumSignificantDigits: 21, // 1 to 21
  notation: 'standard', // 'standard', 'scientific', 'engineering', 'compact'
  compactDisplay: 'long' // 'short', 'long'
};
let numberFormatter = new Intl.NumberFormat('en-US', numberFormatOptions);
console.log(numberFormatter.format(1234567.89)); // Outputs: $1,234,567.89


// 2. Intl.DateTimeFormat
// This constructor is used to format dates and times:

// 1 variant
let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
console.log(formattedDate); // Outputs: 7 November 2024

// 2 variant
const dateTimeFormatOptions = {
  weekday: 'long', // 'narrow', 'short', 'long'
  era: 'long', // 'narrow', 'short', 'long'
  year: 'numeric', // 'numeric', '2-digit'
  month: 'long', // 'numeric', '2-digit', 'narrow', 'short', 'long'
  day: 'numeric', // 'numeric', '2-digit'
  hour: 'numeric', // 'numeric', '2-digit'
  minute: 'numeric', // 'numeric', '2-digit'
  second: 'numeric', // 'numeric', '2-digit'
  timeZoneName: 'long', // 'short', 'long'
  hour12: true, // `true` or `false`
  timeZone: 'Europe/London', // Specify a time zone, e.g., 'UTC', 'Europe/London'
  localeMatcher: 'best fit' // 'best fit', 'lookup'
};
let dateFormatter = new Intl.DateTimeFormat('en-GB', dateTimeFormatOptions);
console.log(dateFormatter.format(new Date())); // Outputs: Thursday, November 6, 2024, 2:46:15 PM EST (example)


// 3. Intl.Collator
// This constructor provides language-sensitive string comparison:

// 1 variant
let collator1 = new Intl.Collator('de', { sensitivity: 'base' });
console.log(collator1.compare('ä', 'a')); // Outputs: 1 (which means ä > a in German)

// 2 variant
const collatorOptions = {
  usage: 'sort', // 'sort', 'search'
  sensitivity: 'base', // 'base', 'accent', 'case', 'variant'
  ignorePunctuation: true, // `true` or `false`
  numeric: false, // `true` or `false`
  caseFirst: 'upper', // 'upper', 'lower', 'false'
  localeMatcher: 'best fit' // 'best fit', 'lookup'
};
let collator2 = new Intl.Collator('de-DE', collatorOptions);
console.log(collator2.compare('ä', 'a')); // Outputs: 1 (ä is greater than a in German)


// 4. Intl.RelativeTimeFormat
// This constructor helps format relative time (e.g., "in 1 day", "3 weeks ago"):

// 1 variant
let rtf1 = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf1.format(-1, 'day')); // Outputs: yesterday
console.log(rtf1.format(1, 'day'));  // Outputs: tomorrow

// 2 variant
const relativeTimeFormatOptions = {
  numeric: 'auto', // 'always', 'auto'
  style: 'long' // 'long', 'short', 'narrow'
};
let rtf2 = new Intl.RelativeTimeFormat('en-US', relativeTimeFormatOptions);
console.log(rtf2.format(-1, 'day')); // Outputs: yesterday
console.log(rtf2.format(1, 'day'));  // Outputs: tomorrow

// Example with number of days until the end of the sale

const daysLeftOutput = document.querySelector("#sale-days");

function countDaysLeft () {

  const currentDay = new Date();
  const endOfSale = new Date('2024.12.23');
  const diff = Math.floor((endOfSale - currentDay) / 1000 / 60 / 60 / 24);

  const daysLeft  = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  console.log(daysLeft.format(diff, 'day'));
  daysLeftOutput.innerHTML = daysLeft.format(diff, 'day');
  
}
countDaysLeft ();

// 5. Intl.ListFormat
// This constructor formats a list of items according to locale-specific conventions:

// 1 variant
let list = ['Apple', 'Orange', 'Banana'];
let formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
console.log(formatter.format(list)); // Outputs: Apple, Orange, and Banana

// 2 variant
const listFormatOptions = {
  localeMatcher: 'best fit', // 'best fit', 'lookup'
  type: 'disjunction', // 'conjunction', 'disjunction', 'unit'
  style: 'long' // 'long', 'short', 'narrow'
};
let listFormatter = new Intl.ListFormat('en-US', listFormatOptions);
console.log(listFormatter.format(['Apple', 'Orange', 'Banana'])); // Outputs: Apple, Orange, or Banana

// 6. Intl.PluralRules
// This constructor determines the plural form of a number:

// 1 variant
let pr = new Intl.PluralRules('en-GB');
console.log(pr.select(0)); // Outputs: other
console.log(pr.select(1)); // Outputs: one
console.log(pr.select(2)); // Outputs: other

// 2 variant
const pluralRulesOptions = {
  type: 'cardinal', // 'cardinal', 'ordinal'
  localeMatcher: 'best fit' // 'best fit', 'lookup'
};
let pluralRules = new Intl.PluralRules('en-US', pluralRulesOptions);
console.log(pluralRules.select(0)); // Outputs: other
console.log(pluralRules.select(1)); // Outputs: one
console.log(pluralRules.select(2)); // Outputs: other
