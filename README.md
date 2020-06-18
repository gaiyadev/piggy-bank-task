# PiggyVest Interest Calculator

PiggyVest is one of the best platforms that provides a means for people to achieve financial freedom and stability through savings.

Overtime various methods and patterns of investment and saving as been inculcated by PiggyVest. This methods includes Piggybank, Safelock, Flex Dollar, Flex Naira, Targets. All these are secured ways to make you save smart and quickly reach your target goals.

Considering all these my team came up with a means to calculate the interest for any amount of money a user intends to save for whatever method and for any duration of time or target. Thereby helping users set their savings right for a particular target they like to reach.

We came up with a website that calculates the amount of money you will get at the end of a period based on the amount saved overtime. The website was built using pure HTML, CSS and JavaScript and has a clean user interface.

It is easy to use and navigate around. It surely brings out the best in PiggyVest savings!.


You can calculate your interest you would gain in opening a PiggyVest account  here 

- https://piggyvestcalculator.netlify.app/

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

#### Lucid Articles 
- https://lucid.blog/emmanuelezenwigbo/post/piggyvest-calculator-app-5b3
- https://lucid.blog/shalomjsph/post/piggyvest-calculator-027

### Save With PiggyVest Today!

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a9b5e42-2ec8-44c7-b447-e20632ccb4e9/deploy-status)](https://app.netlify.com/sites/piggyvestcalculator/deploys)
