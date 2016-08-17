/**
 * Created by tzahikarni on 17/08/2016.
 */

export default class CalculatorController{
    constructor($scope) {
        $scope.z = 0;
        $scope.sum = function() {
            $scope.z = $scope.x + $scope.y;
        };
    }
}