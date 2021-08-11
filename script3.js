document.getElementById("button2").disabled = true;
document.getElementById("button3").disabled = true;
class Game {
    teams = [];
    currentTeam;
    winningTeam;
    assignTeam(team1, team2) {
        this.teams.push(team1)
        this.teams.push(team2)
        this.currentTeam = team1;
    }

    getCurrentTeam() {
        return this.currentTeam;
    }

    switchTeam(){        
    this.currentTeam = this.teams[1];
    }
}


class Team {
    name;
    players = [];
    currentPlayer;
    totalScore = 0;
    game;

    constructor(teamName,game) {
        this.name = teamName
        this.game = game;
    }

    assignPlayer(player) {
        this.players.push(player)
    }

    assignCurrentPlayer(player) {
        this.currentPlayer = this.players[0];
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }
    scoreboard(score)
    {        
        this.totalScore += score;
    }

    switchPlayer(currentPlayerId){
        if(currentPlayerId === 11 || count === 0)
        {
            count = 0;
            loop = 0;
            document.getElementById("button").disabled = true; 
            if (this.name === 'India')
            {
            alert("Team Switch HIT2")
            }
            document.getElementById("button2").disabled = false;       
            this.game.switchTeam();
            if (this.name === "Srilanka")
            {
                count2 = 0;
            }
        }
        if(currentPlayerId < 11)
        {
            this.currentPlayer = this.players[currentPlayerId];
            loop = 0;
        }
    }
}

var loop = 0;
class Player {
    id;
    name;
    totalScore = 0;
    balls = [];
    team;

    constructor(playerName,team,id) {
        this.name = playerName
        this.team = team;
        this.id = id;
    }
    hit() {
        let score = Math.floor(Math.random() * 7);
        this.totalScore = this.totalScore + score;
        this.balls.push(score);
        this.team.scoreboard(score);
        let a = document.getElementById(`${this.team.name}${this.name}`);
        a.getElementsByTagName("td")[`${loop}`].innerText = `${score}`; 
        a.getElementsByTagName("td")[6].innerText = `${this.totalScore}`;
        loop+= 1; 
        if(score == 0 || this.balls.length === 6){
            this.team.switchPlayer(this.id)
        }
    }
}

let game = new Game();

// Create indian Team
let indianTeam = new Team("India",game);
for (let index = 0; index < 11; index++) {
    indianTeam.assignPlayer(new Player(`Player ${index + 1}`,indianTeam,index + 1));
}
indianTeam.assignCurrentPlayer()

// Create Srilankan Team
let sriTeam = new Team("Srilanka",game);
for (let index = 0; index < 11; index++) {
    sriTeam.assignPlayer(new Player(`Player ${index + 1}`,sriTeam,index + 1));
}
sriTeam.assignCurrentPlayer();
game.assignTeam(indianTeam, sriTeam);

function hit() {
    let currentTeam = game.getCurrentTeam()
    let currentPlayer = currentTeam.getCurrentPlayer();
    currentPlayer.hit()
}

function result ()
{
    document.getElementById("team1").innerText = `${indianTeam.totalScore}`;
    document.getElementById("team2").innerText = `${sriTeam.totalScore}`;
    if (indianTeam.totalScore > sriTeam.totalScore)
    {
    document.getElementById("result").innerText = `Team 1 Won by ${indianTeam.totalScore -sriTeam.totalScore} Runs`;
    alert("Team 1 Won");
    let newvalue = 0;
    let topplayer;
    indianTeam.players.forEach(ele => {
        if (ele.totalScore> +newvalue)
        {
        newvalue = +ele.totalScore;
        topplayer = ele.name;
        }
    })
    document.getElementById("top").innerText = `Man of the Match ${topplayer}`;
    }
    else
    {
    document.getElementById("result").innerText = `Team 2 Won by ${sriTeam.totalScore - indianTeam.totalScore} Runs`;
    alert("Team 2 Won");
    let newvalue = 0;
    let topplayer;
    sriTeam.players.forEach(ele => {
        if (ele.totalScore> +newvalue)
        {
        newvalue = +ele.totalScore;
        topplayer = ele.name;
        }
    })
    document.getElementById("top").innerText = `Man of the Match ${topplayer}`;
    }
    }

    var count = 20;
   function setTime ()
    {
        document.getElementById("timer").innerText = `${count}`
        count = count-1;
        if (count < 0)
        {
            document.getElementById("button").disabled = true;
            loop = 0;
            game.switchTeam();
            document.getElementById("button2").disabled = false;
        }
    }
    var firsttimer = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                var interval = setInterval(function(){
                    setTime()
                    if (count < 0){
                      clearInterval(interval); 
                    }
                  }, 1000);
            }
        };
    })();
    var count2 = 20;
    function setTime2 ()
    {
        document.getElementById("timer").innerText = `${count2}`
        count2 = count2-1;
        if (count2 < 0)
        {
            document.getElementById("button2").disabled = true;
            alert("Match Over Click Generate Result");
            document.getElementById("button3").disabled = false;
        }
    }
    var secondtimer = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                var interval = setInterval(function(){
                    setTime2()
                    if (count2 < 0){
                      clearInterval(interval); 
                    }
                  }, 1000);
            }
        };
    })();
