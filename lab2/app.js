const GraphEdge = require('./GraphEdge');
const Graph = require('./Graph');
const GraphVertex = require('./GraphVertex');
const eulerianPath = require('./eulerianPath');

function eulerianStart() {
  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');
  const vertexC = new GraphVertex('C');
  const vertexD = new GraphVertex('D');
  const vertexE = new GraphVertex('E');
  const vertexF = new GraphVertex('F');
  const vertexG = new GraphVertex('G');

  const edgeAC = new GraphEdge(vertexA, vertexC);
  const edgeAD = new GraphEdge(vertexA, vertexD);
  const edgeBC = new GraphEdge(vertexB, vertexC);
  const edgeBF = new GraphEdge(vertexB, vertexF);
  const edgeCD = new GraphEdge(vertexC, vertexD);
  const edgeCE = new GraphEdge(vertexC, vertexE);
  const edgeCF = new GraphEdge(vertexC, vertexF);
  const edgeDE = new GraphEdge(vertexD, vertexE);
  const edgeDG = new GraphEdge(vertexD, vertexG);
  const edgeEF = new GraphEdge(vertexE, vertexF);
  const edgeEG = new GraphEdge(vertexE, vertexG);
  const edgeFG = new GraphEdge(vertexF, vertexG);

  const graph = new Graph();

  graph
    .addEdge(edgeAC)
    .addEdge(edgeAD)
    .addEdge(edgeBC)
    .addEdge(edgeBF)
    .addEdge(edgeCD)
    .addEdge(edgeCE)
    .addEdge(edgeCF)
    .addEdge(edgeDE)
    .addEdge(edgeDG)
    .addEdge(edgeEF)
    .addEdge(edgeEG)
    .addEdge(edgeFG);

  const eulerianPathSet = eulerianPath(graph);
  console.log(eulerianPathSet.toString());
}

eulerianStart();
