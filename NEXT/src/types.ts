type Info ={
    count: number
    pages:  number
    next: string
    prev: string
  }
   type Result ={
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
  }
  type Response ={
    info: Info
    results: Result[]
  }


  export default Response