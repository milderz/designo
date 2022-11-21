import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;

  line-height: 1.5;
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
      font-family: 'Jost', sans-serif;
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

:root {
--peach: #E7816B;
--light-peach: #FFAD9B;
--peach-bg: #FDF3F0;
--black: #1D1C1E;
--dark-grey: #333136;
--light-grey: #F1F3F5;
--white: #FFFFFF;
--text-sm: 1.6rem;

}

`;
