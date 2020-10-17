const board = [
	[ 0, 4, 9, 0, 0, 7, 3, 0, 0 ],
	[ 0, 0, 0, 0, 1, 2, 0, 0, 8 ],
	[ 0, 0, 1, 6, 0, 0, 0, 5, 0 ],
	[ 1, 0, 0, 0, 0, 0, 4, 0, 6 ],
	[ 0, 8, 6, 0, 5, 1, 0, 7, 0 ],
	[ 3, 0, 0, 0, 0, 0, 5, 0, 2 ],
	[ 0, 0, 0, 8, 0, 0, 0, 0, 0 ],
	[ 7, 0, 2, 0, 4, 0, 8, 9, 5 ],
	[ 6, 5, 0, 3, 0, 9, 1, 0, 0 ]
];

function printBoard() {
	for (let row = 0; row < 9; row++) {
		let pad = (" ").repeat(5)
		let formattedRow = board[ row ].join("").replace(/(\d{3})(\d{3})(\d{3})/, `$1${pad}$2${pad}$3`);
		console.log(formattedRow)
		if ((row + 1) % 3 === 0) console.log(" ")
	}
}

function isUniqueNumber (row, col, number) {
	for (let i = 0; i < 9; i++) {
		const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
		const n = 3 * Math.floor(col / 3) + i % 3;
		if (
			board[row][i] == number || 
			board[i][col] == number || 
			board[m][n] == number
		) return false;
	}
	return true;
}

function sodokoSolver() {
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if ( board[ row ][ col ] !== 0) continue;
				
			for (let number = 1; number <= 9; number++) {
				if (! isUniqueNumber(row, col, number)) continue;
				
				board[ row ][ col ] = number;
				
				if (sodokoSolver()) return true;
				
				board[ row ][ col ] = 0;
			}
				
			return false;
		}
	}
	return true;
}

sodokoSolver();
printBoard();
