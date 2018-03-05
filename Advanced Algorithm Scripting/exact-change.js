function checkCashRegister(price, cash, cid) {
    const coins = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.10,
        'QUARTER': 0.25,
        'ONE': 1.00,
        'FIVE': 5.00,
        'TEN': 10.00,
        'TWENTY': 20.00,
        'ONE HUNDRED': 100.00,
    };
    let moneyLeft = 0;
    let change = cash - price;
    cid.forEach(coin => {
        moneyLeft += coin[1];
    });

    if (moneyLeft < change) {
        return 'Insufficient Funds';
    } else {
        let returnWith = [];
        Object.values(coins).forEach(value => {
            if (change > value) {
                returnWith.push(value);
            }
        });

        returnWith.forEach((part, i) => {
            returnWith[i] = Object.keys(coins).filter(coin => coins[coin] === part)[0];
        });

        let eligibleMoney = 0;
        cid.forEach(coin => {
            if (returnWith.includes(coin[0])) {
                eligibleMoney += coin[1];
            }
        });

        if (eligibleMoney < change) {
            return 'Insufficient Funds';
        }
        if (moneyLeft - change === 0) {
            return 'Closed';
        }

        const res = [];
        returnWith = returnWith.reverse();
        returnWith.forEach(element => {
            if (change % coins[element] === 0 && change > 0) {
                res.push([element, parseFloat(change)]);
                change = 0;
            } else {
                const availableAtCheckout = cid.filter(cidling => {
                    if (cidling[0] === element) {
                        return cidling[1];
                    }
                });
                if (availableAtCheckout[0][1] > change) {
                    if (+(change - (change % coins[element]).toFixed(2)).toFixed(2) !== 0) {
                        res.push([element, parseFloat((change - (change % coins[element]).toFixed(2)).toFixed(2))]);
                        change = (change % coins[element]).toFixed(2);
                    }
                } else {
                    res.push([element, parseFloat((change - (change % availableAtCheckout[0][1])).toFixed(2))]);
                    change = (change - (change - (change % availableAtCheckout[0][1]))).toFixed(2);
                }
            }
        });
        return res;
    }
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
