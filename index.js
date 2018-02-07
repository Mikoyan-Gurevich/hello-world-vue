new Vue({
    el: '#app',
    data: {
        firstName: 'Gaurav',
        lastName: 'Sharma',
        brotherFirstName: 'Saurabh',
        googleSearchURL: 'www.google.com'
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
        }
    }
});