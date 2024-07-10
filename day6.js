//EXERCISE - 1 Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// let nums = [1, 2, 3, 0, 4, 5, 6]
// let changed = nums.map(number => number * number)
//
// console.log(changed)


//EXERCISE - 2 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let nums  = [1, 2, 3, 0, 4, 5, 6]
// let numbers = nums.filter(number => number > 0)
// console.log(numbers)


//EXERCISE - 3 Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// let nums = [1, 2, -3, 0, 4, -5, 6]
// let check = nums.filter(number => number > 0)
// console.log(check)


//EXERCISE - 4 Дан массив с числами. Оставьте в нем только отрицательные числа.

// let nums = [1, 2, -3, 0, 4, 5, -6]
// let filtered = nums.filter(number => number < 0 )
// console.log(filtered)


//EXERCISE - 5  Дан массив с числами. Оставьте в нем только четные числа.

// let nums = [1, -2, 3, 0, 4, -5, 6]
// let edited = nums.filter(number => number % 2 === 0)
// console.log (edited)


//EXERCISE = 6  Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

//  let txt = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// let changed = txt.filter(txt => txt.length >= 5)
// console.log(changed)


//EXERCISE - 7 Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// let num = [1, 2, -3, 0, -4, 5, -6]
// let count = num.filter(num => num < 0).length
// console.log(count)


//EXERCISE - 8 [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// const num = [1,2,3,4]
// const array = ['a','b','c','d']
// const together = num.concat(array)
// console.log(together)


//EXERCISE - 9 [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']

// let num = [2, 3, 4, 5];
// let str = 'hello world'
// num.push(str)
// console.log(num)


//EXERCISE - 10  [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// let num = [2, 3, 4, 5]
// let str = 'hello world'
// arr = str.split('')
// let together = num.concat(arr)
// console.log(together)


//EXERCISE - 11 // [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

// const txt =  [2, 3, 4, 5]
// const str =  'hello world'
// arr = str.split('')
// let together = txt.concat(arr, txt)
//
// console.log(together)


//EXERCISE - 12 FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
// (На самом деле, этот вопрос подходит для собеседований, и, говорят, он позволяет отсеивать довольно большое число кандидатов. Поэтому, когда вы решите эту задачу, можете себя похвалить.)

let arr = [0]
let a = 'fizz'
let b = 'buzz'
for (let i = 1; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log('${i} fizzbuzz')
    }
    else if ((i%3) === 0) {
    console.log(`${i} fizz`)
    }
    else if ((i%5) === 0){
    console.log(`${i} fizz`)
    }
    else {
    console.log(`${i}`)
    }
    console.log()
    }









