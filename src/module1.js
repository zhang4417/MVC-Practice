import $ from "jquery"

const $number = $('.number')
const $actions = $('.actions')
const $plus = $('.plus')
const $minus = $('.minus')
const $multiply = $('.multiply')
const $divide = $('.divide')
const N = localStorage.getItem('n')
$number.text(N || 100)

$plus.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    $number.text(n)
    localStorage.setItem('n', n)
})
$minus.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    $number.text(n)
    localStorage.setItem('n', n)
})
$multiply.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    $number.text(n)
    localStorage.setItem('n', n)
})
$divide.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    $number.text(n)
    localStorage.setItem('n', n)
})