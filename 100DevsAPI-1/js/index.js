document.querySelector('button').addEventListener('click', getImage)


function getImage() {
let date = document.querySelector('input').value

// if(camera == fhaz) {
    // fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=R9a2clywVw5G9wR5KrOgemaIUZSdhW7Z4axzcIXL`)
    // .then(res => res.json()) // parse response as JSON
    // .then(data => {
    //   console.log(data.photos[80].camera.name)
    //  document.querySelector('img').src = data.photos[0].img_src
    //  document.querySelector('h2').innerText = data.photos[0].camera.name
    // })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });
//} else if (camera == mast) {
    // fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=R9a2clywVw5G9wR5KrOgemaIUZSdhW7Z4axzcIXL`)
    // .then(res => res.json()) // parse response as JSON
    // .then(data => {
    //   console.log(data.photos[80].camera.name)
    //  document.querySelector('img').src = data.photos[0].img_src
    //  document.querySelector('h2').innerText = data.photos[0].camera.name
    // })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });

//}
fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=R9a2clywVw5G9wR5KrOgemaIUZSdhW7Z4axzcIXL`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.photos[80].camera.name)
     document.querySelector('img').src = data.photos[0].img_src
     document.querySelector('h3').innerText = data.photos[0].camera.name
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}