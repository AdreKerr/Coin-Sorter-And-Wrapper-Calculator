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
for(let i = 0; i<wrapper.length; i++){
    console.log(`${coins[i]} Wrappers  -=- ${wrapper[i]}`);
    console.log(`${coins[i]} Remaining -=- ${remaining[i]}`)
}//end for loop wrapper/remaining
//Use console.log to display the toal amount in dollars.
for(let i = 0; i<coinsTotal.length; i++){
    console.log(`  ${coins[i]} Total   -=- $${coinsTotal[i].toFixed(2)}`);
}//end for loop Total 
console.log(`           Total   -=- $${total.toFixed(2)}`);

