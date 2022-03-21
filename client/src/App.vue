<template>
  <nav>
    <router-link to="/addproduct">Add Product</router-link> |||
    <router-link to="/">Home</router-link> |||
    <router-link to="/products">Products</router-link> |||
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
</style>
