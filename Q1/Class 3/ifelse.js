"use strict";
function calc_credits(balance, min_balance, max_balance) {
    let total_balance = balance + min_balance + max_balance;
    if (total_balance >= 250 && total_balance <= 300) {
        console.log("Credit Score A+");
    }
    else if (total_balance >= 220 && total_balance <= 250) {
        console.log("Credit Score B");
    }
    else if (total_balance >= 180 && total_balance <= 220) {
        console.log("Credit Score C");
    }
    else if (total_balance >= 150 && total_balance <= 180) {
        console.log("Credit Score D");
    }
    else if (total_balance >= 0 && total_balance <= 150) {
        console.log("Credit Score Low");
    }
    else {
        console.log("input must be less then 100");
    }
}
calc_credits(100, 200, 78);
