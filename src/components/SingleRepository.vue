 <template>
        <div>
            <div v-if="loading" class="text-center font-bold text-2xl md:text-4xl font-signature">Please wait a sec!</div>

            <div v-else> 
              <div class="text-center text-2xl ">
                  <p><span class="font-semibold">ID: </span> {{ data.id }}</p>
                  <br/>
                  <h1><span class="font-semibold px-1">Name: </span> {{ data.name }}</h1>
                  <br/>
                  <p><span class="font-semibold">Language: </span> {{ data.language }}</p>
                  <br/>
                  <p><span class="font-semibold">Visibility: </span> {{ data.visibility }}</p>
                  
                  <p><a :href="data.html_url" target="_blank"><button class='text-sky-600 p-5 font-semibold text-lg  rounded bg-white'>Github</button></a></p>
                  
                  <!-- <p>Owner: {{ data.owner.login }}</p> -->
                  <router-link to="/repositories"> <button class='bg-sky-600 p-4 font-semibold text-xl mt-12 rounded text-yellow-300'>Go to Respositories</button></router-link> 
              </div>
            </div> 
        </div>
  </template>
  
  <script setup>
        import { useRoute } from "vue-router";
        import { onMounted, ref } from "vue";
       
        const data = ref({});
        const loading = ref(true);
        const route=useRoute()
        const fetchRepository = async () => {
          // try {
          //     const res = await fetch("https://api.github.com/users/Eceegit/repos");
          //     const dataId = parseInt(route.params.id);
          //     const data = await res.json(); 
          //     const repository = data.find(item => item.id === dataId);
          //     data.value = repository;
          //     console.log(repository);
          //   } catch (error) {
          //     console.log(error);
          //   }
          try {
              const res = await fetch("https://api.github.com/users/Eceegit/repos");
              const dataId = parseInt(route.params.id);
              const responseData = await res.json();
              const repository = responseData.find((item) => item.id === dataId);
              data.value = repository;
              loading.value = false;
              console.log(repository);
            } catch (error) {
              console.log(error);
            }

        } 



        onMounted(fetchRepository);
    </script>
  <!-- <script>
  import { ref, onMounted } from 'vue'
  import {useRouter} from 'vue-router'
  
  export default {
    name: 'SingleRepository',
    setup() {
      const repository = ref([])
      const router = useRouter()
    //   const id = ref(router.currentRoute.value.params.id)
  
      onMounted(() => {
        fetch(`https://api.github.com/repositories/${id.value}`)
          .then(response => response.json())
          .then(data => {
            repository.value = data
          })
          .catch(error => console.log('Error encountered when fetching data:', error))
      })
  
      return {
        repository
      }
    }
  }
  </script> -->
<style></style>  