import { Route } from "../types/routes"

export const routes: Route[] = [
  {
    id: "socimol-mozal",
    name: "Socimol - Mozal",

    description: "Via coca-cola, Casa branca",

    stops: [
      { stopId: "machava-socimol", order: 1, role: "terminal" },
      { stopId: "muchina", order: 2 },
      { stopId: "baião", order: 3 },
      { stopId: "pinheiros", order: 4 },
      { stopId: "mafureira", order: 5 },
      { stopId: "romos", order: 6 },
      { stopId: "naz-naz", order: 7 },
      { stopId: "machava-sede", order: 8},
      { stopId: "tamega", order: 9 },
      { stopId: "coca-cola", order: 10 },
      { stopId: "bananeiras", order: 11 },
      { stopId: "casa-branca", order: 12, role: "major"},
      { stopId: "pilvi", order: 13 },
      { stopId: "bic", order: 14 },
      { stopId: "magueira", order: 15 },
      { stopId: "ceres", order: 16},
      { stopId: "joao-mateus", order: 17, role: "major" },
      { stopId: "hospital", order: 18 },
      { stopId: "matola-rio", order: 19, role: "major" },
      { stopId: "alianca", order: 20 },
      { stopId: "antena", order: 21 },
      { stopId: "cruzamento", order: 22},
      { stopId: "mandela", order: 23 },
      { stopId: "instituto-guebuza", order: 24 },
      { stopId: "cajueiro", order: 25 },
      { stopId: "primeira-entrada", order: 26 },
      { stopId: "mozal", order: 27, role: "terminal" }
    ]
  }
]