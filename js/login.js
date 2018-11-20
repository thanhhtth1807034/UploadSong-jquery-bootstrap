// $('form[name="login-form"] [name="btn-submit"]').click(function () {
//     alert("11");
// });
// document.forms['login-form']['btn-submit'].onclick = function () {
//     alert(document.forms['login-form']['email'].value);
// }
// $(document).ready(function() {
// });


var validator = $('#loginForm').validate({
    rules: {
        password: {
            required: true,
            minlength: 3
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
            minlength: 'mat khau qua ngan, Vui lòng nhập ít nhất {0} kí tự'
        },
        email: {
            required: "vui long nhap email",
            email: 'vui long nhap email dug dinh dang',
        },
        'confirm-password': {
            equalTo: 'pass khong giống nhau.'
        },
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderOject = {
            password: $(form["password"]).val(),
            email: $(form["email"]).val(),
        };
        $.ajax({
            url: LOGIN_API,
            type: 'POST',
            contentType: "application/json; charset = utf-8",
            data: JSON.stringify(senderOject),
            success: function (data, textStatus, jqXHR) {
                // alert('Success')
                console.log('Success');
                console.log(data);
                console.log('-----');
                console.log(data.responseText);
                console.log('-----');
                console.log(textStatus);
                console.log('-----');
                console.log(jqXHR);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                    $('summary')
                        .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                    validator.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});

var btnLogin = document.forms['login-form']['btn-login'];
btnLogin.onclick = function () {
    var txtEmail = document.forms['login-form']['email'];
    var pwdPassword = document.forms['login-form']['password'];
    var jsLog = {
        password: pwdPassword.value,
        email: txtEmail.value,
    }
    var jsonDataLogin = JSON.stringify(jsLog);
    postLoginData(jsonDataLogin);
}
function postLoginData(jsonDataLogin) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            var member = JSON.parse(this.responseText);
            alert("token:" + member.token + " secretToken:" + member.secretToken);
            // console.log(member.token)
            localStorage.setItem('my-token',member.token);
        }
    }
    xmlHttpRequest.open('POST', LOGIN_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonDataLogin);
}








































// $('#contactForm').validate({
//     rules:{
//         firstName: {
//             required: true,
//             minLength: 5,
//             maxlength: 15
//         },
//         lastName: {
//             required: true,
//             minLength: 5,
//             maxlength: 15
//         },
//         email: {
//             required:true,
//             email: true
//         },
//         password:{
//             required: true,
//             minLength: 5,
//             maxlength: 20
//         },
//         'confirm-password':{
//             required: true,
//             maxlength:20,
//             minLength: 5,
//             equalTo: '[name = "password"]'
//         },
//     },
//     messages:{
//         firstName: {
//             required: 'vui lòng nhập tên .',
//             minLength: 'tên bạn quá ngắn , vui lòng nhập lại đúng {0} kí tự .',
//             maxlength: 'tên bạn quá dài vui lòng nhập lại đúng {0} kí tự.'
//         },
//         lastName: {
//             required: 'vui lòng nhập họ .',
//             minLength: 'họ bạn quá ngắn , vui lòng nhập lại đúng {0} kí tự.',
//             maxlength: 'họ bạn quá dài vui lòng nhập lại đúng {0} kí tự.'
//         },
//         email: {
//             required: 'vui lòng nhập email.',
//             email : 'vui lòng nhập email đúng định dạng.'
//         },
//         password: {
//             required: 'vui lòng nhập mk của bạn.',
//             minLength: 'mk bạn quá ngắn , vui lòng nhập lại đúng {0} kí tự .',
//             maxlength: 'mk bạn quá dài vui lòng nhập lại đúng {0} kí tự.'
//         },
//         'confirm-password': {
//             required: 'vui lòng nhập mk cua bạn',
//             minLength: 'mk bạn quá ngắn , vui lòng nhập lại đúng {0} kí tự .',
//             maxlength: 'mk bạn quá dài vui lòng nhập lại đúng {0} kí tự.'
//         },
//     }
// });