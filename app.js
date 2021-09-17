let enemeyship = 6;

class randomGenerator {
    randHullNum = () => {
        return Math.floor(Math.random() * 4) + 3
    }
    randFirepower = () => {
        return Math.floor(Math.random() * 3) + 2
    }
    randAccuracy = () => {
        return (Math.floor(Math.random() * 3) + 6) / 10
    }
    randChance = () => {
        return ((Math.random() * 0.9) + 0.1).toFixed(1)
    }

}

const battle = (playerShip, enemyShip) => {
    
    while (playerShip.isAlive && enemyShip.isAlive && enemeyship>0) {
    
        playerShip.playerAttack(enemyShip);
        if (enemyShip.isAlive) {
            enemyShip.enemyAttack(playerShip);
        }
        else if (!enemyShip.isAlive) {
            enemeyship-=1;
            console.log(enemeyship);
            let userPrompt = null;

            if(enemeyship==0)
            {
                alert("You have killed all ailens!")
                return playerShip.isAlive = false;
            }
            
         
             while(userPrompt !== "attack" || userPrompt !== "retreat")
            {
                userPrompt=prompt("Do you want to attack or retreat?", "attack or retreat")
                
                if (userPrompt === "attack") {
                    return true;

                }
                else if (userPrompt === "retreat") {

                    alert("you retreated!")
                    return playerShip.isAlive = false;
                }
        
            }
        }

    }
}

class playerShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
            this.hull = hull,
            this.firepower = firepower,
            this.accuracy = accuracy

    }
    isAlive = true;
    playerAttack(enemy) {
        alert("Player is attacking"); //player 1 attack first
        alert(`Calculating chance...`)
        let getChance = randomGen.randChance() //calculate chance of player 1
        alert(`Player chance is ${getChance} `)
        if (getChance <= this.accuracy) { //if player accuracy > player chance attack successful
            alert(`Player chance is ${getChance} and player accuracy is ${this.accuracy}`)
            alert("Player attack successful!")
            alert(`${this.name} has ${this.firepower} firepower`)
            alert(`${enemy.name} has ${enemy.hull} hp`)
            enemy.hull = enemy.hull - this.firepower
            alert(`${enemy.name} hp is now ${enemy.hull}`);
            if (enemy.hull <= 0) {
                enemy.isAlive = false;
                alert(enemy.name + " is dead")
                alert("You win!")
            }
        }
        else {
            alert(`Player chance is ${getChance} and player accuracy is ${this.accuracy}`)
            alert("Player attack unsuccessful!")
        }

    }
}



class enemyShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
            this.hull = hull,
            this.firepower = firepower,
            this.accuracy = accuracy

    }
    isAlive = true;
  

    enemyAttack(player) {
        alert("Enemy is attacking")
        let enemygetChance = randomGen.randChance();
        alert(`Enemy chance is ${enemygetChance} `)
        if (enemygetChance <= this.accuracy) {
            alert(`Enemy chance is ${enemygetChance} and enemy accuracy is ${this.accuracy}`)
            alert("Enemy attack successful!")
            alert(`${this.name} has ${this.firepower} firepower`)
            alert(`${player.name} has ${player.hull} hp`)
            player.hull = player.hull - this.firepower
            alert(`${player.name} hp is now ${player.hull}`);
            if (player.hull <= 0) {
                player.isAlive = false;
                alert(player.name + " is dead")
                alert("You lose!")
            }
        }
        else {
            alert(`Enemy chance is ${enemygetChance} and enemy accuracy is ${this.accuracy}`)
            alert("Enemy attack unsuccessful!")
        }
    }



}


let randomGen = new randomGenerator;
let hero = new playerShip("USS Schwarzenegger", 1, 5, 0.7);
let ailen1 = new enemyShip("Ailen 1", randomGen.randHullNum(), randomGen.randFirepower(), randomGen.randAccuracy());
let ailen2 = new enemyShip("Ailen 2", randomGen.randHullNum(), randomGen.randFirepower(), randomGen.randAccuracy());
let ailen3 = new enemyShip("Ailen 3", randomGen.randHullNum(), randomGen.randFirepower(), randomGen.randAccuracy());
let ailen4 = new enemyShip("Ailen 4", randomGen.randHullNum(), randomGen.randFirepower(), randomGen.randAccuracy());
let ailen5 = new enemyShip("Ailen 5", randomGen.randHullNum(), randomGen.randFirepower(), randomGen.randAccuracy());
let ailen6 = new enemyShip("Ailen 6", randomGen.randHullNum(), randomGen.randFirepower(), randomGen.randAccuracy());

alert("Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.")
alert("There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship.")
alert("Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.")

battle(hero, ailen1);
battle(hero, ailen2);
battle(hero, ailen3);
battle(hero, ailen4);
battle(hero, ailen5);
battle(hero, ailen6);






