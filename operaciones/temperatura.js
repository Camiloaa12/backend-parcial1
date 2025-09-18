// Operaciones de conversión de temperatura

const convertirTemperatura = (valor, unidadOrigen, unidadDestino) => {
    let valorEnCelsius;
    
    // Convertir a Celsius primero
    const unidadOrigenLower = unidadOrigen.toLowerCase();
    
    switch (unidadOrigenLower) {
        case 'celsius':
        case 'c':
        case '°c':
            valorEnCelsius = valor;
            break;
        case 'fahrenheit':
        case 'f':
        case '°f':
            valorEnCelsius = (valor - 32) * 5/9;
            break;
        case 'kelvin':
        case 'k':
            valorEnCelsius = valor - 273.15;
            break;
        default:
            throw new Error('Unidad de origen no válida');
    }
    
    // Convertir de Celsius a la unidad destino
    let resultado;
    const unidadDestinoLower = unidadDestino.toLowerCase();
    
    switch (unidadDestinoLower) {
        case 'celsius':
        case 'c':
        case '°c':
            resultado = valorEnCelsius;
            break;
        case 'fahrenheit':
        case 'f':
        case '°f':
            resultado = (valorEnCelsius * 9/5) + 32;
            break;
        case 'kelvin':
        case 'k':
            resultado = valorEnCelsius + 273.15;
            break;
        default:
            throw new Error('Unidad de destino no válida');
    }
    
    // Redondear el resultado a un número entero
    return Math.round(resultado);
};

module.exports = {
    convertirTemperatura
};