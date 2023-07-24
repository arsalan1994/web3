let fruits = ["first","second","third"]
fruits.pop()
fruits.push("fourth")
console.log("Push Pop Array value : ",fruits)

fruits.shift()
console.log("After Shift ",fruits)

fruits.unshift("first")
console.log("After unshift ",fruits)

// Adding new value on specific index   0 indicates add at index
fruits.splice(2,0,"fifth")
console.log("After splice add ",fruits)


// Replace new value on specific index  1 indicates replace walue at index
fruits.splice(2,1,"sixth")
console.log("After splice replace single value",fruits)
fruits.splice(2,1,"seven","eight","nine","ten")
console.log("After splice replace multiple value",fruits)
