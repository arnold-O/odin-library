const ADDButton = document.querySelector('.header-eventBtn')

const formAdd = document.querySelector('.classDisplay')
const formSubmitBtn = document.querySelector('.formSubmitBtn')


// form inputs
const titleVAlue = document.getElementById('title')

const aurthurValue =  document.getElementById('aurthurValue')
const pagesValue = document.getElementById('pagesValue')
const readValue =  document.getElementById('readValue')
// form inputs


ADDButton.addEventListener('click', function(){
    formAdd.classList.toggle('classDisplay')

})


const myLibrary = []
// submit button functionality
formSubmitBtn.addEventListener('click', function(e){
    e.preventDefault()
    console.log(titleVAlue.value)
   
    const title =document.querySelector('.titleValue').value
    const aurthur = aurthurValue.value
    const pages = pagesValue.value
    const read = readValue.value

    const newitem = {
        title,
        // aurthur,
        // pages,
        // read
    } 

    myLibrary.push(newitem)

})

console.log(myLibrary)


