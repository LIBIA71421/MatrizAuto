var auto = {
  dieccion: "N",
  posx: 0,
  posy: 0
}

function mover(m) {
  if(m == "A"){
    auto.posy = auto.posy + 1;
  }
  if(m == "D"){
    auto.dieccion = "E";
  }
  if(m == "I"){
    auto.dieccion = "O";
  }
  return auto.posx.toString() + ',' + auto.posy.toString() + auto.dieccion
}

export default mover;
