/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

function monkeys(name, species, food) {
    var monkey = {
      name: name,
      species: species,
      foodsEaten: [],
      eatSomething: function eatSomething(food='banana') {
        this.foodsEaten.push(food);
      },
      introduce: function introduce() {
        return `\nmonkey name ${this.name}. it is ${this.species} and it Eats  ${this.foodsEaten} :D`;
      }
    };
    console.log(monkey.introduce());
    monkey.eatSomething('Indomi');
console.log('\t---------------------------------\n');
    console.log(monkey.introduce());
    console.log(`monkey's name:${monkey.name}`);
    console.log(`monkey's species: ${monkey.species}`);
  }
  
  let firstMonkey = monkeys("Smart monkey", "The smartest monkeys", "rice");
  let secondMonkey = monkeys("Genious monkey", "The most genious monkeys", "Orange");
  let thirdMonkey = monkeys("Bright monkey", "The brightest monkeys", "apple");