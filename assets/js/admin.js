function createnewine() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const price = document.getElementById("price").value;
  const imgUrl = document.getElementById("img-url").value;
  const size = document.getElementById("size").value;
  const type = document.getElementById("type").value;
  const publishToFacebook = document.getElementById("publish-to-fb-page");

  if (
    name === "" ||
    desc === "" ||
    size === "" ||
    price === "" ||
    imgUrl === "" ||
    type === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  const data = {
    name,
    desc,
    size,
    price,
    img: imgUrl,
    type,
  };
}

function updatewines() {
  $.ajax({
    url: `/api/movies`,
    method: "GET",
    dataType: "json",
    success: function (response) {
      movies = response;
    },
    error: function (xhr, status, error) {
      console.log("AJAX request failed: " + error);
    },
  });
}

function updateBranches() {
  $.ajax({
    url: `/branch`,
    method: "GET",
    dataType: "json",
    success: function (response) {
      branches = response;
    },
    error: function (xhr, status, error) {
      console.log("AJAX request failed: " + error);
    },
  });
}

function updateAdmins() {
  $.ajax({
    url: `admin/api`,
    method: "GET",
    dataType: "json",
    success: function (response) {
      admins = response;
    },
    error: function (xhr, status, error) {
      console.log("AJAX request failed: " + error);
    },
  });
}


function initNavBarElements() {
  const navBar = document.getElementById("navbar");
  const navbarElements = navBar.getElementsByTagName("a");
  for (let i = 0; i < navbarElements.length; i++) {
    navbarElements[i].classList = ["unselected-nav"];
  }
}


