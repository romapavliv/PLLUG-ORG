function strCase(str) {
  let newArr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] !== str[i].toUpperCase()
      ? newArr = newArr + str[i].toUpperCase()
      : newArr = newArr + str[i].toLowerCase();
  }
  return newArr;
}

console.log(strCase("iT`S jAVA sCRIPT =)"));

Завдання виконано.
