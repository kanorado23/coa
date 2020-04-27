const coaForm = document.querySelector('form')
const search = document.querySelector('input')


coaForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    fetch('https://storage.cloud.google.com/coa_bucket/' + user + '.pdf').then((response) => {
        //Credential = 'same-origin';
        response.redirect()
    })

})