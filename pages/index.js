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
      setInfo(<div className='alert alert-info'>{'username dan password salah'}</div>)
      Router.push('admin/dashboard')
    } else {
      setInfo(<div className='alert alert-info'>{'username dan password salah'}</div>)
    }

  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setInfo('')
    setValue({
      username: '',
      password: ''
    })
  }

  return (<Form value={value} handleChange={handleChange} handleSubmit={handleSubmit} info={info} reset={reset}></Form>)
}
