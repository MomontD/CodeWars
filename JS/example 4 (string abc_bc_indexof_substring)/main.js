//Complete the solution so that it returns true
//if the first argument(string) passed in ends with the 2nd argument (also a string).
// Завершіть розв’язання так, щоб воно повертало true, якщо перший переданий
// аргумент (рядок) закінчувався другим аргументом (також рядком).

// Варіант №1 через функцію пошуку підстроки в строці *.indexOf("символи", з якого індексу шукати) - якщо не знаходить
// повертає -1 , якщо знаходить повертає позицію(індекс)

let comparison = (string , symbols) =>
    (string.indexOf (symbols,string.length-symbols.length) > 0) ? true : false
console.log(comparison("abcd", "bc"))


// Варіант №2 , також через indexOf але без стрілочної ф-ї

{
    function comparison(string, symbols)
        {
            if (string.indexOf(symbols, string.length - symbols.length) > 0)
            {
                return true
            }
            else
            {
                return false
            }
        }
    console.log(comparison("abcd", "bc"));
}
// Варіант №3 , перебираємо символи в стрічці та порівнюємо їх за допомогою ф-ї *.substring(з якого індексу ,
// по який індекс виводити символи)

{
    function comparison(string, symbols)
        {
            if (symbols.length >= string.length)
                {
                    console.log("стрічка символів більша за саму стрічку");
                }
            else if (symbols === string.substring(string.length-symbols.length,string.length-1))
                {
                    return true
                }
             else
                 {
                     return false
                 }
        }
    console.log(comparison("abcd", "bc"));
}
