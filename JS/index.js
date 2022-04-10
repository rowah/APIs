const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res =>{
        return res.json();
    })
    .then(data=> {
        const breedsObject = data.message; //turn message into object
        const breedsArray = Object.keys(breedsObject) // turn object into array
        for(i=0; i < breedsArray.length; i++) {
            const option = document.createElement('option') // create <option></option>
            option.value = breedsArray[i] // <option value= "breed"
            option.innerText = breedsArray[i]
            select.appendChild(option) // A list of options to be used in the select drop down box list of options

        }
        
    })
    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
    })

    const img = document.querySelector('.dog-img')
    const getDoggoImg = url => {
        fetch(url) // go to the above API url
            .then(res => {
                return res.json(); // get JSON message back
            })
            .then(data => {
                img.src = data.message // extract message from JSON and attach to img tag as new source
                console.log(data.message)
            })
    }