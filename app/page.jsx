"use client"

import Users from "../components/User"

export default function HomePage() {
  return <section>
  <h1>Hello World</h1>
  {
    window.localStorage.getItem("token")
  }
  <Users/>
  </section>
}