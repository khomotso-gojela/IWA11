// script.js

const root1 = document.querySelector('[data-key="order1"]')
const biscuits1 = document.querySelector('[data-key="order1"] .biscuits .count')
const donuts1 = document.querySelector('[data-key="order1"] .donuts .count')
const pancakes1 = document.querySelector('[data-key="order1"] .pancakes .count')
const status1 = document.querySelector('[data-key="order1"] .status dd:nth-child(2)')

const root2 = document.querySelector('[data-key="order2"]')
const biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count')
const donuts2 = document.querySelector('[data-key="order2"] .donuts .count')
const pancakes2 = document.querySelector('[data-key="order2"] .pancakes .count')
const status2 = document.querySelector('[data-key="order2"] .status dd:nth-child(2)')

const root3 = document.querySelector('[data-key="order3"]')
const biscuits3 = document.querySelector('[data-key="order3"] .biscuits .count')
const donuts3 = document.querySelector('[data-key="order3"] .donuts .count')
const pancakes3 = document.querySelector('[data-key="order3"] .pancakes .count')
const status3 = document.querySelector('[data-key="order3"] .status dd:nth-child(2)')

biscuits1.textContent = '10'
donuts1.textContent = '13'
pancakes1.textContent = '0'
status1.textContent = 'Delivered : false'

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending
biscuits2.textContent = '5'
donuts2.textContent = '0'
pancakes2.textContent = '2'
status2.textContent = 'Delivered : false'

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending
biscuits3.textContent = '12'
donuts3.textContent = '11'
pancakes3.textContent = '15'
status3.textContent = 'Delivered : true'