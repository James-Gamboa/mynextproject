"use client";

import React, { useEffect } from "react";

function Users(){

  useEffect(()=> {
    alert("loaded!")
  }, [])

  return(
    <>
    <h2>Users</h2>
    </>
  )
}

export default Users;