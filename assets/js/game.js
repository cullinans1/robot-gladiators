//Game States
//"WIN" - player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
// "LOSE" - player robots health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 5;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
            //Asking if player wants to fight or skip
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT or 'SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
        //confirming player wants to quit
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from player
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
        //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in enemyHealth var
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award money for winning
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //Subtract the value of enemyAttack from value of playerHealth and use that result to update the value in playerHealth var
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so that we know it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney= 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(enemyNames[i]);
        }
        else {
            window.alert("You have lost your robot in battle! Game OVER!");
            break;
        }
    }
var endGame = function() {
    //if player alive, player wins!
    if (playerHealth > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        alert("You've lost your robot in battle. :(");
    }
    var playAgainConfirm = confirm("Would you like to play again?");
        if (playAgainConfirm) {
            startGame();
        } else {
            alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};
var shop = function() {
    console.log("entered shop");
};
    endGame();
};

//start game when page loads
startGame();

