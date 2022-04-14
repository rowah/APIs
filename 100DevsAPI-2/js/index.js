document.querySelector('button').addEventListener('click', getImage)



function getImage() {
let identifier = document.querySelector('input').value

fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=R9a2clywVw5G9wR5KrOgemaIUZSdhW7Z4axzcIXL`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0])
      document.querySelector('div').innerText = data[i].caption
      document.querySelector('h2').innerText = data.coords.date

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}