<template>
    <div>
      <div>
        <!--Displaying repositories fetched from the GitHub API -->
          <div v-for="repository in paginationHandler" :key="repository.id">
              <h1>{{repository.name}}</h1>
              <button @click="router.push(`/data/${repository.id}`)">See More </button>
          </div>
        <div>
          <!-- <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="repository in paginationHandler" :key="repository.id">
                <td>{{ repository.id }}</td>
                <td>{{ repository.name }}</td>
               
                <td>
                    <div>
                    <button @click="router.push(`/data/${repository.id}`)">See More</button>
                    </div>
                </td>
              </tr>
            </tbody> 
          </table> -->
        </div>
      </div>
  
      <!--Handling Pagination for the repositories -->
      <div>
        <p class="totalPages">Pages: {{ page }} of {{ totalPages }}</p>
  
        <br />
        <!-- button to handle the previous page -->
        <button class="prev-next" :disabled="page <= 1" :aria-disabled="page <= 1" @click="prevPage">Prev</button>
  
        <!-- button to handle the buttonPages displayed at a time -->
        <button
          v-for="pageNumber in Array.from({ length: totalPages }, (_, index) => index + 1)"
          :key="pageNumber"
          class="usersBtn"
          :class="{ active: pageNumber === page }"
          @click="setPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
  
        <!-- button to handle the next page -->
        <button class="prev-next" :disabled="page >= totalPages" :aria-disabled="page >= totalPages" @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import {useRouter} from 'vue-router'
  
  
  export default {
      name: "GitHubFetch",
      
      setup() {
          const repositories = ref([]);
          const page = ref(1);
          const perPage = ref(4);
          
          const router = useRouter()
  
      const paginationHandler = computed(() => {
        const startIndex = (page.value - 1) * perPage.value;
        const endIndex = startIndex + perPage.value;
        return repositories.value.slice(startIndex, endIndex);
      });
  
      const totalPages = computed(() => {
        return Math.ceil(repositories.value.length / perPage.value);
      });
  
      const fetchRepositories = () => {
        fetch('https://api.github.com/users/Eceegit/repos')
          .then(response => response.json())
          .then(data => (repositories.value = data))
          .catch(error => console.log('Error Encountered when fetching data:', error));
      };
  
    //   const viewRepository = (id) => {
    //     router.push({ name: 'SingleRepository', params: { id } });
    //     console.log(id)
    //   };
  
      const setPage = pageNumber => {
        page.value = pageNumber;
      };
  
      const prevPage = () => {
        if (page.value > 1) {
          page.value--;
        }
      };
  
      const nextPage = () => {
        if (page.value < totalPages.value) {
          page.value++;
        }
      };
  
      onMounted(fetchRepositories);
  
      return {
        repositories,
        page,
        perPage,
        paginationHandler,
        totalPages,
        // viewRepository,
        setPage,
        prevPage,
        nextPage,
        router
      };
    }
  };
  </script>
<style></style>  