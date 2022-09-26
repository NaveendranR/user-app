<template>
    <span >
        <img :src="imageSrc" alt="" class="avatar">
        <p class="user-name">{{userName}}</p>
        <a class="gitLink" :href="gitUrl"><span icon="link"></span> github</a>
    </span>
</template>
<script>

export default {
  name: "SingleUser",
  props:['imageSrc','userName','gitUrl']
  //  @import 'main.scss'
}
</script>
<style lang="scss" >
  .avatar {
      width: 150px;
      height:150px;
      border-radius: 50%;
    } 
    .user-name{
      font-size:24px;
      font-weight: 500;
      text-transform: capitalize;
    }
    .gitLink{
      text-decoration: none;
      font-size:18px;
      font-weight: 400;
      text-transform: capitalize;
    }
</style>

