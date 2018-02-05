class Github{
    constructor(){
        this.client_id= 'a68bd508e985535fe14b',
        this.client_secret= '22e6f14c0de55e25d34d0660c8e33b47cb3acb63',
        this.repos_count= 5,
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileReponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileReponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}