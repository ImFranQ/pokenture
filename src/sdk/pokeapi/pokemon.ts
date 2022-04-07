import { useEffect, useState } from "react"
import { apiurl } from "./common"

export const usePokemonList = (limit: number) => {
  const [data, setData] = useState<any[]>([])
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [isLoading, setIsloading] = useState(false)
  
  const loadData = async () => {
    setIsloading(true)
    try {
      const res = await (await fetch(`${apiurl}pokemon?limit=${limit}&offset=${offset}`)).json()
      setCount(res.count)
      setTotal(Math.ceil(res.count / limit))
      setData(res.results)
    } catch (err) {
    }
    setIsloading(false)
  }

  const next = () => {
    if((page +1) > total) return
    goPage(page + 1)
  }

  const prev = () => {
    if ((page - 1) <= 0) return
    goPage(page - 1)
  }
  
  const goPage = (page: number) => {
    if (page <= 0 || page > total) return

    setPage(page)
    setOffset((page - 1) * limit)
  }

  useEffect(() => {
    loadData()
  }, [page])

  return {offset, data, total, page, next, prev, isLoading, goPage, count}
}

export const useFindPokemon = (name: string) => {
  const [data, setData] = useState<any | null>(null)
  const [isLoading, setIsloading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const loadData = async () => {
    setIsloading(true)
    try {
      const res = await (await fetch(`${apiurl}pokemon/${name}`)).json()
      console.log('wat');
      
      setData(res)
      setHasError(false)
    } catch (err) {
      setHasError(true)
      setData(null)
    }
    setIsloading(false)
  }

  useEffect(() => {
    loadData()
  }, [name])

  return {data, isLoading, hasError}
}