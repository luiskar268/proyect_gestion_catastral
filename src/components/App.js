import React from "react";
//import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import logo from "../assets/img/escudo.png";
import mapa from "../assets/img/cartagena-map.jpg";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm ">

                {/* <!-- Navbar Brand--> */}
                <a className="navbar-brand ps-3 col-sm-2" href="index.html">
                    <Link to="/index" className="navbar-brand ps-3">
                        <img className="rounded-pill" width="100" height="100" src={logo} alt="logo" />
                    </Link>
                </a>

                {/* <!-- Sidebar Toggle--> */}
                <div className="navbar-brand ps-3 col-sm-2">
                    <button className="btn btn-link btn-lg order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                </div>
                <div className="navbar-brand navbar-expand-sm ps-3 col-sm-4">
                    <button className="btn btn-primary btn-lg order-1 order-lg-0 me-4 me-lg-0" id="btnGenerarFactura" href="#!">GENERAR FACTURA</button>
                </div>
                <div className="navbar-brand navbar-expand-sm ps-3 col-sm-2">
                    <button className="btn btn-primary btn-lg order-1 order-lg-0 me-4 me-lg-0" id="btnIniciarSesion" href="#!">INICIAR SESIÓN</button>
                </div>
                <div className="navbar-brand navbar-expand-sm ps-3 col-sm-2">
                    <button className="btn btn-primary btn-lg order-1 order-lg-0 me-4 me-lg-0" id="btnRegistro" href="#!">REGISTRO</button>
                </div>

            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading"></div>
                                <Link to="/dashboard" className="navbar-brand ps-3">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-tachometer-alt"></i>
                                    </div>
                                    Dashboard
                                </Link>
                                <div className="sb-sidenav-menu-heading">Interface</div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Layouts
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Pages
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="login.html">Login</a>
                                                <a className="nav-link" href="register.html">Register</a>
                                                <a className="nav-link" href="password.html">Forgot Password</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Error
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="401.html">401 Page</a>
                                                <a className="nav-link" href="404.html">404 Page</a>
                                                <a className="nav-link" href="500.html">500 Page</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <a className="nav-link" href="charts.html">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Charts
                                </a>
                                <a className="nav-link" href="tables.html">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Tables
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div>
                            <br></br>
                            <div>
                                <h1 className="text-center text-success">IMPUESTO PREDIAL CARTAGENA</h1>
                            </div>

                            <img className="img-fluid rounded mx-auto d-block" width="700" height="700" src={mapa} alt="mapa" />

                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2021</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App