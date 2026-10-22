import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Engineering } from '../components/sections/Engineering';
import { Photography } from '../components/sections/Photography';
import { Certificates } from '../components/sections/Certificates';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';

export function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Engineering />
            <Photography />
            <Certificates />
            <Experience />
            <Contact />
        </main>
    );
}
