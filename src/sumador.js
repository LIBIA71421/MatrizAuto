class Auto{ 
  constructor(){
    Auto.dieccion = "N"; 
    Auto.posx = 0;
    Auto.posy = 0; 
  }

  Guia(orientacion){
    if(orientacion == "N"){
      Auto.posy += 1;
    }
    else if(orientacion == "S"){
      Auto.posy -= 1;
    }
    else if(orientacion == "E"){
      Auto.posx += 1;
    }
    else if(orientacion == "O"){
      Auto.posx -= 1;
    }
  }

  chooseD(m){
    let orientacion = ["O","N","E","S"]
    if(m == "A"){
      this.Guia(Auto.dieccion)
    }
    if(m == "D"){
      let cambio = orientacion.indexOf(Auto.dieccion)
      if(cambio == 3){ cambio = -1; }
      Auto.dieccion = orientacion[cambio + 1];
    }
    if(m == "I"){
      let cambio = orientacion.indexOf(Auto.dieccion)
      if(cambio == 0){ cambio = 4; }
      Auto.dieccion = orientacion[cambio - 1];
    }
  }
     
  mover(m){
    for(let i=0; i<m.length; i++){
      this.chooseD(m[i])
      if(Auto.posy < 0 || Auto.posx < 0 || Auto.posy > 9 || Auto.posx > 9){
        return "FUERA DEL MAPA"
      }
    }
    return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.dieccion
  }
} 
export default Auto;
