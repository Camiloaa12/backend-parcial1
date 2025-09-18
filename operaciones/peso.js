// Operaciones de conversión de peso

const convertirPeso = (valor, unidadOrigen, unidadDestino) => {
    // Convertir todo a gramos primero
    let valorEnGramos;
    // Convertir unidades a minúsculas para comparación
    const unidadOrigenLower = unidadOrigen.toLowerCase();
    
    switch (unidadOrigenLower) {
        case 'gramos':
        case 'gramo':
        case 'gr':
            valorEnGramos = valor;
            break;
        case 'kilogramos':
        case 'kilogramo':
        case 'kg':
            valorEnGramos = valor * 1000;
            break;
        case 'libras':
        case 'libra':
        case 'lb':
            valorEnGramos = valor * 453.592;
            break;
        case 'onzas':
        case 'onza':
        case 'oz':
            valorEnGramos = valor * 28.3495;
            break;
        default:
            throw new Error('Unidad de origen no válida');
    }
    
    // Convertir de gramos a la unidad destino
    let resultado;
    // Convertir unidades a minúsculas para comparación
    const unidadDestinoLower = unidadDestino.toLowerCase();
    
    switch (unidadDestinoLower) {
        case 'gramos':
        case 'gramo':
        case 'gr':
            resultado = valorEnGramos;
            break;
        case 'kilogramos':
        case 'kilogramo':
        case 'kg':
            resultado = valorEnGramos / 1000;
            break;
        case 'libras':
        case 'libra':
        case 'lb':
            resultado = valorEnGramos / 453.592;
            break;
        case 'onzas':
        case 'onza':
        case 'oz':
            resultado = valorEnGramos / 28.3495;
            break;
        default:
            throw new Error('Unidad de destino no válida');
    }
    
    return resultado;
};

module.exports = {
    convertirPeso
};