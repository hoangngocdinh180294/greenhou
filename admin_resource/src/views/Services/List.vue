<template>
  <main id="main-container">
    <div class="content">
      <vue-table id="services" :path= "initTableURL" :i18n="i18n" >
        <template v-slot:status="{ row, column }">
        <span
          v-if="row[column.name] == '1'">Xuất bản</span>
          <span
            v-else-if="row[column.name] == '0'">Nháp</span>
          <span v-else/>
        </template>
      </vue-table>
    </div>
  </main>
</template>

<script>
    import { VueTable } from '@enso-ui/tables/bulma';

    export default {
        name: 'ServicesList',
        components: { VueTable },
        data() {
            return {
                originURL: '',
                initTableURL:'',
            }
        },
        created() {
            this.originURL = window.location.origin;
            this.initTableURL = this.originURL+this.$route.fullPath+'/initTable';
        },
        methods: {
            i18n(key) {
                return this.$store.getters.i18n(key);
            }
        }
    }
</script>

<style scoped>
  div#services {
    border-radius: 10px;
    border: 2px solid #eee;
  }
  div#services:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2);
  }
</style>
