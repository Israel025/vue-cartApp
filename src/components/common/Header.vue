<template>
  <header class="header">
    <nav class="nav">
      <ul class="navLinks">
        <li class="link">
          <router-link to="/" :exact-active-class="isActive">All Products</router-link>
        </li>
        <li class="link">
          <router-link to="/notebooks" :exact-active-class="isActive">Notebooks</router-link>
        </li>
        <li class="link">
          <router-link to="/smartphones" :exact-active-class="isActive">Smartphones</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
export default {
  data(){
    return {
      isActive: "current"
    }
            
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #262626;
  box-sizing: border-box;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  list-style: none;
  padding: 0 4em;
  display: inline-flex;
}

.link a {
  color: #ffffff;
  text-decoration: none;
}

.link a:hover {
  color: #78ec7e;
}


.current {
  font-size: 130%;
  padding: auto;
  font-weight: bold;
  border-radius: 7px;
  background: rgb(14, 123, 226);  
}


</style>
