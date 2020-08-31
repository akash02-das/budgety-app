// BUDGET CONTROLLER
const budgetController = (function () {

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

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

    let setupEventListeners = function () {
        let DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    let ctrlAddItem = function () {

        // Get the fields input data
        let input = UICtrl.getInput();


        // Add the item to the budget controller

        // Add the item to the UI

        // Calculate the budget

        // Display the budget on the UI

    };

    return {
        init: function () {
            console.log('App has started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();