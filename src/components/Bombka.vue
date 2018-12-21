<template >
  <div class="bombka" >
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 viewBox="0 0 51.3 59.7" style="enable-background:new 0 0 51.3 59.7;" xml:space="preserve">
    <g id="Warstwa_1">
    	<path class="st0" d="M25.6,8.3c14.2,0,25.6,11.5,25.6,25.7c0,14.2-11.5,25.7-25.6,25.7S0,48.2,0,34C0,22.5,7.6,12.8,18,9.5
    		C20.4,8.7,23,8.3,25.6,8.3L25.6,8.3z M22,14.5c-0.3,0-0.5,0.2-0.5,0.5v37c0,0.3,0.2,0.5,0.5,0.5h7.2c0.3,0,0.5-0.2,0.5-0.5V15
    		c0-0.3-0.2-0.5-0.5-0.5H22z M33.8,19.6c-0.3,0-0.5,0.2-0.5,0.5v27.8c0,0.3,0.2,0.5,0.5,0.5H41c0.3,0,0.5-0.2,0.5-0.5V20.1
    		c0-0.3-0.2-0.5-0.5-0.5H33.8z M17.5,19.1h-7.2c-0.3,0-0.5,0.2-0.5,0.5v27.8c0,0.3,0.2,0.5,0.5,0.5h7.2c0.3,0,0.5-0.2,0.5-0.5V19.6
    		C18,19.3,17.7,19.1,17.5,19.1z"/>
    </g>
    <g id="Warstwa_2">
    	<path class="st1" d="M29.5,7.3c-0.2-0.8-0.5-1.7-0.6-2.1l-0.7-2.3c-0.4-1.3-1.6-2.1-2.9-1.9l-1.7,0.2C23.3,0.5,22.7,0,22,0
    		c-0.8,0-1.5,0.7-1.5,1.5v0C18,2,17,3.7,18,7l0.6,1.5c0.2,0.6,0.8,0.9,1.5,0.8c2.5-0.5,4.4-0.7,4.9-0.7l3.2,0.2
    		C29,8.9,29.7,8.1,29.5,7.3z M22,2.7c-0.6,0-1.2-0.5-1.2-1.2c0-0.6,0.5-1.2,1.2-1.2s1.2,0.5,1.2,1.2C23.2,2.1,22.6,2.7,22,2.7z"/>
    </g>
    </svg>
  </div>
</template>

<script>
export default {

  data: function(){
    return{
      index: 5,
    }
  }

}
</script>

<style lang="scss">
  .bombka{
    // animation: christmas 2s infinite;
    transform-origin: top center;
  }
  .st0{
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill:#E61C2A;
  }
  .st1{
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill:#FFEC15;
  }
</style>
