$(() => {
    setInterval(() => {
        $.get('cart_count.php', count => {
            $('#cart-count').text(count);
        });
    }, 3000);
    $('form :input:not(button):first').focus();
    $('.err:first').prev().focus();
    $('.err:first').prev().find(':input:first').focus();
    $('[type=reset]').on('click', e => {
        e.preventDefault();
        location = location;
    });

    
    $(document).ready(function() {

        
        $(".show-pass").on("mousedown", function() {
            $($(this).data("target")).attr("type", "text");
        }).on("mouseup mouseleave", function() {
            $($(this).data("target")).attr("type", "password");
        });

        
        $("form").on("submit", function(e) {
            const pass = $("#password").val();
            const conf = $("#confirm_password").val();
            
            if (pass !== conf) {
                e.preventDefault(); 
                $("#confirmErr").text("Passwords do not match!");
                $("#confirm_password").focus();
            }
        });

        
        $("#confirm_password").on("input", function () {
            if ($(this).val() === $("#password").val()) {
                $("#confirmErr").text("");
            }
        });

    });


    

});