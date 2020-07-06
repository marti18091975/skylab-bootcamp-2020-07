

class Position {    
   constructor(id,color,file, column) {
        this.id = id;
        this.color = color;
        this.file = file;
        this.column = column;
    }
}
var turn;
var colorPlayer;
var column, file;
var consecutiveH = 0;
var consecutiveV = 0;
var consecutiveDURDL = 0;
var consecutiveDULDR = 0;
var activateButtons = 0;
var typeLine = "noLine";


var box1 = new Position("f1c1", "blue", 1, 1);
var box2 = new Position("f2c1", "blue", 2, 1);
var box3 = new Position("f3c1", "blue", 3, 1);
var box4 = new Position("f4c1", "blue", 4, 1);
var box5 = new Position("f5c1", "blue", 5, 1);
var box6 = new Position("f6c1", "blue", 6, 1);
var box7 = new Position("f1c2", "blue", 1, 2);
var box8 = new Position("f2c2", "blue", 2, 2);
var box9 = new Position("f3c2", "blue", 3, 2);
var box10 = new Position("f4c2", "blue", 4, 2);
var box11 = new Position("f5c2", "blue", 5, 2);
var box12 = new Position("f6c2", "blue", 6, 2);
var box13 = new Position("f1c3", "blue", 1, 3);
var box14 = new Position("f2c3", "blue", 2, 3);
var box15 = new Position("f3c3", "blue", 3, 3);
var box16 = new Position("f4c3", "blue", 4, 3);
var box17 = new Position("f5c3", "blue", 5, 3);
var box18 = new Position("f6c3", "blue", 6, 3);
var box19 = new Position("f1c4", "blue", 1, 4);
var box20 = new Position("f2c4", "blue", 2, 4);
var box21= new Position("f3c4", "blue", 3, 4);
var box22= new Position("f4c4", "blue", 4, 4);
var box23= new Position("f5c4", "blue", 5, 4);
var box24= new Position("f6c4", "blue", 6, 4);
var box25= new Position("f1c5", "blue", 1, 5);
var box26= new Position("f2c5", "blue", 2, 5);
var box27= new Position("f3c5", "blue", 3, 5);
var box28= new Position("f4c5", "blue", 4, 5);
var box29= new Position("f5c5", "blue", 5, 5);
var box30= new Position("f6c5", "blue", 6, 5);
var box31 = new Position("f1c6", "blue", 1, 6);
var box32 = new Position("f2c6", "blue", 2, 6);
var box33= new Position("f3c6", "blue", 3, 6);
var box34= new Position("f4c6", "blue", 4, 6);
var box35= new Position("f5c6", "blue", 5, 6);
var box36= new Position("f6c6", "blue", 6, 6);
var box37= new Position("f1c7", "blue", 1, 7);
var box38= new Position("f2c7", "blue", 2, 7);
var box39= new Position("f3c7", "blue", 3, 7);
var box40= new Position("f4c7", "blue", 4, 7);
var box41= new Position("f5c7", "blue", 5, 7);
var box42 = new Position("f6c7", "blue", 6, 7);

var table = new Array(new Array(box1, box2, box3, box4, box5, box6), new Array(box7, box8, box9, box10, box11, box12), new Array(box13, box14, box15, box16, box17, box18)
    , new Array(box19, box20, box21, box22, box23, box24), new Array(box25, box26, box27, box28, box29, box30), new Array(box31, box32, box33, box34, box35, box36), new Array(box37, box38, box39, box40, box41, box42));




function start(a) {
    activateButtons = 1;
    if (a=== 1) {
        turn = 1;        
        document.getElementById("textInici").innerHTML = "torn del jugador vermell";
        document.getElementById("textInici").style.backgroundColor = "red";
        document.getElementById("textInici").style.color = "white";
    } else {
        authomaticYellowPlayerTurn();
       /* document.getElementById("textInici").innerHTML = "torn del jugador groc";
        document.getElementById("textInici").style.backgroundColor = "yellow";
        document.getElementById("textInici").style.color = "black";*/
    }
}

function col1(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[0][i].color === "blue") {
                    document.getElementById(table[0][i].id).style.backgroundColor = "red";
                    table[0][i].color = "red";
                    turn = 2;
                    column = 0;
                    file = i;
                    start(turn);
                    checkLine(0, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[0][i].color === "blue") {
                    document.getElementById(table[0][i].id).style.backgroundColor = "yellow";
                    table[0][i].color = "yellow";
                    turn = 1;
                    column = 0;
                    file = i;
                    start(turn);
                    checkLine(0, i,3);
                    return;
                }
            }

        }
    }
}

