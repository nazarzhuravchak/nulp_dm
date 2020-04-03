function createAdjMatrix(V, G) {
  const adjMatrix = [];
  for (let i = 0; i < V; i++) {
    adjMatrix.push([]);
    for (let j = 0; j < V; j++) {
      adjMatrix[i].push(0);
    }
  }
  for (let i = 0; i < G.length; i++) {
    adjMatrix[G[i][0]][G[i][1]] = G[i][2];
    adjMatrix[G[i][1]][G[i][0]] = G[i][2];
  }
  return adjMatrix;
}

function printResult(MST) {
  console.log(MST);
}

function prims(V, G) {
  const adjMatrix = createAdjMatrix(V, G);
  let vertex = 0;
  const MST = [];
  const edges = [];
  const visited = [];
  let minEdge = [null, null, Infinity];

  while (MST.length !== V - 1) {
    visited.push(vertex);
    for (let r = 0; r < V; r++) {
      if (adjMatrix[vertex][r] !== 0) {
        edges.push([vertex, r, adjMatrix[vertex][r]]);
      }
    }
    for (let e = 0; e < edges.length; e++) {
      if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) {
        minEdge = edges[e];
      }
    }
    edges.splice(edges.indexOf(minEdge), 1);
    MST.push(minEdge);
    vertex = minEdge[1];
    minEdge = [null, null, Infinity];
  }
  printResult(MST);
  return MST;
}

const A = 0, B = 1, C = 2, D = 3, E = 4, F = 5, G = 6;

const graph = [
  [A, C, 3],
  [A, D, 9],
  [B, C, 2],
  [B, F, 4],
  [C, D, 14],
  [C, E, 6],
  [C, F, 8],
  [D, E, 12],
  [D, G, 5],
  [E, F, 5],
  [E, G, 2],
  [F, G, 7],
];

prims(7, graph);
