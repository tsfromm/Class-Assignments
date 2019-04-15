/*Calculating gratutity is a repetitive task, so let's create a couple of functions that do the work for us.

    create a variable titled billAmount and store a random number (ie: 100)
    create a function titled gratuity()
        gratutity should:
            multiply the value of billAmount by 20%
            hint: use 0.2
            return the value
    create a function titled totalWithGrat()
        totalWithGrat should:
            take in the amount as an argument
            call the gratutity function
            add that to the original bill amount
            return the total bill + gratuity
    log the total (with gratuity) to the console
        append new total to the following phrase:
            "your total including gratuity is:"
    Limitation: You can only invoke the totalWithGrat function when logging the result


    Find a way to fix the decimal point to only 2 places, ie: 100.00 
    */

    var billAmount = (100);

    function gratuity() {
       return billAmount*0.2
       
    };
    function totalWithGrat(amount) {             //amount is the argument
        return gratuity() + amount;
    };


    console.log("your total including gratuity is:",totalWithGrat().toFixed(2)); 