<template>
  <div>
    <nav>
      <router-link to="/">Trang chủ</router-link> |
      <router-link to="/about">Giới thiệu</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  background: #eee;
  padding: 10px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
