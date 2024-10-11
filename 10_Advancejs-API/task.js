let button = document
  .querySelector("#myBtn")
  .addEventListener("click", function () {
    console.log("checking click");

    let gitProfile = {
      myDetails() {
        let requestUrl = "https://api.github.com/users/mohdfurkan01";
        const xhr = new XMLHttpRequest();
        xhr.open("GET", requestUrl);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log("Followers:", data.followers);
            console.log("Following:", data.following);
            console.log("Avatar URL:", data.avatar_url);

            function showDetails() {
              //const div = document.createElement("div");
              //console.log(div);
              //div.className = "main";
              //div.id = "myId";
              //div.setAttribute("title", "generated title");
              //div.style.backgroundColor = "green";
              //div.style.padding = "12px";
              //div.style.width = "20%";
              //div.innerHTML = "coffee with code"
              //div.innerHTML = <h2>${data.followers}</h2>; //check it
              // div.innerHTML = <img src=${data.avatar_url} alt="nothing">;
              // const addText2 = document.createTextNode("Followers");
              // div.appendChild(addText2);
              // document.body.appendChild(div);

              // Container for Followers and Following
              const container = document.createElement("div");
              container.className = "main-container";

              // Followers block
              const followersDiv = document.createElement("div");
              followersDiv.className = "main";
              followersDiv.innerHTML = `<h2>${data.followers}</h2>`;
              const addText = document.createTextNode("Followers");
              followersDiv.appendChild(addText);
              container.appendChild(followersDiv);

              // Following block
              const followingDiv = document.createElement("div");
              followingDiv.className = "main1";
              followingDiv.innerHTML = `<h2>${data.following}</h2>`;
              const addText1 = document.createTextNode("Following");
              followingDiv.appendChild(addText1);
              container.appendChild(followingDiv);

              document.body.appendChild(container);

              // Avatar Image
              const img = document.createElement("img");
              img.src = data.avatar_url;
              img.alt = "GitHub Avatar";
              img.className = "avatar-img";
              img.style.width = "150px"; // Adjust size
              document.body.appendChild(img);
            }

            showDetails();
          }
        };
        xhr.send();
      },
    };

    gitProfile.myDetails();
  });

//For knowledge purpose
function showDetails() {
  // Create a container for followers and following
  const container = document.createElement("div");
  container.style.display = "flex"; // Make them in a row
  container.style.justifyContent = "space-between";
  container.style.padding = "10px";
  container.style.width = "50%";
  container.style.margin = "10px auto";
  container.style.border = "2px solid gray";
  container.style.backgroundColor = "#f4f4f4";

  // Followers div
  const followersDiv = document.createElement("div");
  followersDiv.className = "main";
  followersDiv.style.textAlign = "center";
  followersDiv.style.width = "45%";
  followersDiv.style.backgroundColor = "green";
  followersDiv.style.padding = "12px";
  followersDiv.style.color = "white";
  followersDiv.innerHTML = `<h2>${data.followers}</h2>`;
  const followersText = document.createTextNode("Followers");
  followersDiv.appendChild(followersText);

  // Following div
  const followingDiv = document.createElement("div");
  followingDiv.className = "main1";
  followingDiv.style.textAlign = "center";
  followingDiv.style.width = "45%";
  followingDiv.style.backgroundColor = "tomato";
  followingDiv.style.padding = "12px";
  followingDiv.style.color = "white";
  followingDiv.innerHTML = `<h2>${data.following}</h2>`;
  const followingText = document.createTextNode("Following");
  followingDiv.appendChild(followingText);

  // Append followers and following to the container
  container.appendChild(followersDiv);
  container.appendChild(followingDiv);
  document.body.appendChild(container);

  // Create and append the avatar image below
  const img = document.createElement("img");
  img.src = data.avatar_url;
  img.alt = "GitHub Avatar";
  img.style.display = "block";
  img.style.margin = "20px auto";
  img.style.width = "150px"; // Adjust size
  img.style.border = "3px solid red";
  img.style.borderRadius = "50%"; // Circular avatar
  document.body.appendChild(img);
}

showDetails();
