function checkEligibility(){
    const INVALID_STYLE="border-style: solid; border-color: red;";
    const VALID_STYLE="border-style: solid; border-color: green;";

    let dayElem = document.getElementById("autoday");
    let monthElem = document.getElementById("automonth");
    let yearElem = document.getElementById("autoyear");
    // Check Day 
    let day = parseInt(dayElem.value), month = parseInt(monthElem.value), year = parseInt(yearElem.value);
    if (day <= 0)
    dayElem.style=INVALID_STYLE;
    else
    
    dayElem.style=VALID_STYLE;
    if (month <= 0)
    monthElem.style=INVALID_STYLE;
    else
    monthElem.style=VALID_STYLE;

    if (year < 1901)
    yearElem.style=INVALID_STYLE;
    else
    yearElem.style=VALID_STYLE;

   // let dateFormated = year+"/"+(month -=1)+"/"+day
    let dateSelected = new Date(year, month -1, day);
    //let dateSelected = new Date(dateFormated);

    let dateDiff_In_Time = new Date().getTime() - dateSelected.getTime();
    let yearDiff = Math.round(dateDiff_In_Time /(1000 * 3600 * 24 *365));
    let checkmsg = document.getElementById("check-result");
    // console.log(" Day Type "+typeof(day) + " Val "+day);
    // console.log(" Month Type "+typeof(month) + " Val "+month);
    // console.log(" Year Type "+typeof(year)+ " Val "+year);

    if (day >= 0 && month >= 0 && year >= 1901)
    checkmsg.innerHTML = "<p>Here your check result will be displayed This is hidden by default Only showed after submit button is clicked "+yearDiff+"</p>";
    else
    checkmsg.innerHTML = "<p>The Date of Birth is invalid. Please select a valid day, month and year (after 1901)</p>";

}

function generateDaysMonthsAndYears(){

    // Ajax Post Sample 
    $.ajax({
        type: "POST",
        url: "https://reqbin.com/echo/post/json", 
        data: `{
            "Id": 78912,
            "Customer": "Jason Sweet",
        }`,
        success: function(res) {
            console.log(res);
        }, 
        dataType: "json"
    });
    // End  Ajax Call

    fetch('https://reqbin.com/echo/get/json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.text())
.then(txt =>
{
    let obj = JSON.parse(txt);
    document.getElementById("ajaxcall").innerHTML = "" + obj.success;

});

    const defaultOption="<option value=0>0</option>";
    const MIN = 1, DAY_MAX = 31, MONTH_MAX = 12, MIN_YEAR = 1901;

    let dayOptions="<option value=0>Day</option>", monthOptions="<option value=0>Month</option>", yearOptions="<option value=0>Yeah</option>";

    let currYear = new Date().getFullYear();

    for (let index = MIN; index <= DAY_MAX; index++) {
    dayOptions += "<option value="+index+">"+index+"</option>";
    }
    document.getElementById("autoday").innerHTML = dayOptions;

    for (let index = MIN; index <= MONTH_MAX; index++) {
    monthOptions += "<option value="+index+">"+index+"</option>";
    }
    document.getElementById("automonth").innerHTML = monthOptions;

    // document.getElementById("currYear").innerHTML = currYear;
    for (let index = MIN_YEAR; index <= currYear; index++) {
    yearOptions += "<option value="+index+">"+index+"</option>";
    }
    document.getElementById("autoyear").innerHTML = yearOptions;
}