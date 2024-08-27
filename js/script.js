const darkModeIsActive = () => {
    const flag = document.querySelector("#darkmodeButton");
    const body = document.querySelector("body");

    if (flag.checked) {
        console.log('убран')
        body.classList.remove("darkmode");
    } else {
        body.classList.add("darkmode");
    }
};

const darkmodeButton = document.querySelector('#darkmodeButtonContainer');

darkmodeButton.addEventListener('click', darkModeIsActive);

// плавная прокрутка до якоря
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
