function checkEligibility(){
    const INVALID_STYLE="border-style: solid; border-color: red;";
    let dayElem = document.getElementById("autoday");
    let monthElem = document.getElementById("automonth");
    let yearElem = document.getElementById("autoyear");
    // Check Day 
    let day = parseInt(dayElem.value), month = parseInt(monthElem.value), year = parseInt(yearElem.value);
    if (day <= 0)
    dayElem.style=INVALID_STYLE;
    if (month <= 0)
    monthElem.style=INVALID_STYLE;
    if (year < 1901)
    yearElem.style=INVALID_STYLE;

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
const defaultOption="<option value=0>0</option>";
const MIN = 1, DAY_MAX = 31, MONTH_MAX = 12, MIN_YEAR = 1901;

let dayOptions=defaultOption, monthOptions=defaultOption, yearOptions=defaultOption;

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