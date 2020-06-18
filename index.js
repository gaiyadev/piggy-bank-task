const amount_saved = document.getElementById('amount_saved');
const text_saved = document.getElementById('text_saved');
const interest_rate = document.getElementById('interest_rate');
const interest_text = document.getElementById('interes_text');
const total_ = document.getElementById('total');
const duration_text = document.getElementById('duration_res')

//savings frequency value
const frequency = document.getElementById('frequency');
const frequencyValue = frequency.value;

//savings frequency value
const package = document.getElementById('package');
const packageValue = package.value;

//value of capital
const amount = document.getElementById('amount');
const amountValue = amount.innerHTML;

//duration(in years)
const duration = document.getElementById('duration_text');
const durationInYears = duration.innerHTML;

//to get the button
const calculate = document.querySelector('.calculate');



let time; // this would be the amount of days, weeks or months in a year

let rate; // rate depending on the package value

//switch statement to determine the rate based on package value
switch (packageValue) {
    case 'Flex Dollar':
        rate = 6;
        break;
    case 'SafeLock':
        rate = 13;
        break;
    default:
        rate = 10;
        break;
}

//switch statement to determine time based on saving frequency
switch (frequencyValue) {
    case 'Daily':
        time = 365;
    case 'Weekly':
        time = 52;
        break;
    case 'Monthly':
        time = 12;
        break;
    default:
        time = 1;
        break;
}

//function to calculate interest
const interest = (capitalValue, durationInYears) => {
   return (amountValue * (rate/100) * time * durationInYears).toFixed(2);
}

//this is to the total calculated savings without interest
const total_savings = (amountValue * time * durationInYears).toFixed(2);

//total balance after interest is added
const total_balance = total_savings + interest(amountValue, durationInYears);


//event listener added to the button when clicked; the calculated values are rendered on the webpage 
calculate.addEventListener('click', () => {
    amount_saved.innerHTML = total_balance; //total balance

    text_saved.innerHTML = `You have saved N${total_savings} with an interest rate of N${total_balance - total_savings}`; //breakdown of total balance

    interest_rate.innerHTML = `${rate}%`; //rate based on package chosen

    // interest_text.innerHTML = total_balance - total_savings; //interest value calculated

    total_.innerHTML = total_savings; //total savings without interest

    // duration_res.innerHTML = ` ${duration_text}  years `
    console.log('yo')
    console.log(
        frequencyValue
    );
    
});

