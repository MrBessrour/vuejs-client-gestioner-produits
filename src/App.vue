<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/"><a class="navbar-brand">products manager</a></router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/list"><a class="nav-item nav-link">list</a></router-link>
          <router-link to="/new"><a class="nav-item nav-link">new</a></router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
  name: 'App',
  
}
</script>

<style>
</style>