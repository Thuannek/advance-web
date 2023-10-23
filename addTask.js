import _ from 'lodash';

var number = [1, 2, 3, 4, 5];

var secondLargest = _.sortBy(number)[3];

console.log(secondLargest)