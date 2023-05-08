function pay() {



    //Variables to store form data

    let Sender = document.getElementById('send').value;
    let Amount = parseInt(document.getElementById('Amt').value);
    let AmountCharged = 0.01 * Amount;
    let Receiver = document.getElementById('receive').value;
    let EnterDate = document.getElementById('date').value;
    let EnterTime = document.getElementById('time').value;
    let PreviousBalance = parseInt(document.getElementById('prevAmt').value);
    //let CurrentBalance = PreviousBalance - AmountCharge;


    let Transaction = document.getElementById("Cat");
    let Transactiontext = Transaction.options[Transaction.selectedIndex].text;

    //let category = document.getElementById("Cat");




    if (Transactiontext == "Deposit") {
        Transaction_Type = "Deposit";
        CurrentBalance = PreviousBalance + Amount - AmountCharged;

    }
    else if (Transactiontext == "Withdrawal") {
        Transaction_Type = "Withdrawal";
        CurrentBalance = PreviousBalance - Amount - AmountCharged;
    }
    if (Amount <= 10000 && PreviousBalance != 0) {
        alert('Confirm Transaction');

    }
    else {
        alert('Low account Balance or Cash Out exceeded');
        alert(Cannot);
    }


    //Display Infor

    document.getElementById('myamt').innerHTML = Amount;
    document.getElementById('myreceiver').innerHTML = Receiver;
    document.getElementById('mysend').innerHTML = Sender;
    document.getElementById('mycat').innerHTML = Transaction_Type;
    document.getElementById('mycurrent').innerHTML = CurrentBalance;
    document.getElementById('mychar').innerHTML = AmountCharged;
    document.getElementById('mydate').innerHTML = EnterDate;
    document.getElementById('mytime').innerHTML = EnterTime;

}
