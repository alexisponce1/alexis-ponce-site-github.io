const zipCodeInput = document.querySelector("#zip-code");
const passwordInput = document.querySelector("#password-input");




async function getZip() {

    let zipCodeResults = await fetch("https://csumb.space/api/cityInfoAPI.php?zip=" + zipCodeInput.value);

    let zipData = await zipCodeResults.json();
    console.log(zipData);

    let cityInfo = document.createElement("p");
    let latitudeInfo = document.createElement("p");
    let longitudeInfo = document.createElement("p");

    if (zipCodeInput.value == zipData.zip) {

        let city = document.querySelector("#city");
        let latitude = document.querySelector("#latitude");
        let longitude = document.querySelector("#longitude");

        cityInfo.textContent = zipData.city;
        city.appendChild(cityInfo);

        latitudeInfo.textContent = zipData.latitude;
        latitude.appendChild(latitudeInfo);

        longitudeInfo.textContent = zipData.longitude;
        longitude.appendChild(longitudeInfo);

    } else {
        cityInfo.textContent = "";
        latitudeInfo.textContent = "";
        longitudeInfo.textContent = "";
    }
}



let city = document.querySelector("#city");
let latitude = document.querySelector("#latitude");
let longitude = document.querySelector("#longitude");

zipCodeInput.addEventListener("change", (event) => {
    getZip();
    city.textContent = "City: ";
    latitude.textContent = "Latitude: ";
    longitude.textContent = "Longitude: ";
})

async function password(){
    let getPasswords = await fetch("https://csumb.space/api/suggestedPassword.php?length=8");

    let passWords = await getPasswords.json();
    console.log(passWord);
    let 
    for (let passWord of passWords){
        let pass = document.createElement("p");

    }

}


passwordInput.addEventListener("Click", (event) => {
    password();
})




