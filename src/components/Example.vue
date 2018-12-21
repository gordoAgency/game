<template>
    <div class="grid-cont">
      <div @click="toss" class="srednia">
        <kn-bombka></kn-bombka>
      </div>
      <div class="srednia ">
        <kn-bombka></kn-bombka>
      </div>
      <div class="srednia">
        <kn-bombka></kn-bombka>
      </div>
      <div class="srednia">
        <kn-bombka></kn-bombka>
      </div>
      <div class="text">
        <h1>Agencja</br>Gordo</br>na święta</h1>
      </div>
      <div class="srednia">
        <kn-bombka></kn-bombka>
      </div>
      <div class="srednia">
        <kn-bombka></kn-bombka>
      </div>
      <div class="srednia">
        <kn-bombka></kn-bombka>
      </div>
      <div class="srednia">
        <kn-bombka></kn-bombka>
      </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Bombka from './Bombka.vue';
import Footer from './Footer.vue';

export default{
  components: {
    'kn-header': Header,
    'kn-bombka': Bombka ,
    'kn-footer': Footer,
  },

  data: function(){
    return{
      conter: 8,
      pairs:[
      {firstPair: true},
      {secondPair: true},
      {thirdPair: false},
      {fourthPair: true}]
    }
  },
toss: function(){
  var pairs = this.pairs;
  for(var i = 0; i > this.pairs.length; i++){
  return  console.log(i);
  }
}
}

</script>

<style lang="scss">
   @keyframes christmas{
     0% {
       transform: rotate(0deg);
       transform: rotate(0deg);
       transform: rotate(0deg);
     }
     50% {
       transform: rotate(45deg);
     }
     75% {
       transform: rotate(-45deg);
     }
     100% {
       transform: rotate(0deg);
     }

  }
  .grid-cont{
    display: flex;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    div{
      display: flex;
      align-items: center;
      min-height: 350px;
    }
  }

 .text{
   // background-color: rgba(0,0,0,0.2);
   // border-radius: 2em;
   color: red;
   text-shadow: 0px 0px 100px  white;
   h1{
     text-align: center;
     line-height: normal;
     font-size: 70px;
     font-family: 'Pacifico', serif;
     font-weight: 600;
     margin: 100px auto;
   }
 }
 .mala{
   display: flex;
   align-items: center;
   justify-content: center;
   svg{
     cursor: pointer;
     transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s ;
     width: 100px;
   }
   &:hover{
    svg{
      // animation: christmas 2s infinite;
      transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
      width:  130px;
    }
   }
   &:active{
    svg{
      // animation: christmas 2s infinite;
      transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
      width:  130px;
    }
   }
 }
 .srednia{
   display: flex;
   align-items: center;
   justify-content: center;
   svg{
     transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s ;
     width: 200px;
   }
   &:hover{
    svg{
      transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
      width:  250px;
    }
   }
   &:active{
    svg{
      // animation: christmas 2s infinite;
      transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
      width:  130px;
    }
   }
 }
 .duza{
   display: flex;
   align-items: center;
   justify-content: center;
   svg{
     transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s ;
     width: 250px;
   }
   &:hover{
    svg{
      transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
      width:  300px;
    }
   }
   &:active{
    svg{
      // animation: christmas 2s infinite;
      transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
      width:  130px;
    }
   }
 }
</style>
