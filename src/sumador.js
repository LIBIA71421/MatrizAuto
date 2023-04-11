class Auto{
  constructor(){
    Auto.dieccion = "N"; 
    Auto.posx = 0;
    Auto.posy = 0; 
  }

  mover(m) {
    for(let i=0; i < m.length; i++){

      if(m[i] == "A"){
        Auto.posy = Auto.posy + 1;
      }
      if(m[i] == "D"){
        Auto.dieccion = "E";
      }
      if(m[i] == "I"){
        Auto.dieccion = "O";
      }
    }
    
    return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.dieccion
  }
}

export default Auto;
