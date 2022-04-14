document.querySelector('button').addEventListener('click', getImage)



function getImage() {
let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=R9a2clywVw5G9wR5KrOgemaIUZSdhW7Z4axzcIXL&date=${date}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    //  document.querySelector('img').src = data.hdurl
    if(data.media_type === "image") {
    document.querySelector('img').src = data.hdurl
    document.querySelector('iframe').src = ''

} else {
    document.querySelector('img').src = ''
    document.querySelector('iframe').src = data.url

}
     document.querySelector('h2').innerText = "Photographer: " + data.copyright
     
     document.querySelector('h3').innerText = "Image Title: " + data.title
     document.querySelector('div').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}