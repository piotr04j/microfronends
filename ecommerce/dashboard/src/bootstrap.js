import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

export const mountDashboardApp = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};


if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('dev-dashboard');

  if (devRoot) {
    mountDashboardApp(devRoot);
  }
}
