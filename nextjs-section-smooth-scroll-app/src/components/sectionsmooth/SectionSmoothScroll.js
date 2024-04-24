"use client"
import React from 'react';
import { Link, Element } from 'react-scroll';

export default function SectionSmoothApp(){
  return (
    <div>
      <nav style={{position:'fixed',top:'0',left:'0',width: '100%',backgroundColor:'rgba(0,0,0,.5)'}}>
        <ul className="flex">
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500} style={{color:'white'}}
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500} style={{color:'white'}}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              activeClass="active" style={{color:'white'}}
              to="section3"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Section 3
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mainContent mt-[24px]">
      <Element name="section1">
      <section style={{height:'100vh',padding:'100px 0',backgroundColor: 'lightgreen'}}>
        Section 1
        </section>
      </Element>
      <Element name="section2" className="element">
      <section style={{height:'100vh',padding:'100px 0',backgroundColor: 'powderblue'}}>
        Section 2
        </section>
      </Element>
      <Element name="section3" className="element">
      <section style={{height:'100vh',padding:'100px 0',backgroundColor: 'lightblue'}}>
        Section 3
        </section>
      </Element>
      </div> 
    </div>
  );
};
