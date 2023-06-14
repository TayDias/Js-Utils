let input = "willianwallacce11@gmail.com"

const regex = /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/igm
var patt = new RegExp(regex)

incorretOption = !patt.test(input);
optionChosed = incorretOption ? `sem@email.com` : input

console.log(incorretOption)
console.log(optionChosed)
