import './App.css'

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <nav className="nav container" aria-label="Navegación principal">
          <a className="brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">L</span>
            <span className="brand-name">LogiTrack <strong>Solutions</strong></span>
          </a>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Optimización de rutas y gestión de flotas</p>
              <h1>Entregas más rápidas, rutas más inteligentes.</h1>
              <p className="hero-text">
                LogiTrack Solutions ayuda a empresas de entrega de paquetes a
                domicilio a reducir costos, ahorrar combustible y cumplir cada
                entrega a tiempo con tecnología de optimización de última
                generación.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">Solicita una demo</a>
                <a className="btn btn-secondary" href="#servicios">Conoce nuestros servicios</a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <p className="eyebrow">Servicios</p>
            <h2>Lo que hacemos por tu flota</h2>
            <div className="cards">
              <article className="card">
                <h3>Optimización de rutas</h3>
                <p>
                  Algoritmos que calculan la ruta más eficiente para cada
                  repartidor, reduciendo kilómetros recorridos y tiempos de
                  entrega.
                </p>
              </article>
              <article className="card">
                <h3>Gestión de flotas</h3>
                <p>
                  Monitoreo en tiempo real de vehículos, conductores y entregas
                  desde un solo panel de control centralizado.
                </p>
              </article>
              <article className="card">
                <h3>Análisis y reportes</h3>
                <p>
                  Datos claros sobre rendimiento, consumo de combustible y
                  cumplimiento para tomar mejores decisiones.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="nosotros" className="section section-alt">
          <div className="container">
            <p className="eyebrow">Nosotros</p>
            <h2>Especialistas en logística de envios a domicilio</h2>
            <p className="lead">
              Somos una empresa dedicada a la optimización de rutas y la gestión
              de flotas para empresas de entrega de paquetes a domicilio. Nuestro
              objetivo es simple: que cada paquete llegue a tiempo, con el menor
              costo posible.
            </p>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container contact">
            <p className="eyebrow">Contacto</p>
            <h2>Hablemos de tu flota</h2>
            <p className="lead">
              Cuéntanos sobre tu operación y te mostraremos cómo LogiTrack puede
              ayudarte a optimizarla.
            </p>
            <a className="btn btn-primary" href="mailto:contacto@logitrack.com">
              contacto@logitrack.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} LogiTrack Solutions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
