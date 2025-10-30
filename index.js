const THROWS = [
    [1, 1, 1, 2, 3], 
    [2, 2, 3, 4, 5],
    [6, 6, 6, 6, 6],
    [1, 2, 3, 4, 5]
]

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

export const getMaxDicesWithSameValues = (dices) => {
    const counts = {};
    
    for (const dice of dices) {
        counts[dice] = (counts[dice] || 0) + 1;
    }

    const maxValueOfDices = Math.max(...Object.values(counts));

    return maxValueOfDices;
}