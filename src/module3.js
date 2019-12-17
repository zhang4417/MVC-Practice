import $ from "jquery"

let $square = $('.square')
$square.on('click', () => {
    $square.toggleClass('amt')
})