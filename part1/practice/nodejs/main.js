const x = 1
let y = 5

console.log(x, y)

y += 10
console.log(x, y)

y = "texte"
console.log(x, y)

const t = [1, -1, 3]
t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5)
console.log(t2)

const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => "<li>" + value + "</li>")
console.log(m2)

const [first, second, ...rest] = t2
console.log(first, second, rest)


const object1 = {
    name: "Tri",
    age: 20,
    education: "College"
}

const object3 = {
    name: {
        first: "Tri",
        last: "Pham"
    },
    grades: [2, 3, 5],
    department: "HCMUT"
}

console.log(object1.name)
const fieldAge = "age"
console.log(object1[fieldAge])

object1.address = "HCM"
object1["dorm"] = 609

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
    console.log(p)
    return p * p
}

const square2 = p => p * p

function product(a, b) {
    return a * b
}

console.log(product(2, 4))

const average = function (a, b) {
    return (a + b) / 2
}

console.log(average(100, 200))
