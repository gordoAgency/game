<template>
    <div class="grid-cont">
      <template v-for="(pos, i) in arrayPos">
        <div :id="'b'+i" :data="signature[i]" v-model="signature" :style="{gridArea: arrayPos[i]}" class="srednia">
          <kn-bombka></kn-bombka>
        </div>
      </template>
      <div class="text">
        <h1>Agencja gordo na święta</h1>
      </div>
      <div class="szyfluj">
        <button @click="shuffle(arrayPos)" type="button" name="button">szufla</button>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Bombka from './components/Bombka.vue';
import Footer from './components/Footer.vue';

export default{
  components: {
    'kn-header': Header,
    'kn-bombka': Bombka ,
    'kn-footer': Footer,
  },

  data: function(){
    return{
      arrayPos: ['a','b','c','d','e','f','g','h'],
      signature: [1, 2, 3, 4, 1, 2, 3, 4],
      mikolaj: 0,
      aniolek: 0,
      choinka: 0,
      sanki: 0,
    }
  },

  methods:{
    rotate: function() {

    },
    shuffle: function(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
      }
    },
    created: function () {
      this.shuffle(this.arrayPos);
      this.shuffle(this.signature);
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
    grid-template-areas:
    'a b c'
    'd gordo e'
    'f g h';
    div{
      display: flex;
      align-items: center;
      min-height: 350px;
    }
  }

 .text{
   // background-color: rgba(0,0,0,0.2);
   // border-radius: 2em;
   grid-area: gordo;
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