function col2(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[1][i].color === "blue") {
                    document.getElementById(table[1][i].id).style.backgroundColor = "red";
                    table[1][i].color = "red";
                    turn = 2;
                    column = 1;
                    file = i;
                    start(turn);
                    checkLine(1, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[1][i].color === "blue") {
                    document.getElementById(table[1][i].id).style.backgroundColor = "yellow";
                    table[1][i].color = "yellow";
                    turn = 1;
                    column = 1;
                    file = i;
                    start(turn);
                    checkLine(1, i,3);
                    return;
                }
            }

        }
    }
}

function col3(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[2][i].color === "blue") {
                    document.getElementById(table[2][i].id).style.backgroundColor = "red";
                    table[2][i].color = "red";
                    turn = 2;
                    column = 2;
                    file = i;
                    start(turn);
                    checkLine(2, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[2][i].color === "blue") {
                    document.getElementById(table[2][i].id).style.backgroundColor = "yellow";
                    table[2][i].color = "yellow";
                    turn = 1;
                    column = 2;
                    file = i;
                    start(turn);
                    checkLine(2, i,3);
                    return;
                }
            }

        }
    }
}

function col4(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[3][i].color === "blue") {
                    document.getElementById(table[3][i].id).style.backgroundColor = "red";
                    table[3][i].color = "red";
                    turn = 2;
                    column = 3;
                    file = i;
                    start(turn);
                    checkLine(3, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[3][i].color === "blue") {
                    document.getElementById(table[3][i].id).style.backgroundColor = "yellow";
                    table[3][i].color = "yellow";
                    turn = 1;
                    column = 3;
                    file = i;
                    start(turn);
                    checkLine(3, i,3);
                    return;
                }
            }

        }
    }
}

function col5(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[4][i].color === "blue") {
                    document.getElementById(table[4][i].id).style.backgroundColor = "red";
                    table[4][i].color = "red";
                    turn = 2;
                    column = 4;
                    file = i;
                    start(turn);
                    checkLine(4, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[4][i].color === "blue") {
                    document.getElementById(table[4][i].id).style.backgroundColor = "yellow";
                    table[4][i].color = "yellow";
                    turn = 1;
                    column = 4;
                    file = i;
                    start(turn);
                    checkLine(4, i,3);
                    return;
                }
            }

        }
    }
}

function col6(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[5][i].color === "blue") {
                    document.getElementById(table[5][i].id).style.backgroundColor = "red";
                    table[5][i].color = "red";
                    turn = 2;
                    column = 5;
                    file = i;
                    start(turn);
                    checkLine(5, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[5][i].color === "blue") {
                    document.getElementById(table[5][i].id).style.backgroundColor = "yellow";
                    table[5][i].color = "yellow";
                    turn = 1;
                    column = 5;
                    file = i;
                    start(turn);
                    checkLine(5, i,3);
                    return;
                }
            }

        }
    }
}

function col7(a) {
    if (activateButtons === 1) {
        if (a === 1) {
            for (let i = 0; i < 6; i++) {
                if (table[6][i].color === "blue") {
                    document.getElementById(table[6][i].id).style.backgroundColor = "red";
                    table[6][i].color = "red";
                    turn = 2;
                    column = 6;
                    file = i;
                    start(turn);
                    checkLine(6, i,3);
                    return;
                }
            }
        } else {
            for (let i = 0; i < 6; i++) {
                if (table[6][i].color === "blue") {
                    document.getElementById(table[6][i].id).style.backgroundColor = "yellow";
                    table[6][i].color = "yellow";
                    turn = 1;
                    column = 6;
                    file = i;
                    start(turn);
                    checkLine(6, i,3);

                    return;
                }
            }

        }
    }
}

function victory() {
    console.log(turn);
    activateButtons = 0;
    if (turn === 1) {
        colorPlayer = "groc";
        document.getElementById("textInici").innerHTML = `El jugador ${colorPlayer} ha guanyat!!!`;
        document.getElementById("textInici").style.backgroundColor = "yellow";
        document.getElementById("textInici").style.color = "black";
    } else {
        colorPlayer = "vermell";
        document.getElementById("textInici").innerHTML = `El jugador ${colorPlayer} ha guanyat!!!`;
        document.getElementById("textInici").style.backgroundColor = "red";
        document.getElementById("textInici").style.color = "white";
    }


}


function checkLine(c, f, n) {
    if (n === 3) {
        checkVerticalLine(c, f, n);
    } else {
        checkVerticalLineUp(c, f, n);
    }
    
    checkHorizontalLineLeft(c,f,n);
    checkDiagonalUpLeftDownRightLine(c,f,n);
    checkDiagonalUpRightDownLeftLine(c,f,n);
}

