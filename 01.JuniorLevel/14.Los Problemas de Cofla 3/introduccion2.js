class App{
    constructor(descargas, puntuacion, tamaño){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.tamaño = tamaño;
        this.iniciada = false;
        this.instalada = false;
    }
    instalarApp(){
        if (this.instalada == false){
            this.instalada = true;
            alert ('App instalada en el sistema');
        }
    }
    desinstalarApp(){
        if (this.instalada == true){
            this.instalada = false;
            alert ('App desinstalada en el sistema');
        }
    }
    abrirApp(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert('App iniciada');
        }
    }
    cerrarApp(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert('App cerrada');
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        `
    }
}

app = new App('16.000', '4.5 estrellas', '900MB');
app2 = new App('126.000', '5 estrellas', '2.25GB');
app3 = new App('1.060.000', '5 estrellas', '3.90GB');
app4 = new App('1.000', '3 estrellas', '60MB');
app5 = new App('12.000', '4 estrellas', '600MB');
app6 = new App('1.000', '2 estrellas', '500MB');
app7 = new App('600', '1 estrellas', '850MB');

// app.instalarApp();
// app.abrirApp();
// app.cerrarApp();
// app.desinstalarApp();

document.getElementById('mensaje').innerHTML = `
${app.appInfo()} <br>
${app2.appInfo()}<br>
${app3.appInfo()} <br>
${app4.appInfo()}<br>
${app5.appInfo()} <br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`;


