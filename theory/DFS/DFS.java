package theory.DFS;

import java.util.ArrayList;

public class DFS {
  private static boolean[] visited = new boolean[9];
  private static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

  public static void main(String[] args) {
    initGraph();
    dfs(1);
  }

  private static void dfs(int x) {
    visited[x] = true;
    System.out.println(x);
    for (int ii = 0; ii < graph.get(x).size(); ii++) {
      int y = graph.get(x).get(ii);
      if (!visited[y])
        dfs(y);
    }
  }

  private static void initGraph() {
    for (int i = 0; i < 9; i++) {
      graph.add(new ArrayList<Integer>());
    }

    graph.get(1).add(2);
    graph.get(1).add(3);
    graph.get(1).add(8);

    graph.get(2).add(1);
    graph.get(2).add(7);

    graph.get(3).add(1);
    graph.get(3).add(4);
    graph.get(3).add(5);

    graph.get(4).add(3);
    graph.get(4).add(5);

    graph.get(5).add(3);
    graph.get(5).add(4);

    graph.get(6).add(7);

    graph.get(7).add(2);
    graph.get(7).add(6);
    graph.get(7).add(8);

    graph.get(8).add(1);
    graph.get(8).add(7);
  }

}