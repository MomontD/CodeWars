

let mass = "Hello my diar friend",
    new_mass = [],
    reverse_word,
    index=0

new_mass=mass.split(" ")

console.log(new_mass)

for (let word of new_mass)
    {
        if (word.length >= 5)
        {
            reverse_word = word.split("") //розбиваємо слово на новий масив літер
            reverse_word = reverse_word.reverse() // ф-я reverse записує їх задом на перед
            reverse_word = reverse_word.join("") // ф-я join обєднує масив літер в слово
            // або це все записати однією стрічкою з викликом цих функцій :
            // reverse_word = word.split("").reverse().join("")
            new_mass[index] = reverse_word
        }
        index++
    }
new_mass = new_mass.join(" ")

console.log(new_mass)

// split() - розділяє текст на масив зі слів або слово на масив з літер
//         має аргумент сепаратор , в якому потрібно вказати розділювач по якому будуть
//         відділятись слова , для прикоаду , пробіл , кома і т.д.

// reverse() - ф-я яка працює з МАСИВАМИ і змінює положення елементів задом на перед

// join() - ф-я яка обєднує слова , елементи в один елемент (букви в слово , цифри в число і т.д.)
