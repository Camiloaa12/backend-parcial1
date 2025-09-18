// Operaciones de conversión de moneda

const convertirMoneda = (valor, unidadOrigen, unidadDestino) => {
    // Tasas de cambio fijas (en la vida real se obtendrían de una API externa)
    const tasasCambio = {
        'USD': 1,      // Dólar estadounidense
        'EUR': 0.85,   // Euro
        'COP': 4000,   // Peso colombiano
        'GBP': 0.73    // Libra esterlina
    };
    
    // Convertir unidades a mayúsculas para la comparación
    const unidadOrigenUpper = unidadOrigen.toUpperCase();
    const unidadDestinoUpper = unidadDestino.toUpperCase();
    
    if (!tasasCambio[unidadOrigenUpper] || !tasasCambio[unidadDestinoUpper]) {
        throw new Error('Moneda no soportada');
    }
    
    // Convertir a USD primero, luego a la moneda destino
    const valorEnUSD = valor / tasasCambio[unidadOrigenUpper];
    const resultado = valorEnUSD * tasasCambio[unidadDestinoUpper];
    
    // Redondear el resultado a un número entero
    return Math.round(resultado);
};

module.exports = {
    convertirMoneda
};