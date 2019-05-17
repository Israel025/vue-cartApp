<template>
  <header class="header">
    <nav class="nav">
      <ul class="navLinks">
        <li class="link">
          <router-link to="/">All Products</router-link>
        </li>
        <li class="link">
          <router-link to="/about">Smartphones</router-link>
        </li>
        <li class="link">
          <router-link to="">Notebooks</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>
</template>

<script>

export default {
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
    display:inline-flex;
  }

.link a {
    color: #ffffff;
    text-decoration: none;
    
  }
  
</style>
