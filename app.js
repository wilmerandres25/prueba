document.body.onload = function(){
  class Mensaje {
    static Imprimir(){
      return "Hola Mundo";
    }
  }

  var action = function(){
    document.getElementById('mensaje').innerHTML = Mensaje.Imprimir();
  }

  document.getElementById('boton').addEventListener("click", action);
}
