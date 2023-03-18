<template>
    <div>
      <div v-if="loading" class="text-center font-bold text-2xl md:text-4xl font-signature">Please wait a sec!</div>
      <div v-else>
        <div class="flex flex-col justify-between mx-4 md:mx-32 lg:mx-64 flex-wrap">
        <!--Displaying repositories fetched from the GitHub API -->
          <table>
            <thead>
              <tr class=" text-lg md:text-2xl ">
                <th>#</th>
                <th>Repositories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(repository, index) in paginationHandler" :key="repository.id">
                <td class="font-medium text-xl pr-3">{{ (page - 1) * perPage + index + 1 }}</td>
                <td class="text-xl font-normal ">{{ repository.name }}</td>
                <td>
                  <button @click="router.push(`/data/${repository.id}`)" class='bg-sky-600 p-2 font-semibold text-sm mt-4 rounded text-yellow-300'>See More</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--Handling Pagination for the repositories -->
        <div class="flex flex-col justify-around items-center font-semibold">
          <div>
            <p  class="text-xl pt-8 ml-5">Pages: {{ page }} of {{ totalPages }}</p>
    
            <br />
            <!-- button to handle the previous page -->
            <button class='text-sky-600 p-5 font-semibold text-lg  rounded bg-white' :disabled="page <= 1" :aria-disabled="page <= 1" @click="prevPage">Prev</button>
      
            <!-- button to handle the buttonPages displayed at a time -->
            <button
              v-for="pageNumber in Array.from({ length: totalPages }, (_, index) => index + 1)"
              :key="pageNumber"
              class='bg-sky-600 py-1 px-3 font-semibold text-sm mx-1 md:mx-2 rounded text-yellow-300'
              :class="{ active: pageNumber === page }"
              @click="setPage(pageNumber)"
            >
              {{ pageNumber }}
            </button>
    
            <!-- button to handle the next page -->
            <button class='text-sky-600 p-2 font-semibold text-lg  rounded bg-transparent' :disabled="page >= totalPages" :aria-disabled="page >= totalPages" @click="nextPage">Next</button>
          </div>
        </div>
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
          const loading = ref(true)
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
          .then(data => {
            repositories.value = data
            loading.value = false

          })
          .catch(error => console.log('Error Encountered when fetching data:', error));
      };
  
  
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
        loading,
        page,
        perPage,
        paginationHandler,
        totalPages,
        setPage,
        prevPage,
        nextPage,
        router
      };
    }
  };
  </script>
<style></style>  