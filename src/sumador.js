var auto = {
  dieccion: "N",
  posx: 0,
  posy: 0
}

function mover(m) {
  if(m == "N"){
    auto.posy = auto.posy + 1;
  }
  return auto.posx.toString() + ',' + auto.posy.toString() + auto.dieccion
}

export default mover;
