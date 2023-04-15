function fetchGitHubInformation () {
  var username = $('#gh-username').val();
  if (!username) {
    $('#gh-user-data').html(`<h2>Please enter a GitHub username.</h2>`);
    return;
  }

  $('#gh-user-data').html(
    `<div id="loader"><img src="assets/css/loader.gif" alt="Loading..."></div>`
  );

  $.when(
    $.getJSON(`https://api.github.com/users/${username}`)
  ).then(
    function getData(response) {
      var userData = response;
      $('#gh-user-data').html(userInformationHTML(userData));
    }, function getDataError(errorResponse) {
      if (errorResponse.status === 404) {
        $('#gh-user-data').html(`<h2>No info found for user ${username}</h2>`);
      } else {
        console.log(errorResponse);
        $('#gh-user-data').html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
      }
    }
  )
}