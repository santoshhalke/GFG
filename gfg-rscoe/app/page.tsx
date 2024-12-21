import HeroSection from './components/hero-section';
import '@/public/css/hero.css';
import '@/public/css/page.css';


export default function Home() {
  return (
    <div className='main-container'>
      <HeroSection />
    </div>
  );
}
