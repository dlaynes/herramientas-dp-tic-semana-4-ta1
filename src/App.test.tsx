import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('LogiTrack Solutions', () => {
  it('muestra el nombre de la empresa en la barra de navegación', () => {
    render(<App />)
    const brand = screen.getByRole('link', { name: /LogiTrack Solutions/i })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveAttribute('href', '#inicio')
  })

  it('muestra el titular principal de la página', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /entregas más rápidas, rutas más inteligentes/i,
      }),
    ).toBeInTheDocument()
  })

  it('muestra los tres servicios principales', () => {
    render(<App />)
    expect(screen.getByText('Optimización de rutas')).toBeInTheDocument()
    expect(screen.getByText('Gestión de flotas')).toBeInTheDocument()
    expect(screen.getByText('Análisis y reportes')).toBeInTheDocument()
  })

  it('incluye un enlace de contacto por correo', () => {
    render(<App />)
    const mailLink = screen.getByRole('link', {
      name: 'contacto@logitrack.com',
    })
    expect(mailLink).toHaveAttribute('href', 'mailto:contacto@logitrack.com')
  })
})
