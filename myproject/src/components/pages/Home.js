// import React from "react";
// // import "./App.css";
// const Home = () => {
//     return (
      
      
//       <div className="container">
//         <div className="py-4">
//         <div>
//         <center> <h1>Home Page</h1></center> 
//         <img src={`https://picsum.photos/300/160/?t=${Math.random()}`}         <hr></hr>
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
//           printer took a galley of type and scrambled it to make a type specimen book. 
//           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
//            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//         </div>
//         </div>
//       </div>
//     );
//   };
// export default Home;


import React from 'react'

function Home() {
  return (
    <div>
 <>
        
        <div className="container my-3 py-3">
          <h1 className="text-center">Home</h1>
          <hr />
          <p className="lead text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            facere doloremque veritatis odit similique sequi. Odit amet fuga nam
            quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
            totam vero quas provident ipsam, veritatis nostrum velit quos
            recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
            earum unde eligendi autem praesentium, doloremque distinctio nesciunt
            porro tempore quis eaque labore voluptatibus ea necessitatibus
            exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
            tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
            quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
            delectus expedita a alias nam recusandae illo debitis repellat libero,
            quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
            dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
          </p>
  
          <h2 className="text-center py-4">Our Products</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`} alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Mystery</h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`}  alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Image</h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`}  alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Every</h5></article>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 contenedor mb-3 px-3">
              <div className="container_foto card h-100">
                <img className="card-img-top img-fluid" src={`https://picsum.photos/300/160/?t=${Math.random()}`}  alt="" height={160} />
                <div className="card-body">
                  <article><h5 className="card-title text-center">Time</h5></article>
                </div>
              </div>
            </div>
          </div>

          
        </div>
     
      </>
    </div>


  )
}

export default Home;