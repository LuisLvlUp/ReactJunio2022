import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutUs } from '../AboutUs/AboutUs'
import { Home } from '../Home/Home'
import { Navigation } from '../Navigation/Navigation'
import { NotFound } from '../NotFound/NotFound'
import { Productos } from '../Productos/Productos'

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
        <Route path="productos" element={
          <Navigation>
            <Productos />
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
