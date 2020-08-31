// BUDGET CONTROLLER
const budgetController = (function () {

    // Some Code

})();


// UI CONTROLLER
const UIController = (function () {

    // Some Code

})();


// GLOBAL APP CONTROLLER
const controller = (function (budgetCtrl, UICtrl) {

    let ctrlAddItem = function () {

        // Get the fields input data

        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI

        console.log('Its working');

    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);