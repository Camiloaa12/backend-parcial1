// Operaciones de conversión de tiempo

const convertirTiempo = (valor, unidadOrigen, unidadDestino) => {
    // Convertir todo a segundos primero
    let valorEnSegundos;
    const unidadOrigenLower = unidadOrigen.toLowerCase();
    
    switch (unidadOrigenLower) {
        case 'segundos':
        case 'segundo':
        case 'seg':
        case 's':
            valorEnSegundos = valor;
            break;
        case 'minutos':
        case 'minuto':
        case 'min':
        case 'm':
            valorEnSegundos = valor * 60;
            break;
        case 'horas':
        case 'hora':
        case 'hr':
        case 'h':
            valorEnSegundos = valor * 3600;
            break;
        case 'dias':
        case 'dia':
        case 'd':
            valorEnSegundos = valor * 86400;
            break;
        default:
            throw new Error('Unidad de origen no válida');
    }
    
    // Convertir de segundos a la unidad destino
    let resultado;
    const unidadDestinoLower = unidadDestino.toLowerCase();
    
    switch (unidadDestinoLower) {
        case 'segundos':
        case 'segundo':
        case 'seg':
        case 's':
            resultado = valorEnSegundos;
            break;
        case 'minutos':
        case 'minuto':
        case 'min':
        case 'm':
            resultado = valorEnSegundos / 60;
            break;
        case 'horas':
        case 'hora':
        case 'hr':
        case 'h':
            resultado = valorEnSegundos / 3600;
            break;
        case 'dias':
        case 'dia':
        case 'd':
            resultado = valorEnSegundos / 86400;
            break;
        default:
            throw new Error('Unidad de destino no válida');
    }
    
    // Redondear el resultado a un número entero
    return Math.round(resultado);
};

module.exports = {
    convertirTiempo
};