$(document).ready(() => {
    /**
    * Event handler for when the user attempts to login
    */
    $('#log-form').submit((event) => {
        event.preventDefault();

        const email = event.target.inputEmail.value;
        const password = event.target.inputPassword.value;

        if(email.length == 0 || password.length == 0) {
            swal('Error',
                'Please enter an email and password.', //TODO: this should be from a file
                'error');

            return;
        }

        $.ajax({
            type: 'POST',
            url: '/login',
            dataType: 'json',
            data: {
                email,
                password
            },
            success(token) {
                $(location).attr('href', '/feed');
            },
            error(errMsg) {
                swal('Oops...',
                    errMsg.responseJSON.body,
                    'error');
            }
        });
    });
});