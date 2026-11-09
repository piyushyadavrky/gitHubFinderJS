
let profileName = document.querySelector('.nameDiv');
let usernameDiv = document.querySelector('.usernameDiv');
let bio = document.querySelector('.bioShowDiv');
let repoCount = document.querySelector('.reposDiv');
let followersCount = document.querySelector('.followersDiv');
let followingCount = document.querySelector('.followingDiv');
let country = document.querySelector('.countryShowDiv');
let githubLink = document.querySelector('.githubLinkDiv');
let profilePhoto = document.querySelector('.photoDiv');

let inputBoxvar = document.querySelector('.inputBox');

let searchButtonvar= document.querySelector('.searchButton');

let username = inputBoxvar.value;


inputBoxvar.addEventListener('input', () => {
  inputBoxvar.classList.remove('baadmeinPhoto');
});

searchButtonvar.addEventListener('click', ()=> {
  
  if(inputBoxvar.value!==''){
    githubuserFetchData();
  }
  else{
    inputBoxvar.classList.add('baadmeinPhoto');
  }
});

inputBoxvar.addEventListener('keydown', (event)=> {
  if(event.key==='Enter'){
   if(inputBoxvar.value!==''){
    githubuserFetchData();
  }
  else{
    inputBoxvar.classList.add('baadmeinPhoto');
  }
  }
});



async function githubuserFetchData() {
  username = inputBoxvar.value;
  const response = await  fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  console.log(data);
  updateData(data);
}

function updateData(data) {
  profileName.innerText=data.name || 'Name not added';
  usernameDiv.innerText=data.login;
  repoCount.innerText=data.public_repos || '0';
  followersCount.innerText=data.followers || '0';
  followingCount.innerText=data.following || '0';
  country.innerText=data.location || 'location not added';
  githubLink.innerText=data.html_url;
  bio.innerText=data.bio || 'no bio';
  profilePhoto.innerHTML=`<img src="${data.avatar_url}" class="photo">`;
}
