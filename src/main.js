import _ from 'lodash';

const arr = [1, 2, 3];

const b = _.get(arr, '1', 0);

console.log(b);
