// Set initial count
let count = 0;

// Select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Show the Node list
//console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){

        // Show the current target
        //console.log(e.currentTarget);

        // Show all the classes the current element has
        //console.log(e.currentTarget.classList);

        // Select class list
        const styles = e.currentTarget.classList;

        // Check the operation type and execute it
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        // Change counter color
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }

        // Update the counter value
        value.textContent = count;
    });
} );
