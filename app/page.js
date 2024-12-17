import Image from "next/image";

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
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </nav>
        </div>
        <div className="hero">
            <img src="/images/banner-image.jpg" alt="Hero Banner" />
            <div className="hero-text">
                <h2>PROFESSIONAL PHOTO EDITING</h2>
                <p>From $0.25 per Image Retouch</p>
            </div>
        </div>
    </header>

    {/* Services Section */}
    <section className="services">
        <h2>Photo Editing Services We Provide</h2>
        <Service
            title="Portrait Photo Editing"
            description="High-end retouching, skin smoothing, blemish removal..."
            imgSrc="/images/portrait.jpg"
        />
        <Service
            title="Wedding Photo Editing"
            description="Perfect edits for wedding photography..."
            imgSrc="/images/wedding.jpg"
        />
        {/* Add more services here */}
    </section>

    {/* How It Works Section */}
    <section className="how-it-works">
        <h2>How Does It Work?</h2>
        <ul>
            <li>1. Upload your photos</li>
            <li>2. Tell us your requirements</li>
            <li>3. Get your images back in 24 hours</li>
        </ul>
    </section>

    {/* Upload Section */}
    <section className="upload">
        <h2>Ready to Retouch Your Images?</h2>
        <button>UPLOAD IMAGE</button>
    </section>

    {/* Stats Section */}
    <section className="stats">
        <h3>Why Choose Us?</h3>
        <div className="stats-info">
            <div>2M+ Images Processed</div>
            <div>90+ Editors</div>
            <div>10M+ Happy Customers</div>
        </div>
    </section>

    {/* Testimonials */}
    <section className="testimonials">
        <h2>Customer Feedback</h2>
        <blockquote>
            <p>"VeloxEdit delivered high-quality images in no time!"</p>
            <cite>- Happy Customer</cite>
        </blockquote>
    </section>

    {/* Footer */}
    <footer>
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
