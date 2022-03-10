/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");
const cE = (elType) => document.createElement(elType);
const getProfileData = async (profName) => {
  let data = await fetch(`https://api.github.com/users/${profName}`);//.then(result => result.json());
return data.json();
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ "tetondan", "osmocom", "justsml", "luishrd", "bigknell" ];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const makeCard = (gitPro) => {
  let card = cE("div");
  card.classList.add("card");
  card.appendChild(cE("img")).src = gitPro["avatar_url"];
  let infoDiv = cE("div");
  card.appendChild(infoDiv).classList.add("card-info");
  let theName = cE("h3");
  theName.textContent = gitPro.name;
  infoDiv.appendChild(theName).classList.add("name");
  let theUserName = cE("p");
  theUserName.innerText = gitPro.login;
  infoDiv.appendChild(theUserName).classList.add("username");
  infoDiv.appendChild(cE("p")).innerHTML = `Profile:<a href='${gitPro.url}'>${gitPro.url}</a>`;
  infoDiv.appendChild(cE("p")).innerHTML = `Followers: ${gitPro.followers}`;
  infoDiv.appendChild(cE("p")).innerHTML = `Following: ${gitPro.following}`;
  infoDiv.appendChild(cE("p")).innerHTML = `Bio: ${gitPro.bio}`;
  return card;

  

  }
//getProfileData("attaris978").then(val => cards.appendChild(makeCard(val)));


const printCards = (profilesArray) => {
  profilesArray.forEach(val => getProfileData(val).then(val => cards.appendChild(makeCard(val))));
}

printCards(followersArray);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
