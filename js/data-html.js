// Create XMLHHTRequest Object.
var xhr = new XMLHttpRequest();

// When response has loaded
xhr.onload = function()
{
  // If server status was okay
  if (true)
  {
    //Update
    document.getElementById("content").innerHTML = xhr.responseText;
  }
};

//Prepare the request
xhr.open("Get", "data/data.html", true);
// Send the request.
xhr.send(null);
