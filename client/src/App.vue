<template>
  <nav>
    <router-link to="/products">Products</router-link>
    <router-link to="/card">Card</router-link>
  </nav>
  <router-view />
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: sans-serif;
}

nav {
  border-radius: 0px 50px;
  padding: 1.5rem;
  width: 100%;
  height: 1rem;
  background-color: rgba(102, 51, 153, 0.95);
}

a {
  color: wheat;
  margin-right: 1.5rem;
  text-decoration: none;
  font-size: 1.25rem;
}
</style>
