import React from "react";
import Typewriter from "typewriter-effect";

function Header() {
  return (
     <div>
                <header>

                <h1>FastNote</h1>
                </header>
                {
                 <div className="App">

                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter
                                
                                .typeString("Welcome To")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Krupa Sagar")
                                .deleteAll()
                                .typeString("#Notes2.0")
                                .start();
                        }}
                    />
                 </div>   
                }
            </div>

   
  );
}

export default Header;
