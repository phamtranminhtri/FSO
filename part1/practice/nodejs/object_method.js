const arto = {
    name: "Tri",
    age: 20,
    education: "Undergrad",
    greet: function() {
        console.log("hello, i am " + this.name)
    }
}

arto.greet()

arto.growOlder = function() {
    this.age += 1
}
arto.growOlder()
console.log(arto.age)