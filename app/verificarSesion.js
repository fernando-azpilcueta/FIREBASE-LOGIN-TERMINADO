const botonesSesionCerrada = $(".sesionCerrada");
const botonesSesionIniciada = $(".sesionIniciada");


export function verificarSesion(user) {
    if (user) {
      botonesSesionIniciada.css("display", "block");
      botonesSesionCerrada.css("display", "none");
    } else {
      botonesSesionIniciada.css("display", "none");
      botonesSesionCerrada.css("display", "block");
    }
  }