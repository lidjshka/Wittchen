$('#submit-message').click(function(ev) {
    if ($('form')[0].checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/lidjshka@gmail.com", 
            method: "POST",
            data: {
                Name: $('#name').val(),
                Tel: $('#tel').val(),
                Email: $('#email').val(),
                Message: $('#message').val(),
            },
            dataType: "json"
        }).done(function() {
            $('form')[0].reset();
            $('#form-note').html('<p>Спасибо!</p>')
        }).fail(function(){
            $('#form-note').html('<p>Ошибка! Заполните поля</p>')
        });
    }
});