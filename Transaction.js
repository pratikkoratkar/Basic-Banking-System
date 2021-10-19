// JQuery for Send Money
$("#send_money_button").click(function() {
    var TrackRecord = "" // To track record of transaction
    var Grab_S_Acc = $("#SenderAcc").val();
    var check_S_Acc = parseInt($("#SenderAcc").val());
    var Grab_R_Acc = $("#RecipientAcc").val();
    var check_R_Acc = parseInt($("#RecipientAcc").val());

    if ((check_S_Acc <= 1010) && (check_S_Acc >= 1001) && (check_R_Acc <= 1010) && (check_R_Acc >= 1001)) {


        var EnterAmount = parseInt($("#SenderAmount").val());
        console.log(EnterAmount)

        var SenderBankBalance = parseInt($("#" + Grab_S_Acc).html());
        console.log(SenderBankBalance)
        var RecipientBankBalance = parseInt($("#" + Grab_R_Acc).html());
        if (EnterAmount > SenderBankBalance) {
            alert("Insufficient Balance!!")
        } else {


            var RecipientBankBalance = RecipientBankBalance + EnterAmount;
            var SenderBankBalance = SenderBankBalance - EnterAmount;
            $("#" + Grab_S_Acc).html(SenderBankBalance);
            console.log(SenderBankBalance)
            console.log($("#" + Grab_S_Acc).html)
            $("#" + Grab_R_Acc).html(RecipientBankBalance);
            alert('Successful Transaction!! ' + EnterAmount + ' RS Transfer to Bank Account ' + Grab_R_Acc)
            var TrackRecord = EnterAmount + '/- RS Transfer from Bank Account ' + Grab_S_Acc + ' to Bank Account ' + Grab_R_Acc + ' on ' + Date()

            // to track record of transaction


            $("#HistoryBody").append("<li>" + TrackRecord + "</li>")

        }


    } else {
        alert("Enter Proper Account No")
    }

})