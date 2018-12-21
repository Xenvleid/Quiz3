var quoteCont = document.querySelector(".quoteContainer");

function getRandom() {
    fetch('http://api.techlaunch.io:88/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            quoteCont.innerHTML = `
            <p>${data.text}</p>
            <input type="radio" id="author"
            <p>${data.author}</p>
            <input type="radio" id="author"
            <p>${data.author}</p>
            <input type="radio" id="author"
            <p>${data.author}</p>
            <button type="submit" value="Submit">Submit</button>
  `
        })
        .catch()
}

getRandom();