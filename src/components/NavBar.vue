<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">
        login
      </a>
      {{ isLoggedIn }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  computed: mapGetters(['isLoggedIn']),
  methods: {
    ...mapActions(['login'])
  }
};
</script>