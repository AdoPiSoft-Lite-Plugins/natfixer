(function(){"use strict";
  var App=angular.module("Plugins");
App.controller("NatFixerCtrl",function($scope,NatfixService,toastr){NatfixService.get().then(function(cfg){var data=cfg.data;
  $scope.scripts=data.scripts});
$scope.submit=function(){$scope.saving=true;
  var cfg={scripts:$scope.scripts};
NatfixService.update(cfg).then(function(){toastr.success("Plugin settings successfully saved")}).finally(function(){$scope.saving=false})}})})();
