import { ComponentCustomProperties } from 'vue'
import { Router } from 'vue-router'


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router;
  }
}
