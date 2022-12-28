const button = document.getElementById('nav-button')
const navigation = document.getElementById('nav-bar')

button.addEventListener('click', () => {
    navigation.classList.toggle('active')
})