routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/esp/',
    url: './pages/index_es.html',
  },
  {
    path: '/historia/',
    url: './pages/historia.html',
  },
  {
    path: '/historia_en/',
    url: './pages/historia_en.html',
  },
  {
    path: '/bodegas/',
    url: './pages/bodegas.html',
  },
  {
    path: '/bodegas_en/',
    url: './pages/bodegas_en.html',
  },
  {
    path: '/dormir/',
    url: './pages/dormir.html',
  },
  {
    path: '/dormir_en/',
    url: './pages/dormir_en.html',
  },
  {
    path: '/chefs/',
    url: './pages/chefs.html',
  },
  {
    path: '/vinos/',
    url: './pages/vinos.html',
  },
  {
    path: '/vinos_en/',
    url: './pages/vinos_en.html',
  },
  {
    path: '/gastro/',
    url: './pages/gastro.html',
  },
  {
    path: '/gastro_en/',
    url: './pages/gastro_en.html',
  },
  {
    path: '/programa/',
    url: './pages/programa.html',
  },
  {
    path: '/programa_en/',
    url: './pages/programa_en.html',
  },
  {
    path: '/faq/',
    url: './pages/faq.html',
  },
  {
    path: '/faq_en/',
    url: './pages/faq_en.html',
  },
  {
    path: '/llegar/',
    componentUrl: './pages/llegar.html',
  },
  {
    path: '/llegar_en/',
    componentUrl: './pages/llegar_en.html',
  },
  {
    path: '/tren/',
    componentUrl: './pages/tren.html',
  },
  {
    path: '/autobus/',
    componentUrl: './pages/autobus.html',
  },
  {
    path: '/coche/',
    componentUrl: './pages/coche.html',
  },
  {
    path: '/avion/',
    componentUrl: './pages/avion.html',
  },
  {
    path: '/coche_en/',
    componentUrl: './pages/coche_en.html',
  },
  {
    path: '/avion_en/',
    componentUrl: './pages/avion_en.html',
  },
  {
    path: '/ingles/',
    url: './pages/index_en.html',
    name: 'ingles',
  },
  {
    path: '/settings/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // Simulate Ajax Request
      app.request.get('http://cata.emesa.com/index.php?option=com_cata&task=bodegas.ajaxObtenerBodegas', function (data) {

         // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/ocupacion.html',
          },
          {
            context: {
              bodegas: JSON.parse(data),
            }
          }
        );
      });
    },
  },
  {
    path: '/settings_en/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // Simulate Ajax Request
      app.request.get('http://cata.emesa.com/index.php?option=com_cata&task=bodegas.ajaxObtenerBodegas', function (data) {

         // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/ocupacion_en.html',
          },
          {
            context: {
              bodegas: JSON.parse(data),
            }
          }
        );
      });
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
