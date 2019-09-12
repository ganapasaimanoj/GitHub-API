document.querySelector('button').addEventListener('click', fetchDetails);

var counter = 1;

function fetchDetails(e){
    e.preventDefault();

    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(jsonData => displayData(jsonData))
        .catch(error => console.log(error));
}

function displayData(jsonData){
    console.log(jsonData);
    jsonData.forEach(function(user){
    
    var sno = counter;
    var name = user.login;
    var id = user.id;
    var isAdmin = user.site_admin;
    var profile = `<img src="${user.avatar_url}">`;
    var githubUrl = user.html_url;

    var tr = 
            `<tr>
                <td>${sno}</td>
                <td>${name}</td>
                <td>${id}</td>
                <td>${isAdmin}</td>
                <td>${profile}</td>
                <td>
                    <a class="btn btn-sm btn-success" id="viewDetails" href="${githubUrl}" target="_blank">View Profile</a>
                </td>
            </tr>`;

    document.querySelector('tbody').innerHTML += tr;
    counter++;
    });
}