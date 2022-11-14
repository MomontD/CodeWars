//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
// Don't forget the space after the closing parentheses!


let arr = [1,2,3,4,5,6,7,8,9,0]

function phone_number (in_arr)
    {
        let number_string = "(" + in_arr[0] + in_arr[1] + in_arr[2] + ") " + in_arr[3] + in_arr[4] +
            in_arr[5] + "-" + in_arr[6] + in_arr[7] + in_arr[8] + in_arr[9]

        return number_string

        //return number_string = "(" + in_arr[0] + in_arr[1] + in_arr[2] + ") " + in_arr[3] + in_arr[4] +
        //             in_arr[5] + "-" + in_arr[6] + in_arr[7] + in_arr[8] + in_arr[9]

    }

console.log(phone_number(arr));

//function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') '
//       + numbers.substring(3, 6)
//       + '-'
//       + numbers.substring(6);
// }

//function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
//
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
//
//   return format;
// }