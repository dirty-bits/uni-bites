$(document).ready( function() {
    /**
    * Event handler for when the user attempts to login
    */
    $("#log-form").submit(function (event) {
        event.preventDefault();

        var email = event.target.inputEmail.value;
        var password = event.target.inputPassword.value;

        if(email.length == 0 || password.length == 0) {
            swal('Error',
                'Please enter an email and password.', // TODO: this should be from a file
                'error');

            return;
        }

        $.ajax({
            type: 'POST',
            url: '/login',
            dataType: 'json',
            data: {
                'user_name': email,
                'password': password
            },
            success: function(token){
                $(location).attr('href', '/feed');
            },
            error: function(errMsg) {
                swal( 'Oops...',
                    errMsg.responseJSON.body,
                    'error' );
            }
        });
    });
});