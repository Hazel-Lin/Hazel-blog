export interface Item {
  type: string
  name: string
  title: string
  highlight: boolean
  thumbnail: string | undefined
  date: Date | string
  birthtime: Date | string
}

export interface ArticlesList {
  year: string | number
  list: Item[]
}

export interface SearchResult {
  item: ArticlesList
  matches: any
}

export type Menu = ArticlesList | SearchResult | Item
