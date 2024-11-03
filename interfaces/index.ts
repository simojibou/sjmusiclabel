export type TChildren = {
  children: React.ReactNode
}

export interface TEvents {
  image: StaticImageData
  title: string
  artiste: string
  tag: string
}

export type Tfavs = {
  image: StaticImageData
  name: string
  tag: string
}

export type Ttours = {
  date: string
  month: string
  title: string
  city: string
  state: string
}
export type TMerch = {
  image: StaticImageData
  title: string
  price: string
}

export interface TReleases extends TEvents {
  genre: string
}