function checkVerticalLine(c,f,n) {
    if (f > 0) {
        if (table[c][f].color === table[c][(f - 1)].color) {
            consecutiveV++;
            console.log("consecutivesVdN" + consecutiveH + "torn " + turn + "tipus " + n + "punt" + c, "fila" + f);
            
            if (consecutiveV < n) {
                checkVerticalLine(c, (f - 1),n);
            } else {
                victory();
            }
        } else {            
            consecutiveV = 0;            
        }
    } else {
        consecutiveV = 0;        
    }
}

function checkVerticalLineUp(c, f,n) {
    if (f < 5) {
        if (table[c][f].color === table[c][(f + 1)].color) {
            consecutiveV++;
            console.log("consecutivesVuP" + consecutiveH + "torn " + turn + "tipus " + n + "punt" + c, "fila" + f);

            if (consecutiveV < n) {                
                checkVerticalLineUp(c, (f + 1), 2);
            } else {               
                    typeLine = 'v';
                    consecutiveV = 0;
               }            
        } else {
            consecutiveV = 0;
        }
    } else {
        consecutiveV = 0;
    }
}




function checkHorizontalLineLeft(c,f,n) {
    if (c > 0) {
        if (table[c][f].color === table[(c - 1)][f].color) {
            consecutiveH++;
            console.log("consecutivesHL" + consecutiveH + "torn " + turn + "tipus " + n + "punt" + c, "fila" + f);
            

            if (consecutiveH < n) {
                
                checkHorizontalLineLeft((c - 1), f,n)
            } else {
                if (n === 3) {
                    victory();
                } else {
                    typeLine = 'h';                    
                    consecutiveH = 0;
                }
            }
        } else {
            if (n === 3) {

                checkHorizontalLineRight(column, file, n);
            } else {
                checkHorizontalLineRight(c, f, n);
            }
        }        
    } else {
        
        if (n === 3) {

            checkHorizontalLineRight(column, file, n);
        } else {
            checkHorizontalLineRight(c, f, n);
        }
     }
}

function checkHorizontalLineRight(c,f,n) {
    if (c < 6) {
        console.log("checking HorizLineRight of " + c + "," + f + "point, type " + n);
        if (table[c][f].color === table[(c + 1)][f].color) {
            consecutiveH++;
            console.log("consecutivesHR"+consecutiveH + "torn " + turn + "tipus " + n+"punt"+c,"fila"+f);
            
            if (consecutiveH < n) {
                checkHorizontalLineRight((c + 1), f,n)
            } else {
                if (n === 3) {
                    victory();
                } else {
                    typeLine = 'h';
                    consecutiveH = 0;
                }
            }
        } else {
            console.log("el color de "+ c +","+ f + " no és igual al de "+ (c+1) + ","+f );
            consecutiveH = 0;           
        }
    } else { 
        console.log("la columna és 7");
        consecutiveH = 0;        
    }
}

function checkDiagonalUpLeftDownRightLine(c,f,n) {
    //first check down/right of the start box
    if ( c<6 && f>0 ) {
        if (table[c][f].color === table[(c + 1)][f-1].color) {
            consecutiveDULDR++;
            console.log(consecutiveDULDR + "" + turn + "" + n);           

            if (consecutiveDULDR < n) {
                checkDiagonalUpLeftDownRightLine((c + 1), (f - 1),n);
            }else {
                if (n === 3) {
                    victory();
                } else {
                    typeLine = 'duldr';                    
                }
            }
        } else {
            //then check up/left to complete the diagonal line
            checkDiagonalUpLeftLine(column,file,n);
        }
    } else {        
        checkDiagonalUpLeftLine(column,file,n);
    }
}

function checkDiagonalUpLeftLine(c,f,n) {
    if (c > 0 && f < 5) {
        if (table[c][f].color === table[(c - 1)][f + 1].color) {
            consecutiveDULDR++;
            console.log(consecutiveDULDR + "" + turn + "" + n);
            
            
            if (consecutiveDULDR < 3) {
                checkDiagonalUpLeftLine((c - 1), (f + 1),n);
            } else {
                if (n === 3) {
                    victory();
                } else {
                    typeLine = 'duldr';                    
                }
            }
        } else {
            consecutiveDULDR = 0;            
        }
    } else {
        consecutiveDULDR = 0;        
    }
}

