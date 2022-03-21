// code your solution here
function superbowlWin(array) {
    let winner;
    let loser;
    if (array.find(str => str.result === "W")) {
        winner = array.find(str => str.result === "W");
        return winner.year
    }
    else {
        loser = array.find(str => str.result === "W")
    }

}