//PROJECT:
//COIN SORTER AND WRAPPER CALCULATOR

//OBJECTIVE:
//create a Javascript program that calculaters the toal value of coins in US currency (Pinnies, nickels, dimes, and quarters) and sorts them into coin wrappers.
//The program will then output the number of coin wrappers needed and the toal amount in dollars.

//INSTRUCTIONS:
//1.Define Variables for Coins:
let coins = [" Pennies"," Nickels","   Dimes","Quarters"];
let coinsValue = [0.01,0.05,0.10,0.25];
let HowManyCoins = [1104,95,35,125];
let coinsTotal = [,,,];
let wrapper = [,,,];
let remaining = [,,,];
let total;

//2.Calcualte Total Value of Coins:
//write code to calcuate the total value of each type of coin in dollars
coinsTotal[0] = coinsValue[0] * HowManyCoins[0];
coinsTotal[1] = coinsValue[1] * HowManyCoins[1];
coinsTotal[2] = coinsValue[2] * HowManyCoins[2];
coinsTotal[3] = coinsValue[3] * HowManyCoins[3];
//calclate the combined toal value of all coins    
total = coinsTotal[0] + coinsTotal[1] + coinsTotal[2] + coinsTotal[3];

//3.Sort Coins into Wrappers:
//Use the standard capacity for each type of coin wrapper:
//Calculate the number of wrappers needed for each type of coin
//Pennies : 50 cent per wrapper
wrapper[0] = Math.floor(HowManyCoins[0]/50);
remaining[0] = HowManyCoins[0] % 50;
//Nickels: 40 coins per wrapper
wrapper[1] = Math.floor(HowManyCoins[1]/40);
remaining[1] = HowManyCoins[1] % 40;
//Dimes: 50 coins per wrapper
wrapper[2] = Math.floor(HowManyCoins[2]/50);
remaining[2] = HowManyCoins[2] % 50;
//Quarters: 40 coins per wrapper
wrapper[3] = Math.floor(HowManyCoins[3]/40);
remaining[3] = HowManyCoins[3] % 40;
//calculate the remaining coins that do not fill a wrapper completely

//4.Output Results
//Use console.log to display the number of wrappers needed for each type fo coin
    console.log(`================================`);
for(let i = 0; i<wrapper.length; i++){
    console.log(`${coins[i]} Wrappers  -=- ${wrapper[i]}`);
    console.log(`${coins[i]} Remaining -=- ${remaining[i]}`);
    console.log(`================================`);
}//end for loop wrapper/remaining
//Use console.log to display the toal amount in dollars.
for(let i = 0; i<coinsTotal.length; i++){
    console.log(`  ${coins[i]} Total   -=- $${coinsTotal[i].toFixed(2)}`);
}//end for loop Total 
console.log(`================================`);
console.log(`           Total   -=- $${total.toFixed(2)}`);
console.log(`================================`);



//space
console.log(`     `);
console.log(`     `);
console.log(`     `);



//Coin Questions
var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'];

//variables
let pennyCurrencyTotal = 0;
let nickelCurrencyTotal = 0;
let dimeCurrencyTotal = 0;
let quarterCurrencyTotal =0;
let Total =0;
let CoinTotal = [0,0,0,0];

//for loop to find up how many of each coin there is
for (let i = 0; i<challengeData.length;i++){
    if (challengeData[i] === 'penny'){
        CoinTotal[0]++;
    } else if (challengeData[i] === 'nickel'){
        CoinTotal[1]++;
    } else if (challengeData[i] === 'dime'){
        CoinTotal[2]++;
    } else if (challengeData[i] === 'quarter'){
        CoinTotal[3]++;
    };//end if else tree
}//end for loop

//total of each cooin
pennyCurrencyTotal = CoinTotal[0] * 0.01;
nickelCurrencyTotal = CoinTotal[1] * 0.05;
dimeCurrencyTotal = CoinTotal[2] * 0.10;
quarterCurrencyTotal = CoinTotal[3] * 0.25;

//total
total = dimeCurrencyTotal + pennyCurrencyTotal + nickelCurrencyTotal + quarterCurrencyTotal;

//Console.Log total
console.log(`===============================`);
console.log(` HOW MANY OF EACH COIN WE HAVE`);
console.log(`===============================`);
console.log(`  penny count -=- ${CoinTotal[0]}`);
console.log(` nickel count -=- ${CoinTotal[1]}`);
console.log(`   dime count -=- ${CoinTotal[2]}`);
console.log(`quarter count -=- ${CoinTotal[3]}`);
console.log(`===============================`);
console.log(`   COUNT * COST = COIN TOTAL`);
console.log(`===============================`);
console.log(`  penny Total -=- $${pennyCurrencyTotal.toFixed(2)}`);
console.log(` nickel Total -=- $${nickelCurrencyTotal.toFixed(2)}`);
console.log(`   dime Total -=- $${dimeCurrencyTotal.toFixed(2)}`);
console.log(`quarter Total -=- $${quarterCurrencyTotal.toFixed(2)}`);
console.log(`===============================`);
console.log(`EACH COIN TOTAL ADDED TOGETHER`);
console.log(`===============================`);
console.log(`        Total -=- $${total.toFixed(2)}`);
console.log(`===============================`);