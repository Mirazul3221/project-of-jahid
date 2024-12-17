'use client'
import './common-css/page1.css'
import MoveContainer from './components/MoveContainer';
export default function Home() {
  return (
    <div className="App">
    {/* Header Section */}
    <header>
        <div className="top-bar">
            <h1>VELOXEDIT</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="./portfolio">Portfolio</a></li>
                </ul>
            </nav>
        </div>
        <div className="hero">
            <img className='w-full' src="https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg" alt="Hero Banner" />
            <div className="hero-text">
                <h2>PROFESSIONAL PHOTO EDITING</h2>
                <p>From $0.25 per Image Retouch</p>
            </div>
        </div>
    </header>
    
   
   <div className='w-1/2'><MoveContainer/></div>
    {/* Services Section */}
    <section className="services px-6">
        <h2>Photo Editing Services We Provide</h2>
        <Service
            title="Portrait Photo Editing"
            description="High-end retouching, skin smoothing, blemish removal..."
            imgSrc="https://img.freepik.com/premium-photo/young-man-using-mobile-phone_1048944-3843184.jpg"
        />
        <Service
            title="Wedding Photo Editing"
            description="Perfect edits for wedding photography..."
            imgSrc="https://img.freepik.com/premium-photo/young-man-using-mobile-phone_1048944-3843184.jpg"
        />
        {/* Add more services here */}
    </section>
    <div className='md:w-1/2'><MoveContainer/></div>
    {/* How It Works Section */}
    <section className="how-it-works px-6">
        <h2>How Does It Work?</h2>
        <ul>
            <li>1. Upload your photos</li>
            <li>2. Tell us your requirements</li>
            <li>3. Get your images back in 24 hours</li>
        </ul>
    </section>
    <div className='md:w-1/2'><MoveContainer/></div>
    {/* Upload Section */}
    <section className="upload px-6">
        <h2>Ready to Retouch Your Images?</h2>
        <button>UPLOAD IMAGE</button>
    </section>
    <div className='md:w-1/2'><MoveContainer/></div>
    {/* Stats Section */}
    <section className="stats px-6">
        <h3>Why Choose Us?</h3>
        <div className="stats-info">
            <div>2M+ Images Processed</div>
            <div>90+ Editors</div>
            <div>10M+ Happy Customers</div>
        </div>
    </section>

    {/* Testimonials */}
    <section className="testimonials px-6">
        <h2>Customer Feedback</h2>
        <blockquote>
            <p>"VeloxEdit delivered high-quality images in no time!"</p>
            <cite>- Happy Customer</cite>
        </blockquote>
    </section>

    {/* Footer */}
    <footer className='px-6'>
        <div className="footer-content">
            <h3>VeloxEdit</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    </footer>
</div>
);
}

// Service Component
function Service({ title, description, imgSrc }) {
return (
<div className="service">
    <h3>{title}</h3>
    <div className="service-content">
        <p>{description}</p>
        <img src={imgSrc} alt={title} />
        <a href="#" className="btn">Learn More</a>
    </div>
</div>
  );
}
