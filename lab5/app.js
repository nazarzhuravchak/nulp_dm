const computeIsomorphisms = require('graph-isomorphisms');

const G = [[1, 2], [2, 3], [3, 4], [4,1]];
console.log('Graph A-A is a isomorphic:', computeIsomorphisms(G, G).length === 4);

const I = [[42, 666], [666, 1], [1, 242], [242,42]];
console.log('Graph A-B is a isomorphic:', computeIsomorphisms(G, I).length > 0);