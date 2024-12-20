// React
import { useEffect, useRef } from 'react';
// Component
import Footer from '@/components/footer/Footer.jsx';
import Header from '@/components/header/Header.jsx';
import Main from '@/components/main/Main.jsx';
// SCSS
import './App.module.scss';
// GSAP
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Lenis
import { ReactLenis } from '@studio-freight/react-lenis';
// Font
import './library/adobefont.js';

// ****************************************************************
// GSAP 初期設定
gsap.registerPlugin(ScrollTrigger, useGSAP);
// ****************************************************************

function App() {
	// GSAPとLenisを統合
	const lenisRef = useRef();

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}
		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	});

	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				duration: 1.2,
			}}
			ref={lenisRef}
			autoRaf={false}
		>
			<Header />
			<Main />
			<Footer />
		</ReactLenis>
	);
}

export default App;
