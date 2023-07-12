const bodyMargin = () => {
    document.body.classList.add("everything");
  };
  
  export const renderArticle = () => {
    bodyMargin();
  
    const main = document.querySelector("main");
    main.insertAdjacentHTML(
      "beforeend",
      `
      <article class="container flex stack-medium column justify-content-center">
      <section class="card-user-info grid  align-items-center">
        <img class="user-avatar" src="" alt="" />
        <div class="grid column user-main-info">
          <h2 class="info-username highlighted"></h2>
          <div class="info-at-user">@<span class="info-at"></span></div>
          <span class="info-datetime available">Joined <time></time></span>
        </div>
        <p class="info-bio"></p>
      </section>
      <section class="card-user-data">
        <ul class="data-list grid justify-items-center">
          <li class="flex column align-items-center">
            <h3 class="repos-item">
              Repos
            </h3>
            
            <span class="highlighted data-repos"></span>
            
            </li>
            <li class="flex column align-items-center">
            <h3 class="repos-item">
            Followers
            </h3> 
            <span class="highlighted data-followers"></span>
            
            </li>
            <li class="flex column align-items-center">
            <h3 class="repos-item">Following</h3> 
            <span class="highlighted data-following"></span>
            
          </li>
        </ul>
      </section>
      <section class="card-user-location">
        <ul id="user-links" class="grid stack-normal">
          <li class="location-city flex align-items-center"><address ></address></li>
          <li class="location-twitter flex align-items-center"><a target="_blank" href=""></a></li>
          <li class="location-url flex align-items-center"><a target="_blank" href=""></a></li>
          <li class="location-website flex align-items-center"> <a target="_blank" href=""></a></li>
        </ul>
      </section>
    </article>
      `
    );
  };
  
  export const cleanArticle = () => {
    const main = document.querySelector("main");
    const article = document.querySelector("article");
  
    article ? main.removeChild(article) : undefined;
  };
  
  const renderIcons = () => {
    const locationCity = document.querySelector(".location-city");
    const twitter = document.querySelector(".location-twitter");
    const url = document.querySelector(".location-url");
    const blog = document.querySelector(".location-website");
  
    locationCity.insertAdjacentHTML(
      "afterbegin",
      `
    <svg
    
    
    class="icon"
      fill=" #fefefe"
      xmlns="http://www.w3.org/2000/svg" 
      height="1em" 
      viewBox="0 0 384 512">
      <path
      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
    </svg>
    `
    );
    twitter.insertAdjacentHTML(
      "afterbegin",
      `
    <svg
    
      fill=" #fefefe"
      class="icon"
      xmlns="http://www.w3.org/2000/svg" 
      height="1em" 
      viewBox="0 0 512 512">
  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
      
      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
    </svg>
    `
    );
  
    url.insertAdjacentHTML(
      "afterbegin",
      `
    <svg
    
      fill=" #fefefe"
      xmlns="http://www.w3.org/2000/svg" 
      height="1em" 
      class="icon"
      viewBox="0 0 640 512">
      <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
      
      d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
    </svg>
    `
    );
  
    blog.insertAdjacentHTML(
      "afterbegin",
      `
    <svg
    
      class="icon"
      fill="#fefefe"
      xmlns="http://www.w3.org/2000/svg" 
      height="1em" 
      viewBox="0 0 448 512">
      <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
      
      d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
  </svg>
    `
    );
  };
  
  const renderInfo = (user) => {
    const username = document.querySelector(".info-username");
    const followers = document.querySelector(".data-followers");
    const following = document.querySelector(".data-following");
    const dateTime = document.querySelector("time");
    const infoAt = document.querySelector(".info-at");
    const infoBio = document.querySelector(".info-bio");
    const datarepos = document.querySelector(".data-repos");
    const locationCity = document.querySelector(".location-city");
    const twitter = document.querySelector(".location-twitter");
    const blog = document.querySelector(".location-website");
    const url = document.querySelector(".location-url");
    const avatar = document.querySelector(".user-avatar");
  
    const unknown = "Not available";
    const noBio = "This profile has no bio.";
  
    if (user.name) {
      username.textContent = user.name;
      url.innerHTML = `<a href=https://github.com/${user.login} target="_blank">${
        user.name.split(" ").pop()
      }'s github</a>`;
      url.classList.add("available");
    } else {
      username.textContent = unknown;
      url.textContent = unknown;
      url.classList.add("not-available");
    }
  
    infoAt.textContent = user.login;
    followers.textContent = user.followers;
    following.textContent = user.following;
    datarepos.textContent = user.public_repos;
  
    if (!user.location) {
      locationCity.innerHTML = `<span>${unknown}</span>`;
      locationCity.classList.add("not-available");
    } else {
      locationCity.innerHTML = `<span>${user.location}</span>`;
      locationCity.classList.add("available");
    }
  
    if (!user.bio) {
      infoBio.innerHTML = `<span>${noBio}</span>`;
      infoBio.classList.add("not-available");
    } else {
      infoBio.innerHTML = `<span>${user.bio}</span>`;
      infoBio.classList.add("available");
    }
    if (!user.twitter_username) {
      twitter.innerHTML = `<span>${unknown}</span>`;
      twitter.classList.add("not-available");
    } else {
      twitter.innerHTML = `<a target="_blank">${user.twitter_username}</a>`;
      twitter.classList.add("available");
    }
    if (!user.blog) {
      blog.innerHTML = `<span>${unknown}</span>`;
      blog.classList.add("not-available");
    } else {
      blog.innerHTML = `<a target="_blank">${user.blog}</a>`;
      blog.classList.add("available");
    }
  
    const date = user.created_at.split("T")[0];
    const dateArray = date.split("-");
    const dateObj = new Date(dateArray);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const finalDate = dateObj.toLocaleDateString("en-US", options);
    dateTime.textContent = finalDate;
  
    avatar.src = user.avatar_url;
  
    // const urlAnchor = document.querySelector("location-url>a");
    const twitterAnchor = document.querySelector(".location-twitter>a");
    const blogAnchor = document.querySelector(".location-website>a");
  
    // urlAnchor.setAttribute("href", user.html_url);
    twitterAnchor
      ? twitterAnchor.setAttribute(
          "href",
          `https://twitter.com/${user.twitter_username}`
        )
      : null;
  
    blogAnchor ? blogAnchor.setAttribute("href", user.blog) : null;
  };
  
  export const renderAll = (user) => {
    renderArticle();
    renderInfo(user);
    renderIcons();
    // setAnchors();
  };
  