function transporMatriz(A) {
    console.log("Matriz Original:");
    A.forEach(linha => console.log(linha.join(" ")));

    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

    console.log("\nMatriz Transposta:");
    transposta.forEach(linha => console.log(linha.join(" ")));
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);