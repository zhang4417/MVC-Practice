import $ from "jquery"

const $circle = $('.circle')
$circle.on('mouseover mouseout', () => {
    $circle.toggleClass('gradient')
})