const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array<boolean>().fill(false);

const dfs = (graph: number[][], v:number, visited: boolean[]) => {
  visited[v] = true
  console.info(v)
  
  for(const ii of graph[v]) {
    if(!visited[ii]) {
      dfs(graph, ii, visited)
    }
  }
}

dfs(graph, 1, visited)


