(function(){
    angular.module("Lunch",[]).controller("LunchController",LunchController);
    LunchController.$inject=['$scope'];

    function LunchController($scope){
        $scope.message="";
        $scope.input="";

        $scope.dispMessage=function(){
            var items;
            items=$scope.input.trim();
            var a=items.split(',');
             a=a.filter(function(a1){
                return a1.length > 0;
            })
            if(a.length<=0){
                $scope.message="Please enter data first";
                console.log(items.length);
            }
            else{
                if(a.length<=3){
                    $scope.message="Enjoy!";
                }
                else{
                    $scope.message="Too much!";
                }
            }
        }
    }
})();