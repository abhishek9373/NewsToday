import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{fontSize:"2.2vw"}}>NewsToday</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:"1.5vw"}}>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle mx-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                                            Select Country
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{overflow:"scroll", height:"400px"}}>
                                            <li><a class="dropdown-item" href="#">Argentina</a></li>
                                            <li><a class="dropdown-item" href="#">Australia</a></li>
                                            <li><a class="dropdown-item" href="#">Austria</a></li>
                                            <li><a class="dropdown-item" href="#">Belgium</a></li>
                                            <li><a class="dropdown-item" href="#">Brazil</a></li>
                                            <li><a class="dropdown-item" href="#">Bulgaria</a></li>
                                            <li><a class="dropdown-item" href="#">Canada</a></li>
                                            <li><a class="dropdown-item" href="#">China</a></li>
                                            <li><a class="dropdown-item" href="#">Colombia</a></li>
                                            <li><a class="dropdown-item" href="#">Cuba</a></li>
                                            <li><a class="dropdown-item" href="#">Czech Republic</a></li>
                                            <li><a class="dropdown-item" href="#">Egypt</a></li>
                                            <li><a class="dropdown-item" href="#">France</a></li>
                                            <li><a class="dropdown-item" href="#">Germany</a></li>
                                            <li><a class="dropdown-item" href="#">Greece</a></li>
                                            <li><a class="dropdown-item" href="#">Hong Kong</a></li>
                                            <li><a class="dropdown-item" href="#">Hungary</a></li>
                                            <li><a class="dropdown-item" href="#">India</a></li>
                                            <li><a class="dropdown-item" href="#">Indonesia</a></li>
                                            <li><a class="dropdown-item" href="#">Ireland</a></li>
                                            <li><a class="dropdown-item" href="#">Israel</a></li>
                                            <li><a class="dropdown-item" href="#">Italy</a></li>
                                            <li><a class="dropdown-item" href="#">Japan</a></li>
                                            <li><a class="dropdown-item" href="#">Latvia</a></li>
                                            <li><a class="dropdown-item" href="#">Lithuania</a></li>
                                            <li><a class="dropdown-item" href="#">Malaysia</a></li>
                                            <li><a class="dropdown-item" href="#">Mexico</a></li>
                                            <li><a class="dropdown-item" href="#">Morocco</a></li>
                                            <li><a class="dropdown-item" href="#">Netherlands</a></li>
                                            <li><a class="dropdown-item" href="#">New Zealand</a></li>
                                            <li><a class="dropdown-item" href="#">Nigeria</a></li>
                                            <li><a class="dropdown-item" href="#">Norway</a></li>
                                            <li><a class="dropdown-item" href="#">Philippines</a></li>
                                            <li><a class="dropdown-item" href="#">Poland</a></li>
                                            <li><a class="dropdown-item" href="#">Portugal</a></li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                                <li className="nav-item mx-2"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
