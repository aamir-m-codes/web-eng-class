function changeBGColor() {
  let body = document.querySelector("#bd");
  let btn = document.querySelector("#btn");

  let colors = {
    0: "#d4a373",
    1: "#669bbc",
    2: "#9e2a2b",
    3: "#333d29",
    4: "#8338ec",
  };

  let colorHex = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  let c1 = colorHex[Math.floor(Math.random() * 16)];
  let c2 = colorHex[Math.floor(Math.random() * 16)];
  let c3 = colorHex[Math.floor(Math.random() * 16)];
  let c4 = colorHex[Math.floor(Math.random() * 16)];
  let c5 = colorHex[Math.floor(Math.random() * 16)];
  let c6 = colorHex[Math.floor(Math.random() * 16)];

  body.style.backgroundColor = "#" + c1 + c2 + c3 + c4 + c5 + c6;
}
