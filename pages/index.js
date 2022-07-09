import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/form'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Router from 'next/router'
export default function Home() {
  const [value, setValue] = useState({
    username: '',
    password: ''
  })
  const [info, setInfo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.username == 'admin' && value.password == '123') {
      setInfo(<>
        <div className='alert alert-info'> Login Berhasil</div>
      </>)
      Router.push('admin/dashboard')
    } else {
      setInfo(<>

        <div className='alert alert-info'> Login gagal</div>
      </>)
    }

  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {info}
      <Form value={value} handleChange={handleChange} handleSubmit={handleSubmit}></Form>
    </>
  )
}
