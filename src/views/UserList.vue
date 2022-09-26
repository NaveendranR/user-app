<template>
  <div class="list-page">
    <h2>Top User</h2>
      <div v-if="currentPageItems.length">
        <div  class="user-container">
        <div v-for="user in currentPageItems" :key="user.id" class="user-comp" >
          <div @click="viewUser(user)">
            <SingleUser 
              :image-src="user.avatar_url" 
              :user-name="user.login"
              :git-url="user.url"
            >
            </SingleUser>
          </div>
        </div>
        </div> 
      <div>
        <button class="flat-btn" v-if="currPerPage > 10" @click="previous()"><span>Previous</span></button>
        <button class="flat-btn" @click="next()"><span>Next</span></button>
      </div>
    </div>
    <div v-if="currentPageItems.length == 0">
      <p>Users not found</p>
    </div>
  </div>

</template>

<script>
import SingleUser from "@/components/SingleUser.vue";
import axios from 'axios'
export default {
  name: "HomeView",
  components: {
    SingleUser
  },
  data(){
    return{
      perpage: 10,
      pageNumber:0,
      currPerPage:10,
      userList:[],
      imageSrc:'',

    }
  },

  computed:{
    currentPageItems(){
      return this.userList.slice(this.pageNumber*this.perpage,this.pageNumber*this.perpage+1+this.perpage)
    }
      },

  methods: {
    getUserList(){
      let query= '?per_page='
      let url = 'https://api.github.com/users' + query + this.currPerPage
      axios.get(url)
      .then((response)=>{ 
        this.userList = response.data
      })
      .catch()
    },

      next(){
        this.pageNumber++;
        this.currPerPage = this.currPerPage + 10;
        this.getUserList()
      },
      previous(){
        this.pageNumber--;
        this.currPerPage = this.currPerPage - 10;
        this.getUserList()
      }, 
    viewUser(user){
      let userName = user.login
          this.$router.push({ 
          path: '/user/'+ userName          
      });
    }   
  },
  created(){
    this.getUserList()
  }
};
</script>


<style lang="scss">
  @import '../main.scss';
</style>