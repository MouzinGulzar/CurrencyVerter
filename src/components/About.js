import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return(
    <div>
     <h1 className="mt-4" style={{ fontWeight: "bold" }}>
        About Us
      </h1>
      <div className="container text-left">
        <div class="card w-100 mt-3">
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:"bold", color: "#0d6efd" }}>
              Introduction
            </h5>
            <p class="card-text">
              It is a simple currency converter tool which converts currency both ways in more than 150 currencies.
            </p>
            <Link to="/" class="btn btn-primary">
              Visit Home
            </Link>
          </div>
        </div>
        <div class="card w-100 my-3">
          <div class="card-body">
            <h5 class="card-title mb-4" style={{fontWeight:"bold", color: "#0d6efd" }}>Meet the Developer</h5>
            <p class="card-text">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  <strong>Developed by: </strong>
                </li>
                <li class="list-group-item " aria-current="true">
                  <strong>Mouzin Gulzar</strong>
                </li>
              </ul>
            </p>
          </div>
          <div class="card-body">
            <p class="card-text">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">
                  <strong>Contact: </strong>
                </li>
                <li class="list-group-item ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:%20mouzingulzar.work@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <strong>Mail</strong>
                  </a>
                </li>
                <li class="list-group-item ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/mouzin_monis"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <span>
                      <b>Instagram</b>
                    </span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://m.facebook.com/100027488494051"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <span>
                      <b>Facebook</b>
                    </span>
                  </a>
                </li>
              </ul>
            </p>
          </div>

          <div class="card-body">
            <p class="card-text">
              <ul class="list-group">
                <li class="list-group-item active">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:mouzingulzar.work@gmail.com?subject=Feedback%20-%20Curverter"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <span>
                      <b>Feedback</b>
                    </span>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
    </div>
</div>
  )
}
