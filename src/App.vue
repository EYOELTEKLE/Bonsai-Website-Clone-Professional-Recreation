<script lang="ts">
import NavBar from './components/NavBar.vue';
import AdvertBody from './components/AdvertBody.vue';
import { defineAsyncComponent } from 'vue';

export default
{
  name:"App",
  components:{
    NavBar,AdvertBody,AdvertContent: defineAsyncComponent(() => import('./components/AdvertContent.vue')),AdvertFeatures:defineAsyncComponent(() => import('./components/AdvertFeatures.vue')),
  }
}
</script>

<template>
 
<NavBar/>
<AdvertBody/>
<AdvertContent/>
<AdvertFeatures/>
</template>

<style scoped>

</style>
