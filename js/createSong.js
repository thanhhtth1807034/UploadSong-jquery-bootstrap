var validator = $('#createSong').validate({
    rules: {
        name: {
            required: true,
        },
        singer: {
            required: true
        },
        description: {
            required: true,
        },
        author: {
            required: true,
        },
        thumbnail: {
            required: true,
        },
        link: {
            required: true,
        },
    },
    messages: {
        name: {
            required: 'vui long nhap ten bai hat',
        },
        singer: {
            required: 'vui long nhap ten ca si',
        },
        description:{
            required: 'vui long nhap mo ta',
        },
        author: {
            required:'vui long nhap ten tac gia',
        },
        thumbnail: {
            required: 'vui long nhap thumbnail',
        },
        link: {
            required: 'vui long nhap link bai hat',
        },
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderOject = {
            name: $(form["name"]).val(),
            singer: $(form["singer"]).val(),
            description: $(form["description"]).val(),
            author : $(form["author"]).val(),
            thumbnail: $(form["thumbnail"]).val(),
            link : $(form["link"]).val(),
        };
        $.ajax({
            url:CREATE_SONG_API,
            type: 'POST',
            contentType: "application/json; charset = utf-8",
            Authorization: "Basic " + localStorage.getItem('my-token'),
            beforeSend: function (xhr) {
                / Authorization header /
                xhr.setRequestHeader("Authorization", "Basic " +localStorage.getItem('my-token'));
            },
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
                alert(`Lưu thành công bài hát ${data.name}`);
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
// var btnSubmit = document.forms['song-form']['btn-submit'];
// btnSubmit.onclick = function () {
//     var txtName = document.forms['song-form']['name'];
//     var txtSinger = document.forms['song-form']['singer'];
//     var txtDescription = document.forms['song-form']['description'];
//     var txtAuthor = document.forms['song-form']['author'];
//     var txtThumbnail = document.forms['song-form']['thumbnail'];
//     var txtLink = document.forms['song-form']['link'];
//     var jsSong = {
//         name: txtName.value,
//         singer: txtSinger.value,
//         description: txtDescription.value,
//         author: txtAuthor.value,
//         thumbnail: txtThumbnail.value,
//         link: txtLink.value,
//     }
//     createSong(jsSong);
// };
// function createSong(jsSong) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 201){
//             var song = JSON.parse(this.responseText);
//             alert('creat song: ' + song.name + ' success!');
//         }
//     }
//     xhr.open('POST', CREATE_SONG_API, true);
//     xhr.setRequestHeader('content-type','application/json');
//     xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('my-token'));
//     xhr.send(JSON.stringify(jsSong));
// }