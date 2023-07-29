// Fetch github users on page load.
function fetchDetails() {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(jsonData => displayData(jsonData))
        .catch(error => console.log(error));
}
fetchDetails();

function displayData(jsonData) {
    jsonData.forEach((user, index) => {
        const sno = ++index;
        const name = user.login;
        const id = user.id;
        const isAdmin = user.site_admin;
        const profile = `<img src="${user.avatar_url}">`;
        const githubUrl = user.html_url;

        document.querySelector('tbody').innerHTML += `
            <tr>
                <td class='d-none d-sm-table-cell'>${sno}</td>
                <td>${name}</td>
                <td>${id}</td>
                <td class='d-none d-sm-table-cell'>${isAdmin}</td>
                <td>${profile}</td>
                <td>
                    <a class="btn btn-sm btn-success" id="viewDetails" href="${githubUrl}" target="_blank">View Profile</a>
                </td>
            </tr>
    `;
    });
}