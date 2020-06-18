//to get the button
const calculate = document.querySelector('.calculate');

//event listener added to the button when clicked; the calculated values are rendered on the webpage 
calculate.addEventListener('click', function() {
    const text_saved = document.getElementById('text_saved');

    const total_ = document.getElementById('total_');

    const interest_rate = document.getElementById('interest_rate');

    const interest_text = document.getElementById('total_returns');

    const total = document.getElementById('total');


    //savings frequency value
    const frequency = document.getElementById('frequency');
    const frequencyValue = frequency.value;

    //savings frequency value
    const package = document.getElementById('package');
    const packageValue = package.value;

    //value of capital
    const amount = document.getElementById('amount');
    const amountValue = amount.value;

    //duration(in years)
    const duration = document.getElementById('duration_text');
    const durationInYears = duration.value;

    const savings_duration = document.getElementById('savings_duration');

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
    return amountValue * (rate/100) * time * durationInYears;
    }

    const returns = interest(amountValue, durationInYears);
    const interest_amount = new Intl.NumberFormat('en-US').format(interest(amountValue, durationInYears));

    //this is to the total calculated savings without interest
    const savings = (amountValue * time * durationInYears)
    const total_savings = new Intl.NumberFormat('en-US').format((amountValue * time * durationInYears));

    //total balance after interest is added
    totalBalance = (parseInt(savings) + parseInt(returns));
    console.log(totalBalance);

    total.innerHTML = `N${new Intl.NumberFormat('en-US').format((totalBalance))}`; //total balance

    text_saved.innerHTML = `You have saved N${total_savings} with an interest amount of N${interest_amount}`; //breakdown of total balance

    interest_rate.innerHTML = `${rate}%`; //rate based on package chosen

    interest_text.innerHTML = `M${interest_amount}`; //interest value calculated

    total_.innerHTML = `N${total_savings}`; //total savings without interest

    savings_duration.innerHTML = `${durationInYears} years`;
});

