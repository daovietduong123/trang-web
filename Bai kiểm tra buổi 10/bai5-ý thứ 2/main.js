let day = parseInt(prompt());
let month = parseInt(prompt());
let year = parseInt(prompt());

day = day + 1;

if (
  day > 31 &&
  (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
) {
  day = 1;
  month = month + 1;
} else if (month == 2) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    if (day > 29) {
      day = 1;
      month = month + 1;
    }
  } else {
    if (day > 28) {
      day = 1;
      month = month + 1;
    }
  }
} else {
  if (day > 30) {
    day = 1;
    month = month + 1;
  }
}

if (month > 12) {
  month = 1;
  year = year + 1;
}

console.log(day, month, year);
