//$ = require('jquery')
// sessionStorage に保存したデータを取得する
let data = sessionStorage.getItem('store_data');
if (data) {
    $(".content").append(data);
}

$('#next').on('click', function () {
    let html = $(".content").append($(".content").html());
    //sessionStorage にデータを保存する
    sessionStorage.setItem('store_data', $(".content").html());
})
