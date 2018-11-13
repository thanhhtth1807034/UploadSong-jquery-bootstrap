$('#contactForm').validate({
    rules: {
        firstName:{
          required: true,
          minlength: 5,
          maxlength: 10
        },
        lastName: {
          required: true,
          minlength: 5,
          maxlength: 15
        },
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
    messages: {
        firstName: {
            required: 'Vui lòng nhập ten',
            minlength: 'Ten qua ngan, Vui lòng nhập ít nhất {0} kí tự',
            maxlength: 'Ten qua dai, vui long nhap nhieu nhat {0} ki tu ',
        },
        lastName: {
            required: 'Vui lòng nhập họ',
            minlength: 'Họ quá ngắn, lòng nhập ít nhất {0} kí tự',
            maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} kí tự ',
        },
        password: {
            required: 'Vui lòng nhập mật khẩu',
            minlength: 'Mật khẩu qúa ngắn, Vui lòng nhập ít nhất {0} kí tự',
            maxlength: 'Mật khẩu quá dài, vui lòng nhập nhiều nhất {0} ki tu ',
        },
        email: {
            required: "vui lòng nhập email",
            email: 'vui lòng nhập email đúng định dạng',

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
            minlength: 'Vui lòng  nhập đúng {0} kí tự',
            maxlength: 'Vui lòng nhập đúng {0} kí tự'
        }
    }
});

