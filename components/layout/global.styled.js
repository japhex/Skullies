import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'BONES';
		src: url('fonts/BONES.woff2') format('woff2'),
		url('fonts/BONES.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Amatic SC';
		src: url('fonts/AmaticSC-Regular.woff2') format('woff2'),
		url('fonts/AmaticSC-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Eusthalia Sans Stamped';
		src: url('fonts/EusthaliaSansStamped.woff2') format('woff2'),
		url('fonts/EusthaliaSansStamped.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	
	html, body {
			margin: 0;
			padding:0;
			font-family:'Amatic SC';
	}
`
