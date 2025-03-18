function transporMatriz(A) {
    for(let i = 0; i < A.length; i++){
        let linha = "";
        for(let j = 0; j < A[0].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }

    console.log("\nTransposta\n");
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);
