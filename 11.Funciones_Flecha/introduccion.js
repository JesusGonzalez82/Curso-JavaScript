dineroRoberto = prompt('cuanto dinero tienes Roberto?');
dineroPedro = prompt('cuanto dinero tienes Pedro?');
dineroCofla = prompt('cuanto dinero tienes Cofla?');

dineroCofla = parseFloat(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert('Cofla Te puedes comprar el helado de Hielo');
    alert('y te devuelvo ' + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert('Cofla Te puedes comprar el helado de leche');
    alert('y te devuelvo ' + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert('Cofla Te puedes comprar el helado de Nestle');
    alert('y te devuelvo ' + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert('Cofla Te puedes comprar el helado de Kalise');
    alert('y te devuelvo ' + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert('Cofla Te puedes comprar el helado de Magnum');
    alert('y te devuelvo ' + (dineroCofla - 1.9));
}
else if (dineroCofla >=2.9){
    alert('Cofla Te puedes comprar la bola de helado o la bola con sorpresa'); 
    alert('y te devuelvo ' + (dineroCofla - 2.9).toFixed(2)); 
}else {
    alert('Cofla Lo siento, no puedes comprar nada')
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert('Roberto Te puedes comprar el helado de Hielo');
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert('Roberto Te puedes comprar el helado de Nestle');
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert('Roberto Te puedes comprar el helado de Kalise');
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert('Roberto Te puedes comprar el helado de Magnum');
}
else if (dineroRoberto >=2.9){
    alert('Roberto Te puedes comprar la bola de helado o la bola con sorpresa');  
}else {
    alert('Roberto Lo siento, no puedes comprar nada')
}

if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert('Pedro Te puedes comprar el helado de Hielo');
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert('Pedro Te puedes comprar el helado de leche');
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert('Pedro Te puedes comprar el helado de Nestle');
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert('Pedro Te puedes comprar el helado de Kalise');
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert('Pedro Te puedes comprar el helado de Magnum');
}
else if (dineroPedro >=2.9){
    alert('Pedro Te puedes comprar la bola de helado o la bola con sorpresa');  
}else {
    alert('Pedro Lo siento, no puedes comprar nada')
}



