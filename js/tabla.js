function ordenarTabla(letra, idTabla) {
    var tabla = document.getElementById(idTabla);
    var tbody = tabla.querySelector('tbody');
    var filas = Array.from(tbody.getElementsByTagName('tr'));

    filas.sort(function(a, b) {
        var textoA = a.getElementsByTagName('td')[1].textContent.toUpperCase();
        var textoB = b.getElementsByTagName('td')[1].textContent.toUpperCase();

        if (letra === '') {
            return textoA.localeCompare(textoB);
        } else {
            var distanciaA = Math.abs(letra.charCodeAt(0) - textoA.charCodeAt(0));
            var distanciaB = Math.abs(letra.charCodeAt(0) - textoB.charCodeAt(0));

            if (distanciaA === distanciaB) {
                return textoA.localeCompare(textoB);
            } else {
                return distanciaA - distanciaB;
            }
        }
    });

    for (var i = 0; i < filas.length; i++) {
        tbody.appendChild(filas[i]);
    }
}