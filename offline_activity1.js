//Global variables
var prevCalc = 0;
var calc = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num - 1;
            document.frmCalc.txtNumber.value = num;
        }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num + 1;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function sub() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Sub";
        }
}

function div() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Div";
        }
}

function times() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Times";
        }
}

function pow() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Pow";
        }
}

function square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    document.frmCalc.txtNumber.value = Math.pow(num, 2);
}

function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    document.frmCalc.txtNumber.value = Math.pow(num, .5);
}

function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    document.frmCalc.txtNumber.value = Math.floor(num);
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    document.frmCalc.txtNumber.value = Math.round(num);
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc === "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc === "Sub"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc === "Div"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc === "Times"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc === "Pow"){
                var total = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total;
            } else if (calc === "Square"){
                var total = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total;
            }
        }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}