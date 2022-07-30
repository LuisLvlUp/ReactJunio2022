import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutUs } from '../AboutUs/AboutUs'
import { Carrito } from '../Carrito/Carrito'
import { Home } from '../Home/Home'
import { Navigation } from '../Navigation/Navigation'
import { NotFound } from '../NotFound/NotFound'
import { Productos } from '../Productos/Productos'
import { Todos } from '../Todos/Todos'

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={
          <Navigation>
            <Home />
          </Navigation>}
        />
        <Route path="about" element={
          <Navigation>
            <AboutUs />
          </Navigation>}
        />
        <Route path="todos" element={
          <Navigation>
            <Todos />
          </Navigation>}
        />
        <Route path="carrito" element={
          <Navigation>
            <Carrito />
          </Navigation>}
        />
        <Route path="404" element={
          <Navigation>
            <NotFound />
          </Navigation>}
        />
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Routes>
    </>

  )
}
