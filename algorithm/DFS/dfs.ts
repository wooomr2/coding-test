const graph = [
  [], // 0 
  [2, 3, 8], // 1
  [1, 7], // 2
  [1, 4, 5], // 3 
  [3, 5], // 4
  [3, 4], // 5
  [7], // 6
  [2, 6, 8], // 7
  [1, 7], // 8
];
// 1 > 2 > 7 > 6 > 8 > 3 > 4 > 5

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


