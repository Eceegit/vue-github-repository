<template lang="">
    <div>
        <div>
            <div>
                <!--Displaying repositories fetched from the GitHub API -->
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
                            <tr v-for="repository in paginationHandler" :key="repository.id">
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


            <!--Handling Pagination for the repositories -->
            <div>
                <p class="totalPages">Pages: {{ page }} of {{ totalPages }}</p>

                <br />
                <!-- button to handle the previous page -->
                <button class="prev-next" :disabled="page <= 1" :aria-disabled="page <= 1" @click="prevPage">Prev</button>

                <!-- button to handle the buttonPages displayed at a time -->
                <button v-for="pageNumber in Array.from({ length: totalPages }, (_, index) => index + 1)"
                        :key="pageNumber"
                        class="usersBtn"
                        :class="{ active: pageNumber === page }"
                        @click="setPage(pageNumber)">
                    {{ pageNumber }}
                </button>

                <!-- button to handle the next page -->
                <button class="prev-next" :disabled="page >= totalPages" :aria-disabled="page >= totalPages" @click="nextPage">Next</button>
            </div>
           

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            repositories: [],
            page: 1,
            perPage: 4
        }
    },
    mounted(){
        fetch("https://api.github.com/users/Eceegit/repos")
        .then(response => response.json())
        .then(data => this.repositories = data)
        .catch(error => console.log('Error Encoutered when fetching data:', error, ))
    },
    computed: {
        paginationHandler() {
        const startIndex = (this.page - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.repositories.slice(startIndex, endIndex);
        },
        totalPages() {
        return Math.ceil(this.repositories.length / this.perPage);
        },
    },
    methods: {
        setPage(pageNumber) {
            this.page = pageNumber;
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
            }
        },
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
            }
        }
    }

}
</script>
<style lang="">
    
</style>