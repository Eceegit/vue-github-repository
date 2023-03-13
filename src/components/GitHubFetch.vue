<template lang="">
    <div>
        <div>
            <div>
                //Displaying repositories fetched from the GitHub API
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>URL</th>
                                <th>Language</th>
                                <th>Owner</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="repository in repositories" :key="repository.id">
                                <td>{{repository.id}}</td>
                                <td>{{repository.name}}</td>
                                <td><a :href="repository.html_url" target="_blank">{{repository.html_url}}</a></td>
                                <td>{{repository.language}}</td>
                                <td>{{repository.owner.login}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            //Handling Pagination for the repositories
            <ul>
                <li v-for="page in totalPages" :key="page" @click="currentPage = page">
                {{ page }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            repositories: [],
            currentPage: 1,
            perPage: 4
        }
    },
    computed: {
        paginatedRepositories() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.repositories.slice(startIndex, endIndex);
        },
        totalPages() {
        return Math.ceil(this.repositories.length / this.pageSize);
        },
    },
    mounted(){
        fetch("https://api.github.com/users/Eceegit/repos")
        .then(response => response.json())
        .then(data => this.repositories = data)
        .catch(error => console.log('Error Encoutered when fetching data:', error))
    }
}
</script>
<style lang="">
    
</style>