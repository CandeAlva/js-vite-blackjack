 import _ from 'underscore';
 
/**
 * Esta funcion crea un nuevo deck de cartas
 * @param {Array<string>} tiposDeCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @throws {Error} Si no se proporcionan tipos de cartas    
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
    export  const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if ( !tiposDeCartas || tiposDeCartas.length === 0)
         throw new Error('Tipos de cartas son obligatorios como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0)
         throw new Error('Tipos especiales son obligatorios como un arreglo de string');

       let deck = [];

        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tiposDeCartas ) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of tiposDeCartas ) {
            for( let esp of tiposEspeciales ) {
                deck.push( esp + tipo);
            }
        }
        return _.shuffle( deck );
       
    }