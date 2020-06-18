# PiggyVest Interest Calculator
This App calculates the Interest made in saving with the amazing **PiggyVest App.**

You can calculate your interest you would gain in opening an account with them here 
- [input depolyed website]

Under the hood, the application operates by reading in the users preferred package plan as well as his _Deposit_ and _Time_ they intends to save.

The interest rates are
- Standard (  10% )
- Flex Dollar ( 6% )
- Safe Lock ( 13% )

Once the user chooses his packges, the interest is calculated
```
const interest = (capitalValue, durationInYears) => {
   return (amountValue * (rate/100) * time * durationInYears).toFixed(2);
}
```


The users total savings and balance is then displayed to the HTML.

```
const total_balance = total_savings + interest(amountValue, durationInYears);
```
### Save With PiggyVest Today!

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a9b5e42-2ec8-44c7-b447-e20632ccb4e9/deploy-status)](https://app.netlify.com/sites/piggyvestcalculator/deploys)
