///Задание - 1

// const input = document.querySelector('#int')
// const btn = document.querySelector('#btn')
// const result = document.querySelector('#result')

// const reqExp = /^1|^2/


// btn.addEventListener('click', () => {
//    if(reqExp.test(input.value)) {
//         result.innerText = "succes"
//         result.style.color = 'green'
//    }else{
//     result.innerText = "failed"
//     result.style.color = 'red'
//    }
// })


/// Задание - 2

const day = document.querySelector('#day')
const month = document.querySelector('#month')
const button = document.querySelector('button')

const reqDay = /^(0?[1-9]|[12][0-9]|3[01])$/

const reqMonth = /^([1-9]|1[0-2])$/


button.addEventListener('click', () => {
    if(reqMonth.test(month.value) || reqDay.test(day.value)){
        console.log('TRUE!')
    }else{
        console.log('FALSE!')
    }
})


    