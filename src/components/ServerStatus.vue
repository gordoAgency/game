<template>
  <div>
    <p>Server Status {{Status}} </p>
    <hr>
    <button @click="changeStatus">Change status</button>
  </div>
</template>


<script >
  export default{
    data: function(){
      return{
        Status: 'cricital',
      }
    },
    methods: {
      changeStatus(){
          this.Status = 'Normal'
      }
    }
  }
</script>
