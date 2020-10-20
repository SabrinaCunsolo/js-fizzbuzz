// Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
// al posto dei multipli di 3, deve stampare "Fizz"
// al posto dei multipli di 5, deve stampare "Buzz"
// al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"
// Nome repo: js-fizzbuzz

// stampo i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
    // console.log(i);
    document.write (i)
    // se multiplo di 3 dovrò scrivere "Fizz"
    if (i % 3 == 0) {
        // console.log("Fizz")
        document.write ("Fizz")
    }
}
