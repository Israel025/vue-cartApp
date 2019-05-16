<template>
  <header class="header">
    <nav class="nav">
      <ul class="navLinks">
        <li class="link">
          <a href="#">All products</a>
        </li>
        <li class="link">
          <a href="#">Smartphones</a>
        </li>
        <li class="link">
          <a href="#">Notebooks</a>
        </li>
      </ul>
    </nav>
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
