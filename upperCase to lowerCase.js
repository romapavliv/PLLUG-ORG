function oddOrEven(str) {
  let newArr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] !== str[i].toUpperCase()
      ? newArr = newArr + str[i].toUpperCase()
      : newArr = newArr + str[i].toLowerCase();
  }
  return newArr;
}

console.log(oddOrEven("iT`S jAVA sCRIPT =)"));
