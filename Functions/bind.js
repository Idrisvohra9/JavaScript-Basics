// #Function Borrowing

// At first it may seem like the bind function is similar to apply or call function but it works differently

// to learn the workings of the bind function we are creating a wizard object that has a spell function and a person function that does not have the wizard's power to cast the spell. We will give the person power to the spell by binding the spell function to the person function

const wizard = {
    name: "Idris",
    castSpell: function (spellName) {
        console.log(`${this.name} casts a spell ${spellName}!`);
    }
}

const person = {
    name: "Aryan",
}

console.log("The wizard: ");
wizard.castSpell("Abra ka dabra");
console.log();

// Let's bind the power to cast a spell of wizard to the person:

// the bind function/method returns the bound function in which the object has taken place of 'this' keyword and the returned function can be called later
const personWithPower = wizard.castSpell.bind(person, "Shazam");

console.log("The person: ")
console.log("with bind:")
personWithPower();

// we can do the same with applying the power to the person. 
console.log("with apply:");
wizard.castSpell.apply(person, ["Shazam bruh"]);
console.log()

// or calling the power on the person.
console.log("with call:");
wizard.castSpell.call(person, "Shazam mate");
console.log()

console.log("passing argument on invocation");
// we can pass the argument on the method call/invocation as well:

const personWithPower2 = wizard.castSpell.bind(person);

// Like this:
personWithPower2("How do I? lol");

//# Preserving the value of 'this':

//| When a function is used as a callback, this is lost.

console.log("Casting the spell of wizard after 2 seconds without bind")
setTimeout(wizard.castSpell, 2000);

// Output: undefined casts a spell undefined!

// The bind() method solves this problem.

console.log("Casting the spell of wizard after 2 seconds with bind");
const wizardWithBind = wizard.castSpell.bind(wizard, "Something lol");

setTimeout(wizardWithBind, 2000);

// Output: Idris casts a spell Something lol!

const some = (function () { return 1 })();
console.log(some);