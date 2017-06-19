function MainController($scope) {
	var toDoList = []; // create empty array for my list items
	$scope.toDoList = toDoList;

	// function to push list items from user input onto end of toDoList array
	$scope.addNewListItems = function() {
		$scope.toDoList.push(
			{
				name: $scope.newItem.name,
			}
		);
	}   

	// remove items from the array
	// Code reuse: https://stackoverflow.com/questions/15453979/how-do-i-delete-an-item-or-object-from-an-array-using-ng-click
	$scope.removeListItem = function($index) { 
		$scope.toDoList.splice($index,1);     
	}	   
}