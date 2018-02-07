new Vue({
    el: '#app',
    data: {
        firstName: 'Gaurav',
        lastName: 'Sharma',
        brotherFirstName: 'Saurabh',
        googleSearchURL: 'www.google.com',
        value1: '',
        value2: ''
    },
    methods: {
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        getBrotherFullName: function (first, last) {
            return first + ' ' + last;
        },
        buttonClicked: function () {
            alert('Gaurav Sharma is developing this app.');
        },
        buttonClicked2: function (message, event) {
            console.log(event);
            alert(message);
        },
        myListener: function () {
            alert('Congratulations!!');
        },
        handlerx: function () {
            alert('Nicel Click');
        },
        handlerxx: function () {
            alert('Nicel Click again');
        },
        inputHandler: function (event) {
            this.value2 = event.target.value;
            //alert(event.target.value);
        }
    }
});