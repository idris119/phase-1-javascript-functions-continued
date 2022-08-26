// code your solution here
function saturdayFun(action = 'roller-skate'){
    return `This Saturday, I want to ${action}!`;
}

function mondayWork(action = "go to the office"){
    return `This Monday, I will ${action}.`;
}

let wrapAdjective = function (adjective = "*") {
	return function (highlight = "a hard worker") {
		return `You are ${adjective}${highlight}${adjective}!`;
	};
};