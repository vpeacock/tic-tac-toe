class TicTacToe {
    constructor() {
        this.ticTacToeSymbol = ['x', 'o'];
        this.currentSymbol = 'x';
        this.winner = null;
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.gameField[rowIndex][columnIndex] === null) {
            this.gameField[rowIndex][columnIndex] = this.currentSymbol;
            if (this.currentSymbol === this.ticTacToeSymbol[0]) {
                this.currentSymbol = this.ticTacToeSymbol[1]
            } else {
                this.currentSymbol = this.ticTacToeSymbol[0]
            }
        }
    }

    isFinished() {
        return this.getWinner() || this.isDraw() ? true : false;
    }

    getWinner() {
        // Проверка строк
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 1; j < this.gameField[i].length; j++) {
                if (this.gameField[i][j] != this.gameField[i][j - 1])
                    break;
                if (j == this.gameField[i].length - 1) this.winner = this.gameField[i][j];
            }
        }

        if (this.winner) return this.winner;

        //Проверка столбцов
        for (let j = 0; j < this.gameField[0].length; j++) {
            for (let i = 1; i < this.gameField.length; i++) {
                if (this.gameField[i][j] != this.gameField[i - 1][j])
                    break;
                if (i == this.gameField.length - 1) this.winner = this.gameField[i][j];
            }
        }

        if (this.winner) return this.winner;

        //Проверка главной диагонали
        for (let i = 1; i < this.gameField.length; i++) {
            if (this.gameField[i][i] != this.gameField[i - 1][i - 1])
                break;
            if (i == this.gameField.length - 1) this.winner = this.gameField[i][i];
        }

        if (this.winner) return this.winner;

        //Проверка побочной диагонали
        for (let i = 1, j = this.gameField.length - 1 - i; i < this.gameField.length; i++, j--) {
            if (this.gameField[i][j] != this.gameField[i - 1][j + 1])
                break;
            if (i == this.gameField.length - 1) this.winner = this.gameField[i][j];
        }

        return this.winner;
    }

    noMoreTurns() {
        return [].concat(...this.gameField).every((el) => el !== null);
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
