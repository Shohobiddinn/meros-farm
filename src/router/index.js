import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SelectRegion from '@/components/SelectRegion.vue'
import MainPage from '@/views/MainPage.vue'
import Basket from '@/components/Basket.vue'
import auth from "@/core/auth";
import Profil from '@/components/Profil.vue'
import OrdersGroup from '@/components/OrdersGroup.vue'
import OrderDetails from '@/components/OrderDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/selectRegion',
      name: 'selectRegion',
      component: SelectRegion,
      meta: {
        requiresAuth: true,
      }

    },
    {
      path: '/groupOrders',
      name: 'groupOrders',
      component: OrdersGroup,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/orederDetails/:id',
      name: 'orderDetails',
      component: OrderDetails,
      meta: {
        requiresAuth: true,
      }
    },

    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket,
      meta: {
        requiresAuth: true,
      }
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: () => import('../views/Statictic.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/statistic-trade',
      name: 'statistic  trade',
      component: () => import('../views/StatisticTrade.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/mainPage"
    }
  ]


});
router.beforeEach((to, from, next) => {
  if (to.path === "login" && auth.loggedIn()) {
    next({ path: "/mainPage" });
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: "login",
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});



export default router
