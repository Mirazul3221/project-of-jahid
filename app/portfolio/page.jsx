import React from 'react';
import '../common-css/page2.css';

function App() {
    return (
        <div className="App">
            {/* Header */}
            <header>
                <div className="top-bar">
                    <h1>VELOXEDIT</h1>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="hero">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg" alt="Headshot Retouching" />
                    <div className="hero-text">
                        <h2>HEADSHOT RETOUCHING SERVICES</h2>
                        <p>From $0.25 Per Image Retouch</p>
                    </div>
                </div>
            </header>

            {/* Main Section */}
            <section className="services">
                <h2>Headshot Retouching Services We Provide</h2>
                <Service
                    title="Skin Retouching"
                    description="Smoothing, blemish removal, and skin tone correction."
                    imgSrc="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
                />
                <Service
                    title="Background Removal"
                    description="Change or clean the background for your headshots."
                    imgSrc="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
                />
                <Service
                    title="Light & Color Adjustments"
                    description="Perfect lighting and color balancing for professional results."
                    imgSrc="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
                />
                <Service
                    title="Teeth Whitening & Eyes Enhancement"
                    description="Natural teeth whitening and eye retouching for stunning portraits."
                    imgSrc="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
                />
                <Service
                    title="Face Reshaping"
                    description="Enhance facial features with light reshaping for a professional look."
                    imgSrc="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
                />
            </section>

            {/* Portfolio Grid */}
            <section className="portfolio">
                <h2>Our Portfolio</h2>
                <div className="portfolio-grid">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <img
                            key={index}
                            src={`https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg`}
                            alt={`Portfolio ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2>How Does It Work?</h2>
                <ul>
                    <li>1. Upload Your Photos</li>
                    <li>2. Tell Us Your Requirements</li>
                    <li>3. Get Professionally Edited Photos</li>
                </ul>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <form>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Send</button>
                    </form>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

// Reusable Service Component
function Service({ title, description, imgSrc }) {
    return (
        <div className="service">
            <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={imgSrc} alt={title} />
        </div>
    );
}

export default App;
