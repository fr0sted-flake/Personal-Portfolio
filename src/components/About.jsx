import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
          inventore? Fugit, temporibus commodi consequatur eveniet quia tenetur
          aliquam dolorum sunt? Repudiandae voluptas dolor cum nulla dolorem
          quo, facere, autem, iste cupiditate veniam culpa neque officiis natus
          minima voluptatibus nesciunt rerum. Perferendis, fuga dolorum! Quidem
          inventore sequi eos blanditiis quam minus!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam fugiat
          possimus odit ullam, eum repellendus eveniet tenetur repellat
          accusamus dicta minus atque. Dolorem natus doloribus sed optio, modi
          esse sequi? Illum, nobis est repellendus minima ipsum adipisci,
          perspiciatis, ipsam labore dolore iste aliquid et totam porro at fugit
          ut dolorem!
        </p>
      </div>
    </div>
  );
}

export default About;
