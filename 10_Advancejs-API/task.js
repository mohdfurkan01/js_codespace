let button = document
  .querySelector("#myBtn")
  .addEventListener("click", function () {
    console.log("checking click");

    let gitProfile = {
      name: "furkan",
      age: 22,
      myDetails() {
        let requestUrl = "https://api.github.com/users/mohdfurkan01";
        const xhr = new XMLHttpRequest();
        xhr.open("GET", requestUrl);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // Check if the request is complete and successful
            const data = JSON.parse(this.responseText);
            console.log("Followers:", data.followers);
            console.log("Following:", data.following);
            console.log("Avatar URL:", data.avatar_url);

            function handlePhoto() {
              //for image
              const div = document.createElement("div");
              console.log(div);
              div.className = "main";
              //div.id = "myId";
              div.setAttribute("title", "generated title");
              div.style.backgroundColor = "green";
              div.style.padding = "12px";
              div.style.width = "20%";
              //div.innerHTML = "coffee with code"
              div.innerHTML = `<h2>hello</h2>`; //check it
              const addText = document.createTextNode("followers");
              div.appendChild(addText);

              document.body.appendChild(div);

              //for image
              const img = document.createElement("img"); // Create img element
              console.log(img);
              img.className = "main"; // Set a class name for styling
              img.setAttribute("title", "for image");
              img.src = "https://avatars.githubusercontent.com/u/76490756?v=4";
              img.alt = "Sample Image";
              img.style.padding = "12px";
              img.style.margin = "12px";
              img.style.border = "2px solid red";
              // Append the image to the body of the document
              document.body.appendChild(img);
            }

            handlePhoto();
          }
        };
        xhr.send();
      },
    };

    // Call the method to fetch and log the details
    gitProfile.myDetails();
  });
