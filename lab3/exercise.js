var year = 3;

if (year == 1) {
  document.write("You are in year 1");
} else if (year == 2) {
  document.write("You are in year 2");
} else {
  document.write("You are in year 3");
}

switch (year) {
  case 1:
    document.write("You are in year 1");

    break;
  case 2:
    document.write("You are in year 2");

    break;

  default:
    document.write("You are in year 3");

    break;
}
for (var i = 1; i <= 20; i++) {
  document.write(i + " ");
}
var i = 1;
while (i <= 20) {
  document.write(i + " ");
  i++;
}
