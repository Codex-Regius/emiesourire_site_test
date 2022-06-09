<template>
  <router-view/>
</template>

<style>
:root {
  --lightgreen: #ECF0D6;
  --darkgreen: #2C4019;
  --snow: #FFFBFA;
  --lightpink: #DAC1B1;
  --dark: #110000;
}
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: lighter;
}
h3{
  font-size: 23px;
  color: var(--darkgreen);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>