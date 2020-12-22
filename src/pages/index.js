import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import Contact from '../components/Contact';
import ResumeModal from '../components/ResumeModal';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
