<template>
  <div>
    <!-- USER DETAILS -->
    <div class="image-banner">
        <div class="profile-image">
          <div class="image-area">
            <img :src="user.image" alt="">
          </div>
        </div>
        <div >
          <h3 class="user-name">{{user.userName}}</h3>
        </div>
    </div>
    <!-- USER NAME -->
    <div class="card">
      <div class="card-inner">
        <div class="card-content">
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >User Name:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.userName}}</span>
              </div>
            </div>
          </div>
          <!-- COMPANY -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >Company Name:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.company}}</span>
              </div>
            </div>
          </div>
          <!-- FOLLOWERS -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >Followers:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.followers}}</span>
              </div>
            </div>
          </div>
          <!-- FOLLOWING -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >Following:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.following}}</span>
              </div>
            </div>
          </div>
          <!-- PUBLIC GISTS  -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >Public Gists:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.publicGists}}</span>
              </div>
            </div>
          </div>
          <!-- PUBLIC REPOS -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >public Repos:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.publicRepos}}</span>
              </div>
            </div>
          </div>
          <!-- USER ID -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >User Id:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.userId}}</span>
              </div>
            </div>
          </div>
          <!-- USER TYPE -->
          <div class="details-view">
            <div class="content">
              <div class="content-lable">
                <span >User Type:</span>
              </div>
            </div>
            <div class="content">
              <div class="content-text">
                <span >{{user.userType}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>

</template>

<script>

import axios from 'axios'
export default {
  name: "UserView",

  data(){
    return{
      user:{
        login:'',
        image:'',
        userName:'',
        company:'',
        followers:'',
        following:'',
        publicGists:'',
        publicRepos:'',
        userId:'',
        userType:''
      },
      userName:''
    }
  },

  methods: {
    viewUserDetails(userName){      
      let url = 'https://api.github.com/users/' + userName 
      axios.get(url)
      .then((response)=>{ 
        let user = response.data
        this.user.login = user.login ? user.login : '-'
        this.user.image = user.avatar_url ? user.avatar_url : '-'
        this.user.userName = user.name ? user.name : '-'
        this.user.company = user.company ? user.company : '-'
        this.user.followers = user.followers ? user.followers : '-'
        this.user.following = user.following ? user.following : '-'
        this.user.publicGists = user.public_gists ? user.public_gists : '-'
        this.user.publicRepos = user.public_repos ? user.public_repos : '-'
        this.user.userId = user.id ? user.id : '-'
        this.user.userType = user.type ? user.type : '-' 
      })
      .catch()
    }, 
  
  },
  created(){
    this.userName = this.$route.params.userName
    this.viewUserDetails(this.userName)
  }
};
</script>


<style lang="scss">
  @import '../main.scss'
</style>