function checkDiagonalUpRightDownLeftLine(c,f,n){
    if (c > 0 && f >0) {
        if (table[c][f].color === table[(c - 1)][f - 1].color) {
            consecutiveDURDL++;
            console.log(consecutiveDURDL + "" + turn + "" + n);
            
            if (consecutiveDURDL < 3) {
                checkDiagonalUpRightDownLeftLine((c - 1), (f - 1),n);
            } else {
                if (n === 3) {
                    victory();
                } else {
                    typeLine = 'durdl';                    
                }
            }
        } else {
            checkDiagonalUpRightLine(column,file,n);
        }
    } else {
        checkDiagonalUpRightLine(column,file,n);
    }
}

function checkDiagonalUpRightLine(c,f,n) {
    if (c < 6 && f < 5) {
        if (table[c][f].color === table[(c + 1)][f + 1].color) {
            consecutiveDURDL++;
            console.log(consecutiveDURDL + "" + turn + "" + n);
            
            
            if (consecutiveDURDL < 3) {
                checkDiagonalUpRightLine((c + 1), (f + 1),n);
            } else {
                if (n === 3) {
                    victory();
                } else {
                    typeLine = "durdl";                    
                }              
            }
        } else {
            consecutiveDURDL = 0;            
        }
    } else {
        consecutiveDURDL = 0;        
    }
}

function quit() {
    activateButtons = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            document.getElementById(table[j][i].id).style.backgroundColor = "darkblue";
            table[j][i].color = "blue";
        }
    }
}

function authomaticYellowPlayerTurn(){
    check3YellowLine();
    check3RedLine();
    check2YellowLine();
    check2RedLine();
}
var extreme1, extreme2;
var authMoveFinded = 0;

function check3YellowLine() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (table[j][i].color === "yellow") {
                //first,move to the extremes of the line
                setTimeout(check(j,i), 20);
            }
        }
    }
}
function check(j,i) {
                console.log("checking " + j + "," + i);
                checkLine(j, i, 2);
                               
                switch (typeLine) {
                    case 'h':
                      //  extreme1 = table[j][i];
                       // extreme2 = table[j + 2][i];
                        //check if in the follow column:1.in the file below there is not blue color,2.on the same file there is blue color.
                        if (j > 0) {
                            if (i > 0) {
                                if ((!(table[(j - 1)][(i - 1)].color === "blue")) && (table[(j - 1)][i].color === "blue")) {
                                    console.log('3lh');
                                    authomaticTurn((j - 1), i);
                                    authMoveFinded = 1;
                                }
                            } else if (i === 0) {
                                if (table[(j - 1)][i].color === "blue") {
                                    console.log('3lh');
                                    authomaticTurn((j - 1), i);
                                    authMoveFinded = 1;
                                }
                            }
                            else {                                
                                if (j < 4) {
                                    if (i > 0) {
                                        if ((!(table[(j + 3)][(i - 1)].color === "blue")) && (table[(j + 3)][i].color === "blue")) {
                                            console.log('3lh');
                                            authomaticTurn((j + 3), i);
                                            authMoveFinded = 1;
                                        }
                                    } else if (i === 0) {
                                        if (table[(j + 3)][i].color === "blue") {
                                            console.log('3lh');
                                            authomaticTurn((j + 3), i);
                                            authMoveFinded = 1;
                                        }

                                    }
                                    else {
                                        return;
                                    }
                                }
                            }
                        }
                        break;
                    case 'v':
                        //in this case, authomatic turn will win putting a yellow piece on table[j][i+3];
                        if (i < 3) {
                            if (table[j][(i + 3)].color === "blue") {
                                console.log('3lv')
                                authomaticTurn(j, (i + 3));
                                authMoveFinded = 1;
                                break;
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'durdl':
                        //extreme1 = table[j][i];
                        //extreme2 = table[j + 2][i + 2];
                        break;
                    case 'duldr':
                        //extreme1 = table[j][i];
                        //extreme2 = table[j + 2][i - 2];
                        break;
                    default:
                        console.log('nothingFinded')
                       
                }
                if (authMoveFinded === 1) { return; }         

    if (authMoveFinded === 0) {
       // randomMove();
    }
}
function authomaticTurn(j, i) {
    document.getElementById(table[j][i].id).style.backgroundColor = "yellow";
    table[j][i].color = "yellow";
    turn = 1;
    victory();
}
function randomMove() {
    var columnRandom = Math.floor((Math.random() * 7) + 1);
    switch (columnRandom) {
        case 1:
            col1(2);
            break;
        case 2:
            col2(2);
            break;
        case 3:
            col3(2);
            break;
        case 4:
            col4(2);
            break;
        case 5:
            col6(2);
            break;
        case 6:
            col6(2);
            break;
        case 7:
            col7(2);
            break;
    }
}
function check3RedLine() { }
function check2YellowLine() { }
function check2RedLine() {}



