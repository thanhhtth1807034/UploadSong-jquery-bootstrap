// $('#contactForm').validate({
//     rules: {
//         firstName:{
//           required: true,
//           minlength: 5,
//           maxlength: 10
//         },
//         lastName: {
//           required: true,
//           minlength: 5,
//           maxlength: 15
//         },
//         password: {
//             required: true,
//             minlength: 5,
//             maxlength: 15
//         },
//         'confirm-password':{
//             equalTo :'[name = "password"]'
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         phone: {
//             required: true,
//             maxlength: 10,
//             minlength: 10,
//             number: true
//         },
//         avatar: {
//             required: true,
//             url: true
//         },
//         address: {
//             required: true,
//             minlength: 10,
//             maxlength: 30
//         },
//     },
//     messages: {
//         firstName: {
//             required: 'Vui lòng nhập ten',
//             minlength: 'Ten qua ngan, Vui lòng nhập ít nhất {0} kí tự',
//             maxlength: 'Ten qua dai, vui long nhap nhieu nhat {0} ki tu ',
//         },
//         lastName: {
//             required: 'Vui lòng nhập họ',
//             minlength: 'Họ quá ngắn, lòng nhập ít nhất {0} kí tự',
//             maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} kí tự ',
//         },
//         password: {
//             required: 'Vui lòng nhập mật khẩu',
//             minlength: 'Mật khẩu qúa ngắn, Vui lòng nhập ít nhất {0} kí tự',
//             maxlength: 'Mật khẩu quá dài, vui lòng nhập nhiều nhất {0} ki tu ',
//         },
//         email: {
//             required: "vui lòng nhập email",
//             email: 'vui lòng nhập email đúng định dạng',
//
//         },
//         phone:{
//             required: 'Vui lòng nhập số điện thoại.',
//             maxlength: 'Vui lòng nhập đúng {0} số',
//             minlength: 'Vui lòng nhập đúng {0} số',
//             number: 'Vui lòng nhập số điện thoại đúng định dạng.'
//         },
//         avatar: {
//           required: 'Vui lòng nhập avatar.',
//           url: 'VUi lòng nhập avatar đúng định dạng'
//         },
//         address: {
//             required: 'vui lòng nhập địa chỉ.',
//             minlength: 'Vui lòng  nhập đúng {0} kí tự',
//             maxlength: 'Vui lòng nhập đúng {0} kí tự'
//         }
//     }
// });
//

var validator = $('#registerForm').validate({
    rules:{
        firstName: {
            required: true,
            minlength: 5,
            maxlength: 15
        },
        lastName: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        email: {
            required:true,
            email: true
        },
        password:{
            required: true,
            minlength: 2,
            maxlength: 20
        },
        'confirm-password':{
            equalTo: '[name = "password"]'
        },
        phone: {
            required: true,
            maxlength: 10,
            minlength: 10,
            number: true
        },
        avatar: {
            required: true,
            url: true
        },
        address: {
            required: true,
            minlength: 10,
            maxlength: 30
        },
    },
    messages:{
        firstName: {
            required: 'vui lòng nhập tên .',
            minlength: 'tên bạn quá ngắn , vui lòng nhập lại tối thiểu {0} kí tự .',
            maxlength: 'tên bạn quá dài vui lòng nhập lại tối đa  {0} kí tự.'
        },
        lastName: {
            required: 'vui lòng nhập họ .',
            minlength: 'họ bạn quá ngắn , vui lòng nhập lại tôi thiểu {0} kí tự.',
            maxlength: 'họ bạn quá dài vui lòng nhập lại tối đa {0} kí tự.'
        },
        email: {
            required: 'vui lòng nhập email.',
            email : 'vui lòng nhập email đúng định dạng.'
        },
        password: {
            required: 'vui lòng nhập mk của bạn.',
            minlength: 'mk bạn quá ngắn , vui lòng nhập lại tối thiểu {0} kí tự .',
            maxlength: 'mk bạn quá dài vui lòng nhập lại tối đa {0} kí tự.'
        },
        'confirm-password': {
            equalTo: 'pass k giống nhau.'
        },
        phone:{
            required: 'Vui lòng nhập số điện thoại.',
            maxlength: 'Vui lòng nhập đúng {0} số',
            minlength: 'Vui lòng nhập đúng {0} số',
            number: 'Vui lòng nhập số điện thoại đúng định dạng.'
        },
        avatar: {
          required: 'Vui lòng nhập avatar.',
          url: 'VUi lòng nhập avatar đúng định dạng'
        },
        address: {
            required: 'vui lòng nhập địa chỉ.',
            minlength: 'Vui lòng  nhập tối thiểu {0} kí tự',
            maxlength: 'Vui lòng nhập tối đa {0} kí tự'
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderOject = {
            firstName: $(form["firstName"]).val(),
            lastName: $(form["lastName"]).val(),
            password: $(form["password"]).val(),
            address : $(form["address"]).val(),
            phone: $(form["phone"]).val(),
            gender: $(form["gender"]).val(),
            email: $(form["email"]).val(),
            avatar: $(form["avatar"]).val(),
            birthday: formatDate($(form["birthday"]).val()),
        };
        $.ajax({
            url:REGISTER_API,
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
                // alert('Error')
                console.log('error');
                console.log(jqXHR);
                console.log('-----');
                console.log(jqXHR.responseText);
                console.log('-----');
                console.log(jqXHR.responseJSON.error);
                console.log('-----');
                console.log(textStatus);
                console.log('-----');
                console.log(errorThrown);
                // if(jqXHR.responseJSON.error.size > 0) {
                //     validator.showErrors({
                //         firstName: 'Message error: ' + jqXHR.responseJSON.error.size
                //     });
                // } else  {
                //     validator.showErrors({
                //         email: 'Message error: ' + jqXHR.responseJSON.error.email
                //     });
                // }

                if (Object.keys(jqXHR.responseJSON.error).length > 0){
                    $('summary')
                        .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                    validator.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

}