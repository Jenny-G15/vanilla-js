class Contador {
     
  constructor(valor) {
       this.valor=valor
       this.valor= 0
   }
  // Inserte el código aquí
  siguiente(){
    this.valor++
    return this.valor
  }
}

// Inserte el código aquí

let instancia = new Contador()
console.log(instancia.siguiente());



//las clases son la estructura principal , que tienen objetos o propiedades descriptivas 
// y tienen un metodo o funcion de ejecucion , todo se debe hacer dentro de la clase 
// las variables nuevas se hacen fuera de la clase y son para ejecutar las indicaciones dentro de la clase
// la clase es contador (mi estructura base)
// el constructor es el objeto , que da valor o descripcion 
// siguiente es el metodo o la funcion con la que traigo las partes o las llamo 
// la variable declarada fuera de la clase es la ejecuta la operacion 
