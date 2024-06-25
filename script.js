const rouletteNumbers = [
    
        { number: 0, color: 'green' },
        { number: 1, color: 'red' },
        { number: 2, color: 'black' },
        { number: 3, color: 'red' },
        { number: 4, color: 'black' },
        { number: 5, color: 'red' },
        { number: 6, color: 'black' },
        { number: 7, color: 'red' },
        { number: 8, color: 'black' },
        { number: 9, color: 'red' },
        { number: 10, color: 'black' },
        { number: 11, color: 'black' },
        { number: 12, color: 'red'}, 
            { number: 13, color: 'black' },
    { number: 14, color: 'red' },
    { number: 15, color: 'black' },
    { number: 16, color: 'red' },
    { number: 17, color: 'black' },
    { number: 18, color: 'red' },
    { number: 19, color: 'red' },
    { number: 20, color: 'black' },
    { number: 21, color: 'red' },
    { number: 22, color: 'black' },
    { number: 23, color: 'red' },
    { number: 24, color: 'black' },
    { number: 25, color: 'red' },
    { number: 26, color: 'black' },
    { number: 27, color: 'red' },
    { number: 28, color: 'black' },
    { number: 29, color: 'black' },
    { number: 30, color: 'red' },
    { number: 31, color: 'black' },
    { number: 32, color: 'red' },
    { number: 33, color: 'black' },
    { number: 34, color: 'red' },
    { number: 35, color: 'black' },
    { number: 36, color: 'red' }

];

const correspondingNumbers = {
    "0": [0, 10, 20, 30],
    "1": [1, 11, 21, 31],
    "2": [2, 12, 22, 32],
    "3": [3, 13, 23, 33],
    "4": [4, 14, 24, 34],
    "5": [5, 15, 25, 35],
    "6": [6, 16, 26, 36],
    "7": [7, 17, 27],
    "8": [8, 18, 28],
    "9": [9, 19, 29],
    "10": [0, 10, 20, 30],
    "11": [1, 11, 21, 31],
    "12": [2, 12, 22, 32],
    "13": [3, 13, 23, 33],
    "14": [4, 14, 24, 34],
    "15": [5, 15, 25, 35],
    "16": [6, 16, 26, 36],
    "17": [7, 17, 27],
    "18": [8, 18, 28],
    "19": [9, 19, 29],
    "20": [0, 10, 20, 30],
    "21": [1, 11, 21, 31],
    "22": [2, 12, 22, 32],
    "23": [3, 13, 23, 33],
    "24": [4, 14, 24, 34],
    "25": [5, 15, 25, 35],
    "26": [6, 16, 26, 36],
    "27": [7, 17, 27],
    "28": [8, 18, 28],
    "29": [9, 19, 29],
    "30": [0, 10, 20, 30],
    "31": [1, 11, 21, 31],
    "32": [2, 12, 22, 32],
    "33": [3, 13, 23, 33],
    "34": [4, 14, 24, 34],
    "35": [5, 15, 25, 35],
    "36": [6, 16, 26, 36]
};

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('roulette-table');
    const selectedNumbers = [null, null, null];

    rouletteNumbers.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.number;
        button.classList.add('btn', 'm-1', item.color);
        button.addEventListener('click', () => handleButtonClick(button, item.number));
        table.appendChild(button);
    });

    function handleButtonClick(button, number) {
        const index = selectedNumbers.indexOf(number);

        if (index !== -1) {
            // Unselect the number
            selectedNumbers[index] = null;
            button.classList.remove('active');
        } else {
            // Select the number if there's an empty spot
            const emptyIndex = selectedNumbers.indexOf(null);
            if (emptyIndex !== -1) {
                selectedNumbers[emptyIndex] = number;
                button.classList.add('active');
            }
        }

        updateSelectedNumbers();
        updateActiveButtons();
        updateCorrespondingNumbers();
    }

    function updateSelectedNumbers() {
        document.getElementById('selected1').textContent = selectedNumbers[0] !== null ? selectedNumbers[0] : '';
        document.getElementById('selected2').textContent = selectedNumbers[1] !== null ? selectedNumbers[1] : '';
        document.getElementById('selected3').textContent = selectedNumbers[2] !== null ? selectedNumbers[2] : '';
    }

    function updateActiveButtons() {
        document.querySelectorAll('#roulette-table button').forEach(button => {
            const number = parseInt(button.textContent, 10);
            if (selectedNumbers.includes(number)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function updateCorrespondingNumbers() {
        const corresponding1 = document.getElementById('corresponding1');
        const corresponding2 = document.getElementById('corresponding2');
        const corresponding3 = document.getElementById('corresponding3');

        const selected1 = selectedNumbers[0] !== null ? correspondingNumbers[selectedNumbers[0]] : [];
        const selected2 = selectedNumbers[1] !== null ? correspondingNumbers[selectedNumbers[1]] : [];
        const selected3 = selectedNumbers[2] !== null ? correspondingNumbers[selectedNumbers[2]] : [];

        corresponding1.textContent = selected1.join(', ');
        corresponding2.textContent = selected2.join(', ');
        corresponding3.textContent = selected3.join(', ');
    }
});
