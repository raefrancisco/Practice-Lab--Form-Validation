function  validate()
{
    let inputA =document.getElementById("options").value;
    let inputC =document.getElementById("date").value;
    let inputD =document.getElementById("dateA").value;
    let inputE =document.getElementById("dateB").value;
    var correct_entry;

    if(inputA !="Choose Option" && inputC!="" && inputD!="" && inputE!="")
    {
        if(inputC < inputD)
        {
            if(inputE < inputC)
            {
                correct_entry = true;
            }
            else
            {
                alert("Please enter appropriate dates");
            }
        }
        else
        {
            alert("Please enter appropriate dates");
        }
    }
    else
    {   
        alert("Please fill up all the questions in the form");
    }

    if(correct_entry == true)
    {
        document.getElementById('submit-button').type = 'submit';
        document.getElementById('submit-button').value = 'Submit';
    }
}