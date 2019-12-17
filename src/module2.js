import $ from "jquery"

const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')
$tabBar.on('click', (e) => {
    let $li = $(e.target)
    console.log($li)
    let index = $li.index()
    console.log(index)
    $tabBar.children().eq(index).addClass('bg').siblings().removeClass('bg')
    $tabContent.children().eq(index).addClass('react').siblings().removeClass('react')
    console.log(1)
})
$tabBar.children().eq(0).trigger('click')