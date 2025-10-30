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

export const testIfIsSuite = (dices) => {
    for(let i = 1; i < dices.length; i++){
        if(dices[i] !== dices[i-1] + 1){
            return false;
        }
    }

    return true;
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

    if(Object.values(counts).includes(3) && Object.values(counts).includes(2)){
        return FIGURES.full;
    }
    
    switch(Math.max(...Object.values(counts))){
        case 3:
            return FIGURES.brelan;
        case 4:
            return FIGURES.carre;
        case 5:
            return FIGURES.yams;
    }

    const isSuite = testIfIsSuite(dices);

    if(isSuite){
        return FIGURES.grandeSuite;
    }
    
}