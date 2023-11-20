import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --color-black:#112B3C;
  --color-purple:#4E4FEB;
  --color-blue:#205375;
  --color-grey:#EFEFEF;
  --color-orange:#F66B0E;
  --color-white:#FFFFFF;
  --color-red :#FF0000;
 

  --color-lightpurple:#4D4C7D;
  --color-lightblue:#D6EFF2;
  
  --color-orange-hover: #de5900;




  --backdrop-color: rgba(0, 0, 0, 0.8);


  --fs-xxl:7.2rem;
  --fs-xl: 5.6rem;
  --fs-x: 4.4rem;
  --fs-md:3.6rem;
  --fs-sm: 2.4rem;
  --fs-xsm:1.6rem;

  --border-md:4rem;
  --border-sm:1rem;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin:0  ;
}


html {
  font-size: 62.5%;
}


body {
font-family: "Poppins", sans-serif;
background-color:var(--color-blue);




transition: color 0.3s, background-color 0.3s;
 min-height: 100vh;
line-height: 1.5;
font-size: 1.6rem;
overflow-x:hidden;

}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-orange);
  outline-offset: -1px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-size:5rem;
}

img {
  max-width: 100%;

 
}




`;

export default GlobalStyles;
