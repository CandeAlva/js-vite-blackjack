 /**
  * Esta función me permite pedir una carta del deck
  * @param {Array<number>} deck 
  * @returns {string} retorna la ultima carta de deck
  */
 export    const pedirCarta = (deck) => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }