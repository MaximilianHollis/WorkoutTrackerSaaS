import react, { useState, useContext } from 'react'
import Authentication from '../src/Components/Authentication/Authentication'

export default function Authenticate() {
  const [page, setPage] = useState(true)
  return <>
    <Authentication mode={page ? 'login' : 'register'} />
    <button onClick={() => setPage(!page)}>switch</button>
  </>
}