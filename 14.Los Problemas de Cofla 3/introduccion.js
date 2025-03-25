class Moviles{
  constructor(color, peso, resPan, resCam, ram){
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = resPan;
    this.resolucionDeCamara = resCam;
    this.memoriaRam = ram;
    this.encendido = false;
  }
  presionarBotonOnOff(){
    if (this.encendido == false){
      alert('El móvil está encendido');
      this.encendido = true;
    } else {
      alert('El móvil está apagado');
      this.encendido = false;
    }
  }

  reiniciar(){
    if (this.encendido == true){
      alert('reiniciando el móvil');
    }else {
      alert('El móvil está apagado, no se puede reiniciar');
    }
  }

  hacerFoto(){
    alert(`Foto tomada con una resolución de: ${this.resolucionDeCamara}`);
  }

  grabarVideo(){
    alert(`Video grabado con una resolución de: ${this.resolucionDeCamara}`);
  }

  showInfo(){
    return `
    Color : <b>${this.color}</b></br>
    Peso : <b>${this.peso}</b></br>
    Tamaño Pantalla : <b>${this.resolucionDePantalla}</b></br>
    Resolución Cámara: <b>${this.resolucionDeCamara}</b></br>
    Resolución Vídeo : <b>${this.resolucionDeCamara}</b></br>
    Memoria RAM : <b>${this.memoriaRam}</b></br>
    `
  }

}

class MovilesGamaAlta extends Moviles{
  constructor(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam, camaraExtra){
    super(color, peso, resolucionDePantalla,resolucionDeCamara, memoriaRam);
    this.extraCam = camaraExtra;
  }
  superLenta(){
    alert ('Estas grabando en camara lenta');
  }
  reconocimientoFacial(){
  alert ('Iniciando reconocimiento facial');
  }
  mobileInfo(){
    return this.showInfo() + `Resolución Cámara Extra: <b>${this.extraCam}</b>`;
  }

}

const movil1 = new Moviles('negro', '200gr','5.5', 'full HD', "3gb");
const movil2 = new Moviles('titanio', '150gr', '6.3', '1920', '4gb');
const movil3 = new Moviles('oro rosa', '300gr', '6.7', 'HD', '2gb');
const movil4 = new MovilesGamaAlta('rojo', '125gr', '6.7', '4k', '8gb', 'FullHd');
const movil5 = new MovilesGamaAlta('azul', '145gr', '6.7', '4k', '12gb', '4k');


document.getElementById('mensaje').innerHTML = `
${movil1.showInfo()} <br>
${movil2.showInfo()}<br>
${movil3.showInfo()}<br>
${movil4.mobileInfo()}<br><br>
${movil5.mobileInfo()}`;

// movil1.presionarBotonOnOff();
// movil1.hacerFoto();
// movil1.grabarVideo();
// movil1.reiniciar();
// movil1.presionarBotonOnOff();
