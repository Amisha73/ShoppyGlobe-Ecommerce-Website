// src/AboutPage.js

import React from "react";
import { Card } from "react-bootstrap";

const AboutPage = () => {
  // Sample employee data 
  const employees = [
    {
      id: 1,
      name: "Employee 1",
      role: "Manager",
      image:
        "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Employee 2",
      role: "Sales Associate",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Employee 3",
      role: "Customer Support",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex flex-md-row-reverse flex-column justify-content-around align-items-center gap-5 mb-5 ">
        <div className="w-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="ShoppyGloe"
            className="img-fluid mb-4 rounded shadow w-100"
          />
        </div>
        <div className="w-50 ">
          <h1 className="text-center">About ShoppyGloe</h1>
          <p className="text-center">
            At ShoppyGloe, we believe in providing the best shopping experience
            for our customers. Our mission is to offer a wide range of products
            at competitive prices while ensuring exceptional customer service.
          </p>
        </div>
      </div>

      <p className="text-center fs-1 fw-bold">Meet Our Team</p>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
        {employees.map((employee) => (
          <Card key={employee.id} className="shadow">
            <img
              src={employee.image}
              alt={employee.name}
            />
            <div className="text-center">
              <h3>{employee.name}</h3>
              <p>Role: {employee.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
