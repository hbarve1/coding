/** @format */
// https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

class Graph {
  adjancencyMap: Map<number, number[][]>;

  weights: Map<number, number>;

  constructor() {
    this.adjancencyMap = new Map();
    this.weights = new Map();
  }

  addNode(node: number) {
    this.adjancencyMap.set(node, []);
  }

  addEdge(node: number, weight: number, edge: number) {
    const createdEdge = [weight, edge];
    this.adjancencyMap.get(node)?.push(createdEdge);
  }

  createNodeFromRange(range: number) {
    for (let i = 1; i <= range; i += 1) {
      this.addNode(i);
    }
  }

  bfs(startNode: number) {
    const visited = new Set<number>();
    visited.add(startNode);
    this.weights.clear();
    this.weights.set(startNode, 0);

    for (const item of visited) {
      const nodeKey = item as number;
      const nodeWeight = this.weights.get(nodeKey) as number;

      const node = this.adjancencyMap.get(nodeKey) as number[][];

      for (let j = 0; j < node.length; j += 1) {
        const edgeProps = node[j];
        const weight = edgeProps[0];
        const newNode = edgeProps[1];

        const totalWeight = nodeWeight + weight;
        visited.add(newNode);

        if (!this.weights.has(newNode)) {
          this.weights.set(newNode, totalWeight);
        }
      }
    }
  }

  print() {
    let text = "";
    for (let i = 1; i <= this.adjancencyMap.size; i += 1) {
      const weight = this.weights.get(i);

      if (weight === undefined) {
        text += "-1 ";
      } else if (weight > 0) {
        text += `${weight} `;
      }
      // else if (weight === 0) {
      //   continue;
      // }
    }
    console.log(text);
    return text.trim();
  }

  clear() {
    this.weights.clear();
    this.adjancencyMap.clear();
  }
}

function processData(input: string) {
  const lines = String(input).split(/\r?\n/);
  const queryCount = Number(lines[0]);
  const graph = new Graph();
  let queryStartIndex = 1;
  const results = [];

  for (let i = 0; i < queryCount; i += 1) {
    const queryProps = lines[queryStartIndex].split(" ");
    const nodeCount = Number(queryProps[0]);
    const edgeCount = Number(queryProps[1]);

    graph.createNodeFromRange(nodeCount);

    for (let j = 1; j <= edgeCount; j += 1) {
      const edgeLine = lines[queryStartIndex + j];
      const edge = edgeLine.split(" ");
      const node0 = Number(edge[0]);
      const node1 = Number(edge[1]);

      graph.addEdge(node0, 6, node1);
      graph.addEdge(node1, 6, node0);
    }
    queryStartIndex = queryStartIndex + edgeCount + 2;
    const startNode = lines[queryStartIndex - 1];
    graph.bfs(Number(startNode));
    const str = graph.print();
    graph.clear();

    results.push(str);
  }

  return results.join("\n").trim();
}

export default processData;
