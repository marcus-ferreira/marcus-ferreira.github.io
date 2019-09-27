// Taxa metabólica
function calcular() {
    var sexo = document.getElementById("sexo").selectedIndex;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var idade = document.getElementById("idade").value;
    var atividade = document.getElementById("atividade").selectedIndex;
    var tmb;
	if (sexo === 0) {
        tmb = (66.5 + (14 * peso) + (5 * altura) - (6.7 * idade));
	} else {
        tmb = (655.1 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
	}
	var caloria;
	if (atividade === 0) {
        caloria = tmb * 1.2;
    } else if (atividade === 1) {
        caloria = tmb * 1.375;
	} else if (atividade === 2) {
        caloria = tmb * 1.55;
	} else if (atividade === 3) {
        caloria = tmb * 1.725;
	} else {
        caloria = tmb * 1.9;
	}

	document.getElementById("resultadoTmb").innerHTML = "Seu TMB é " + Math.floor(tmb) + ".";
	document.getElementById("resultadoCaloria").innerHTML = "A quantidade de caloria que seu corpo gasta é " + Math.floor(caloria) + " kcal.";
}
