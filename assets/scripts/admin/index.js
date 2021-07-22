(function () {
  var App = angular.module('Plugins').config(function($stateProvider) {
    $stateProvider.state('plugins.natfixer', {
      templateUrl: '/public/plugins/natfixer/views/index.html',
      controller: 'NatFixerCtrl',
      url: '/natfixer',
      title: 'NAT Fixer',
      sidebarMeta: {
        order: 3
      }
    })
  })
})()
