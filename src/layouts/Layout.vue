<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title
        class="absolute-center">
          <b>Multi-Platform Todo</b>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs
        inline-label
        class="bg-primary text-white shadow-2"
      >
        <q-route-tab
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        :icon="nav.icon"
        :label="nav.label" />

      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="230"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
          <q-item
          v-for="nav in navs"
          :to="nav.to"
          :key="nav.label"
          class="text-grey-4"
          exact
          clickable>
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{nav.label}}</q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs:[
      {
        label:'Todo',
        icon:'view_list',
        to:'/'
      },
      {
        label:'Settings',
        icon:'settings',
        to:'/settings'
      },
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer{
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--exact-active{
      color: white !important;
      background-color: #1e5786;
    }
  }
</style>
