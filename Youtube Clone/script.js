// const toggle = document.getElementById("menu-icon");
// const hideItem = document.querySelectorAll(".hide-item");

// toggle.addEventListener("click", () => {
//   hideItem.forEach((item) => {
//     item.classList.toggle("hidden");
//   });
// });

// document.querySelectorAll(".segmented-nav-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".segmented-nav-btn.all")?.classList.remove("all");
//     btn.classList.add("all");
//   });
// });

// // async function fetchAPI() {
// //   const data = await fetch("https://jsonplaceholder.typicode.com/users");
// //   console.log(data?.json());
// // }

// // (async () => {
// //   await fetchAPI();
// // })();

// document.addEventListener("DOMContentLoaded", () => {
//   async function fetchData() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }

//       // const users = await response.json();
//       // renderUsers(users);
//     } catch (error) {
//       console.error("Fetch failed:", error.message);
//     }
//   }

//   fetchData();
// });

const toggle = document.getElementById("menu-icon");
const hideItem = document.querySelectorAll(".hide-item");

toggle.addEventListener("click", () => {
  hideItem.forEach((item) => {
    item.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function setLoading(isLoading) {
    const grid = document.querySelector(".videos");
    if (isLoading) {
      grid.innerHTML = `
        <p style="color:#aaa; padding:20px; grid-column:1/-1">
         <ion-icon name="reload-outline"></ion-icon> Loading...
        </p>`;
    }
  }

  function renderUsers(users) {
    const grid = document.querySelector(".videos");
    grid.innerHTML = users
      .map(
        (user) => `
      <div class="video-box">
        <img
          src="https://picsum.photos/seed/${user.id}/480/270"
          class="thumbnail-img"
          alt="${user.name}"
        />
        <div class="video-details">
          <img
            class="profile-img"
            src="https://picsum.photos/seed/avatar${user.id}/40/40"
          />
          <div class="video-info">
            <h2 class="video-title">${user.name}</h2>
            <p class="video-channel">${user.company.name} ✔</p>
            <p class="video-stats">${user.address.city} · ${user.website}</p>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const users = await response.json();
      renderUsers(users);
    } catch (error) {
      console.error("Fetch failed:", error.message);
      document.querySelector(".videos").innerHTML = `
        <p style="color:red; padding:20px; grid-column:1/-1">
          ❌ Failed to load: ${error.message}
        </p>`;
    }
  }

  fetchData();
});
