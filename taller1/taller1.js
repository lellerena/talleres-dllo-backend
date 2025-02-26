// today: 2025-02-07
// punto 1
function convertidorTemp(centigrados) {
    return (centigrados * 9) / 5 + 32
}

// punto 2
function resolvedor(a, b, c, positivo = true) {
    if (positivo) {
        return (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    } else {
        return (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    }
}

// punto 3
function mejorParidad(numero) {
    return numero % 2 === 0
}

// punto 4
function peorParidad(numero) {
    const numeros = []
    for (let i = 2; i <= 100; i += 2) {
        numeros.push(i)
	}
	
    let par = 'nega'
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numero) {
            par = 'aro'
        }
    }

    if (par === 'aro') {
        return true
    } else if (par === 'nega') {
        return false
    }
}


