app.controller('reportABugController', [function () {
    
     //set the context
     var vm = this;
    
     //binds the function to the scope so it's requestable in the component.
     vm.getRecordID = getRecordID;
     vm.linkText = "Report A Problem";
     vm.linkBase = "http:\/\/www.google.com?q=";

     //define the function that retrieves the record ID
     function getRecordID() {
         return vm.parentCtrl.item.pnx.control.recordid[0];
     }

 }]);

app.component('prmServiceLinksAfter', {
     bindings: {parentCtrl: '<'},
     controller: 'reportABugController',
     template: `<span class="md-subhead"><a href="{{ $ctrl.linkBase }}{{ $ctrl.getRecordID() }}" target="_blank">{{ $ctrl.linkText }}</a></span>`

 });
