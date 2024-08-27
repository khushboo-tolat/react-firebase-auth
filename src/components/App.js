import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
//import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
            ),
        },
        {
            path: "/signup",
            element: <Signup />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    return (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
            <div style={{ minWidth: "400px" }}>
                <AuthProvider>
                    {/* <Router>
                        <Routes>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/Signup" component={Signup} />
                            <Route path="/Login" component={Login} />
                        </Routes>
                    </Router> */}

                    <RouterProvider router={router}/>
                </AuthProvider>
            </div>
        </Container>
    );
}

export default App; 
