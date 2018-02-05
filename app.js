// Instatiate dependent classes
const github = new Github;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// EVent listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== ''){
        // Make HTTP call 
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User not found', 'alert alert-danger');
            }
            else{
                // Show UI
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }
    else{
        // Clear profile
        ui.clearProfile();
    }
});