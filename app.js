var num = [1, 3, 5, 2, 90, 20]
var words = ["dog", "wolf", "by", "family", "eaten"]
var people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

function leastToGreatest(num) {
    num.sort((a,b) => a - b)
    console.log(num)
}
leastToGreatest(num)


function largestToSmallest(num) {
    num.sort((a, b) => b - a)
    console.log(num)
}
largestToSmallest(num)

function lengthSort(words) {
    words.sort((a, b) => a.length - b.length)
    console.log(words)
}
lengthSort(words)


function alphabetical(words) {
    let newNames = words.sort();
    console.log(newNames)
}   
alphabetical(words)

function byAge(people) {
    people.sort((a, b) => a.age - b.age)
    console.log(people)
}   
byAge(people)