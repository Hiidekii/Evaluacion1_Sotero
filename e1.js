let listaCasillas = []

function llenarCasillas() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let casilla = {
                id: i + "-" + j,
                isTaped: false,
                symbol: 'X',
                color: "",
            }
            listaCasillas.push(casilla)
        }
    }
}

function PintarIzq() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idUp = (i - 1) + "-" + j
            const idRight = i + "-" + (j + 1)
            const idDown = (i + 1) + "-" + j
            const casilla = devolverCasillas(i, j)
            const adUp = devolverCasillas(i - 1, j)
            const adRight = devolverCasillas(i, j + 1)
            const adDown = devolverCasillas(i + 1, j)
            var but = document.getElementById(id)
            var butUp = document.getElementById(idUp)
            var butRight = document.getElementById(idRight)
            var butDown = document.getElementById(idDown)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butUp.innerHTML = adUp.symbol
                butRight.innerHTML = adRight.symbol
                butDown.innerHTML = adDown.symbol
            }
        }
    }
}

function PintarDer() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idUp = (i - 1) + "-" + j
            const idLeft = i + "-" + (j - 1)
            const idDown = (i + 1) + "-" + j
            const casilla = devolverCasillas(i, j)
            const adUp = devolverCasillas(i - 1, j)
            const adLeft = devolverCasillas(i, j - 1)
            const adDown = devolverCasillas(i + 1, j)
            var but = document.getElementById(id)
            var butUp = document.getElementById(idUp)
            var butLeft = document.getElementById(idLeft)
            var butDown = document.getElementById(idDown)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butUp.innerHTML = adUp.symbol
                butLeft.innerHTML = adLeft.symbol
                butDown.innerHTML = adDown.symbol
            }
        }
    }
}

function PintarArr() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idRight = i + "-" + (j + 1)
            const idLeft = i + "-" + (j - 1)
            const idDown = (i + 1) + "-" + j
            const casilla = devolverCasillas(i, j)
            const adRight = devolverCasillas(i, j + 1)
            const adLeft = devolverCasillas(i, j - 1)
            const adDown = devolverCasillas(i + 1, j)
            var but = document.getElementById(id)
            var butRight = document.getElementById(idRight)
            var butLeft = document.getElementById(idLeft)
            var butDown = document.getElementById(idDown)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butRight.innerHTML = adRight.symbol
                butLeft.innerHTML = adLeft.symbol
                butDown.innerHTML = adDown.symbol
            }
        }
    }
}

function PintarAbj() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idUp = (i - 1) + "-" + j
            const idRight = i + "-" + (j + 1)
            const idLeft = i + "-" + (j - 1)
            const casilla = devolverCasillas(i, j)
            const adUp = devolverCasillas(i - 1, j)
            const adRight = devolverCasillas(i, j + 1)
            const adLeft = devolverCasillas(i, j - 1)
            var but = document.getElementById(id)
            var butUp = document.getElementById(idUp)
            var butRight = document.getElementById(idRight)
            var butLeft = document.getElementById(idLeft)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butUp.innerHTML = adUp.symbol
                butRight.innerHTML = adRight.symbol
                butLeft.innerHTML = adLeft.symbol
            }
        }
    }
}

function PintarEsq1() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idRight = i + "-" + (j + 1)
            const idDown = (i + 1) + "-" + j
            const casilla = devolverCasillas(i, j)
            const adRight = devolverCasillas(i, j + 1)
            const adDown = devolverCasillas(i + 1, j)
            var but = document.getElementById(id)
            var butRight = document.getElementById(idRight)
            var butDown = document.getElementById(idDown)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butRight.innerHTML = adRight.symbol
                butDown.innerHTML = adDown.symbol
            }
        }
    }
}

function PintarEsq2() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idLeft = i + "-" + (j - 1)
            const idDown = (i + 1) + "-" + j
            const casilla = devolverCasillas(i, j)
            const adLeft = devolverCasillas(i, j - 1)
            const adDown = devolverCasillas(i + 1, j)
            var but = document.getElementById(id)
            var butLeft = document.getElementById(idLeft)
            var butDown = document.getElementById(idDown)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butLeft.innerHTML = adLeft.symbol
                butDown.innerHTML = adDown.symbol
            }
        }
    }
}

function PintarEsq3() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idUp = (i - 1) + "-" + j
            const idRight = i + "-" + (j + 1)
            const casilla = devolverCasillas(i, j)
            const adUp = devolverCasillas(i - 1, j)
            const adRight = devolverCasillas(i, j + 1)
            var but = document.getElementById(id)
            var butUp = document.getElementById(idUp)
            var butRight = document.getElementById(idRight)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butUp.innerHTML = adUp.symbol
                butRight.innerHTML = adRight.symbol
            }
        }
    }
}

function PintarEsq4() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idUp = (i - 1) + "-" + j
            const idLeft = i + "-" + (j - 1)
            const casilla = devolverCasillas(i, j)
            const adUp = devolverCasillas(i - 1, j)
            const adLeft = devolverCasillas(i, j - 1)
            var but = document.getElementById(id)
            var butUp = document.getElementById(idUp)
            var butLeft = document.getElementById(idLeft)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butUp.innerHTML = adUp.symbol
                butLeft.innerHTML = adLeft.symbol
            }
        }
    }
}

function Pintar() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const id = i + "-" + j
            const idUp = (i - 1) + "-" + j
            const idRight = i + "-" + (j + 1)
            const idLeft = i + "-" + (j - 1)
            const idDown = (i + 1) + "-" + j
            const casilla = devolverCasillas(i, j)
            const adUp = devolverCasillas(i - 1, j)
            const adRight = devolverCasillas(i, j + 1)
            const adLeft = devolverCasillas(i, j - 1)
            const adDown = devolverCasillas(i + 1, j)
            var but = document.getElementById(id)
            var butUp = document.getElementById(idUp)
            var butRight = document.getElementById(idRight)
            var butLeft = document.getElementById(idLeft)
            var butDown = document.getElementById(idDown)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                butUp.innerHTML = adUp.symbol
                butRight.innerHTML = adRight.symbol
                butLeft.innerHTML = adLeft.symbol
                butDown.innerHTML = adDown.symbol
            }
        }
    }
}

function devolverCasillas(row, col) {
    const pos = 8 * row + col
    return listaCasillas[pos]
}

function onClick(row, col) {
    const but = devolverCasillas(row, col)
    if (!but.isTaped) {
        but.isTaped = true
        but.symbol = 'X'
        if (col == 0) {
            PintarIzq()
        } else if (col == 7) {
            PintarDer()
        } else if (row == 0) {
            PintarArr()
        } else if (row == 7) {
            PintarAbj()
        } else if (row == 0 && col == 0) {
            PintarEsq1()
        } else if (row == 0 && col == 7) {
            PintarEsq2()
        } else if (row == 7 && col == 0) {
            PintarEsq3()
        } else if (row == 7 && col == 7) {
            PintarEsq4()
        } else {
            Pintar()
        }
    }
}

function main() {
    llenarCasillas()
    Pintar()
}

main()