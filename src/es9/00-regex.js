const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2015-01-01');
console.table(match);