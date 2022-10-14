// import React from "react";
// import "./About.css";



// const About = () => {
// 	return (
// 		<div>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             facere doloremque veritatis odit similique sequi. Odit amet fuga nam
//             quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
//             totam vero quas provident ipsam, veritatis nostrum velit quos
//             recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
//             earum unde eligendi autem praesentium, doloremque distinctio nesciunt
//             porro tempore quis eaque labore voluptatibus ea necessitatibus
//             exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
//             tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
//             quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
//             delectus expedita a alias nam recusandae illo debitis repellat libero,
//             quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
//             dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
//     </div>
// 		)
// };

// export default About;

import React from 'react'

function About() {
  return (
    <div>
 <>
        
        <div className="container my-3 py-3">
          <h1 className="text-center">Home</h1>
          <hr />
          
  
          <h2 className="text-center py-4">Our Products</h2>
          <div className="row">
          <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mystery Images</h5></article>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mystery Images </h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mystery Images</h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mystery Images</h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mystery Images</h5></article>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mens's Clothing</h5></article>
                </div>
              </div>
            </div>   
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mens's Clothing</h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mens's Clothing</h5></article>
                </div>
              </div>
            </div>
          </div>

          
        </div>
     
      </>
    </div>


  )
}

export default About;