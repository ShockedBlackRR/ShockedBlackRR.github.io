let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let isB1Active = false;
let isB2Active = false;
b1.addEventListener("click", function() {
    isB1Active = !isB1Active; // Toggle the state
    updateButtonStyles();
});
b2.addEventListener("click", function() {
    isB2Active = !isB2Active; // Toggle the state
    updateButtonStyles();
});
window.onclick = function(event) {
    if (!event.target.matches('.button1')) {
        isB1Active = false;
        updateButtonStyles();
    }
    if (!event.target.matches('.button2')) {
        isB2Active = false;
        updateButtonStyles();
        }
}
function updateButtonStyles() {
    if (isB1Active) {
        b1.style.backgroundColor = 'white';
        b1.style.borderRadius = '2px';
        b1.style.outline = '2px solid rgb(102, 176, 172)'; // Add outline when active
    } else {
        b1.style.backgroundColor = 'yellow';
        b1.style.outline = 'none'; // Remove outline when not active
    }

    if (isB2Active) {
        b2.style.backgroundColor = 'white';
        b2.style.borderRadius = '2px';
        b2.style.zIndex = '1';
        b2.style.outline = '2px solid rgb(102, 176, 172)'; // Add outline when active
    } else {
        b2.style.backgroundColor = 'yellow';
        b2.style.zIndex = '0';
        b2.style.outline = 'none'; // Remove outline when not active
    }

    updateButtonContainerStyles();
}

function updateButtonContainerStyles() {
    if (isB1Active) {
        b1Container.style.boxShadow = '0px 8px 36px rgb(216, 216, 216)';
    } else {
        b1Container.style.boxShadow = 'none';
    }

    if (isB2Active) {
        b2Container.style.boxShadow = '0px 8px 36px rgb(216, 216, 216)';
    } else {
        b2Container.style.boxShadow = 'none';
    }
}