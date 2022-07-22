const ADDButton = document.querySelector('.header-eventBtn')

const formAdd = document.querySelector('.classDisplay')
const formSubmitBtn = document.querySelector('#formSubmitBtn')


// form inputs
const TitleValue = document.getElementById('titleValue')

const AurthurValue =  document.getElementById('aurthurValue')
const PagesValue = document.getElementById('pagesValue')
const ReadValue =  document.getElementById('readValue')
// form inputs


ADDButton.addEventListener('click', function(){
    formAdd.classList.toggle('classDisplay')

})


const myLibrary = []
// submit button functionality
formSubmitBtn.addEventListener('click', function(e){
    e.preventDefault()
    const title = (AurthurValue.value)
    const authur = (TitleValue.value)
    const pages = (PagesValue.value)
    const read = (ReadValue.value)
   
    
    const newBook = {
       id:myLibrary.length +1,
        title,
        authur,
        pages,
        read

    }

    myLibrary.push(newBook)
    
   
    

  console.log(myLibrary)
})



