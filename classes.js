/* 
We have a school to build here! In this project you will get used to thinking about classes in JavaScript and building them from a brand new data set.
*/

/* 
Pokemon
 - First we need a Pokemon class. This will be our base-class
 - Pokemon receives name, height, weight, level as props
 - Every Pokemon should also be initialized with a health attribute set to 50
 - Pokemon receives sleep as a method.
    - This method will return the pokemon's health to 100
- Pokemon receives levelUp as a method.
    - This method should increase the pokemon's level by 1

FireType
 - Now that we have a Pokemon as our base class, we'll build our FireType class.
 - FireType uses the same attributes that have been set up by Pokemon
 - FireType has the following unique props:
     - type property set to 'fire'
     - nickname property
     - weaknesses property initialized to an array with the values 'water', 'ground', 'rock'
 - FireType has the following methods:
     - fireAttack which should return the string `${name} just blew a giant fireball.'
*/

class Pokemon {
    constructor(attrs){
        this.name = attrs.name
        this.height = attrs.height
        this.weight = attrs.weight
        this.level = attrs.level
        this.health = 50
    }

    sleep(){
        this.health = 100
    }

    levelUp(){
        this.level += 1
    }
}

class FireType extends Pokemon {
    constructor(attrs){
        super(attrs)
        this.type = 'fire'
        this.nickname = attrs.nickname
        this.weaknesses = ['water', 'ground', 'rock']
    }

    fireAttack(){
        return `${this.name} just blew a giant fireball.`
    }
}





/* Uncomment below to test your code */

// const charmander = new FireType({
//     name: "Charmander",
//     height: "23in",
//     weight: "18lbs",
//     level: 7,
//     nickname: "HotHead"
// })

// console.log(charmander.fireAttack()) // Charmander just blew a giant fireball
// console.log(charmander.health) // 50
// console.log(charmander.level) // 7
// charmander.sleep()
// console.log(charmander.health) // 100
// console.log(charmander.weaknesses) // ['water', 'ground', 'rock']
// console.log(charmander.nickname) // Hothead 

