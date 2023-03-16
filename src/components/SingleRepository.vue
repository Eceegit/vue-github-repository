 <template>
       <div> 
          <h1>{{ data.name }}</h1>
          <p>ID: {{ data.id }}</p>
          <!-- <p>URL: <a :href="repository.html_url" target="_blank">{{ repository.html_url }}</a></p> -->
          <p>Language: {{ data.language }}</p>
          <!-- <p>Owner: {{ data.owner.login }}</p> -->
        </div> 
  </template>
  
  <script setup>
        import { useRoute } from "vue-router";
        import { onMounted, ref } from "vue";
       
        const data = ref({});
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