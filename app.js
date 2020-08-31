// BUDGET CONTROLLER
const budgetController = (function () {

    // Some Code

})();


// UI CONTROLLER
const UIController = (function () {

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function () {
            return DOMStrings;
        }
    };

})();


// GLOBAL APP CONTROLLER
const controller = (function (budgetCtrl, UICtrl) {

    let DOM = UICtrl.getDOMStrings();

    let ctrlAddItem = function () {

        // Get the fields input data
        let input = UICtrl.getInput();
        console.log(input);

        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI

    };

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);