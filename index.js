function getDateAndTime() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  if (mm == "01") {
    mm = "Jan";
  } else if (mm == "02") {
    mm = "Feb";
  } else if (mm == "03") {
    mm = "Mar";
  } else if (mm == "04") {
    mm = "Apr";
  } else if (mm == "05") {
    mm = "May";
  } else if (mm == "06") {
    mm = "Jun";
  } else if (mm == "07") {
    mm = "Jul";
  } else if (mm == "08") {
    mm = "Aug";
  } else if (mm == "09") {
    mm = "Sep";
  } else if (mm == "10") {
    mm = "Oct";
  } else if (mm == "11") {
    mm = "Nov";
  } else if (mm == "12") {
    mm = "Dec";
  }
  let hh = String(today.getHours()).padStart(2, "0");
  let min = String(today.getMinutes()).padStart(2, "0");

  if (hh >= 12 && min > 0) {
    document.getElementById(
      "date_time"
    ).innerHTML = `${dd} ${mm}, ${hh}:${min} PM`;
  } else {
    document.getElementById(
      "date_time"
    ).innerHTML = `${dd} ${mm}, ${hh}:${min} AM`;
  }
}

getDateAndTime();

document.getElementById("form").onsubmit = function search(e) {
  e.preventDefault();
  let search = document.getElementById("search").value;
  search = search.replace(" ", "+");
  window.location.href = "https://google.com/search?q=" + search;
};
