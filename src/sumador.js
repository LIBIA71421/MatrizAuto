class Auto{ 
  constructor(){
    Auto.dieccion = "N"; 
    Auto.posx = 0;
    Auto.posy = 0; 
  }

  chooseD(m){
    let orientacion = ["O","N","E","S"]
    if(m == "A"){
      if(Auto.dieccion == "N"){
        Auto.posy += 1;
      }
      else if(Auto.dieccion == "S"){
        Auto.posy -= 1;
      }
      else if(Auto.dieccion == "E"){
        Auto.posx += 1;
      }
      else if(Auto.dieccion == "O"){
        Auto.posx -= 1;
      }
    }
    if(m == "D"){
      let cambio = orientacion.indexOf(Auto.dieccion)
      Auto.dieccion = orientacion[cambio + 1];
    }
    if(m == "I"){
      let cambio = orientacion.indexOf(Auto.dieccion)
      Auto.dieccion = orientacion[cambio - 1];
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
