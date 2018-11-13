// $('form[name="login-form"] [name="btn-submit"]').click(function () {
//     alert("11");
// });
// document.forms['login-form']['btn-submit'].onclick = function () {
//     alert(document.forms['login-form']['email'].value);
// }
// $(document).ready(function() {
$('#contactForm').validate({
        rules: {
            password: {
                required: true,
                minlength: 5,
                maxlength: 15
            },
            'confirm-password':{
              equalTo :'[name = "password"]'
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            password: {
                required: 'Vui lòng nhập mật khẩu',
                minlength: 'mat khau qua ngan, Vui lòng nhập ít nhất {0} kí tự',
                maxlength: 'mat khau qua dai, vui long nhap nhieu nhat {0} ki tu ',
            },
            email: {
                required: "vui long nhap email",
                email: 'vui long nhap email dug dinh dang',

            },
        }
});
// });