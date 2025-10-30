const THROWS = [
    [1, 1, 1, 2, 3], 
    [2, 2, 3, 4, 5],
    [6, 6, 6, 6, 6],
    [1, 2, 3, 4, 5]
]

const FIGURES = {
    brelan : 28, 
    carre : 35,
    full: 30,
    grandeSuite: 40,
    yams: 50
}

export const throwDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

export const throwDices = (numDices) => {
    const dices = []; 
    
    for (let i = 0; i < numDices; i++) {
        dices.push(throwDice());
    }

    return dices; 
}

export const getDicesWithSameValues = (dices) => {
    const counts = {};
    
    for (const dice of dices) {
        counts[dice] = (counts[dice] || 0) + 1;
    }

    return counts;
}

export const getPointsFromDices = (dices) => {
    const counts = getDicesWithSameValues(dices);

    if(Object.values(counts).includes(3)){
        return FIGURES.brelan;
    }

    if(Object.values(counts).includes(4)){
        return FIGURES.carre;
    }

    if(Object.values(counts).includes(5)){
        return FIGURES.yams;
    }

}