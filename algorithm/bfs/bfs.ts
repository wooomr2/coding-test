namespace bfs {
  const graph = [
    [], // 0
    [2, 3, 8], // 1
    [1, 7], // 2
    [1, 4, 5], // 3
    [3, 5], // 4O
    [3, 4], // 5
    [7], // 6
    [2, 6, 8], // 7
    [1, 7], // 8
  ];
  // 1 > 2 > 7 > 6 > 8 > 3 > 4 > 5

  const visited = new Array<boolean>(9).fill(false);

  const bfs = (graph: number[][], v: number, visited: boolean[]) => {
    const q: number[] = [];
    q.push(v);
    visited[v] = true;

    while (q.length > 0) {
      const x = q.shift()!;

      console.info(x);

      for (let i = 0; i < graph[x].length; i++) {
        const y = graph[x][i];
        if (!visited[y]) {
          q.push(y);
          visited[y] = true;
        }
      }
    }
  };

  bfs(graph, 1, visited);
}
