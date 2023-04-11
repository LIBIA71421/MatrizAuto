class Auto{ 
  constructor(){
    Auto.dieccion = "N"; 
    Auto.posx = 0;
    Auto.posy = 0; 
  }

  chooseD(m){
    if(m == "A"){
      if(Auto.dieccion == "N"){
        Auto.posy = Auto.posy + 1;
      }
      else{
        Auto.posx = Auto.posx + 1;
      }
    }
    if(m == "D"){
          Auto.dieccion = "E";
    }
    if(m == "I"){
      Auto.dieccion = "O";
    }
  }
     
  mover(m){
    for(let i=0; i<m.length; i++){
      this.chooseD(m[i])
    }
    return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.dieccion
  }
} 
export default Auto;
