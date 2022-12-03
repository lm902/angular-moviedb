import MovieDetailResultObject from './MovieDetailResultObject'

class UserState<T> {
  private key: string
  constructor (key: string) {
    this.key = key
  }

  get all (): T[] {
    return window.localStorage[this.key] != null ? JSON.parse(window.localStorage[this.key]) : []
  }

  add (i: T): void {
    if (!this.has(i)) {
      window.localStorage[this.key] = JSON.stringify([...this.all, i])
    }
  }

  remove (i?: T): void {
    const op = this.all
    if (i == null) return
    while (this.has(i)) {
      op.splice(this.indexOf(i), 1)
      window.localStorage[this.key] = JSON.stringify(op)
    }
  }

  indexOf (i: T): number {
    const op = this.all
    for (const c of op) {
      if (this.compare(i, c)) {
        return op.indexOf(c)
      }
    }
    return -1
  }

  has (i: T): boolean {
    return this.indexOf(i) > -1
  }

  compare (i: T, c: T): boolean {
    return ((i as any).id != null && (c as any).id != null) ? (i as any).id === (c as any).id : i === c
  }
}

export const favorites = new UserState<MovieDetailResultObject>('favorites')
export const liked = new UserState<MovieDetailResultObject>('liked')
export const disliked = new UserState<MovieDetailResultObject>('disliked')
