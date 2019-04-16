/*
Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. 
They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a 
free chocolate.

For example, Bobby has  to spend on bars of chocolate that cost  each. He can turn in  wrappers to receive 
another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, 
leaving him with , for more bars. After eating those two, he has  wrappers, turns in  leaving him with  
wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After 
eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars.

Function Description
Complete the chocolateFeast function in the editor below. It must return the number of chocolates Bobby can 
eat after taking full advantage of the promotion.

chocolateFeast has the following parameter(s):

n: an integer representing Bobby's initial amount of money
c: an integer representing the cost of a chocolate bar
m: an integer representing the number of wrappers he can turn in for a free bar
*/

function chocolateFeast(money, chocolate_cost, cost_wrappers) {
    let chocolates = money / chocolate_cost,
        num_wrappers = chocolates;
    while (num_wrappers >= cost_wrappers) {
        chocolates += 1;
        num_wrappers -= cost_wrappers;
        num_wrappers += 1;
    }
    return Math.floor(chocolates);
}
