// function changeBackground(color) {
//     document.body.style.backgroundColor = color
//     // document.getElementById('text-color').style.color = textColor
// }
// function cha(textColor){
//     document.body.style.color = textColor
// }
// const changeTextColor = document.getElementById('text-color')

// const themeButton = document.getElementById('theme-button')


// themeButton.addEventListener('click', () => {
//     const currentColor = document.body.style.backgroundColor
//     if(!currentColor || currentColor === "white") {
//         changeBackground('black')
//         themeButton.innerText = 'Light Mode'

//     }else {
//         changeBackground('white')
//         themeButton.innerText = 'Dark Mode'

//     }
    
// })

// changeTextColor.addEventListener('click', () => {
    
//     const currentColor = document.body.style.color
//     if(!currentColor || currentColor === 'black') {
//         cha('white')
//     } else {
//         cha('black')

//     }
// })





function changeBackground(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor
    document.getElementById('text-color').style.color = textColor
}

const themeButton = document.getElementById('theme-button')

themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor
    if (!currentColor || currentColor === "white") {
        changeBackground('black', 'white')
        themeButton.innerText = 'Light Mode'
    } else {
        changeBackground('white', 'black')
        themeButton.innerText = 'Dark Mode'
    }
})
