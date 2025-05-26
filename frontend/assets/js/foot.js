class FooterBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="foot">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3 class="footer-title">Dream Home</h3>
                            <p class="footer-desc">Your trusted partner in finding the perfect property. Experience luxury living with our exclusive real estate listings.</p>
                            <div class="social-links">
                                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div class="footer-section">
                            <h3 class="footer-title">Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#properties">Properties</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div class="footer-section">
                            <h3 class="footer-title">Legal</h3>
                            <ul class="footer-links">
                                <li><a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">Terms & Conditions</a></li>
                                <li><a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">Privacy Policy</a></li>
                                <li><a href="#" data-bs-toggle="modal" data-bs-target="#disclaimerModal">Disclaimer</a></li>
                            </ul>
                        </div>

                        <div class="footer-section">
                            <div class="ad-section">
                                <h3 class="footer-title text-color">Sponsored</h3>
                                <div class="ad-container" id="adContainer">
                                    <!-- Ads will be dynamically inserted here -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="copyright">
                        <p>&copy; ${new Date().getFullYear()} Dream Home Real Estate. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <!-- Terms Modal -->
            <div class="modal fade" id="termsModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Terms & Conditions</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <h6>1. Acceptance of Terms</h6>
                            <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions.</p>
                            <h6>2. Property Information</h6>
                            <p>All property information is believed to be accurate but not guaranteed.</p>
                            <!-- Add more terms as needed -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Privacy Modal -->
            <div class="modal fade" id="privacyModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Privacy Policy</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>We respect your privacy and are committed to protecting your personal data.</p>
                            <!-- Add privacy policy content -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Disclaimer Modal -->
            <div class="modal fade" id="disclaimerModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Disclaimer</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>The information provided on this website is for general guidance only.</p>
                            <!-- Add disclaimer content -->
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Initialize ad rotation
        this.initializeAds();
    }

    initializeAds() {
        const ads = [
            { title: 'Premium Listing', description: 'List your property today!', price: '₹999' },
            { title: 'Featured Property', description: 'Get more visibility', price: '₹1499' },
            { title: 'Property Boost', description: 'Reach more buyers', price: '₹799' }
        ];

        const adContainer = this.querySelector('#adContainer');
        let currentAdIndex = 0;

        function updateAd() {
            const ad = ads[currentAdIndex];
            adContainer.innerHTML = `
                <div class="ad-card">
                    <h4>${ad.title}</h4>
                    <p>${ad.description}</p>
                    <div class="ad-price">${ad.price}</div>
                    <button class="paybi-btn">Pay with PayBi</button>
                </div>
            `;
            currentAdIndex = (currentAdIndex + 1) % ads.length;
        }

        updateAd();
        setInterval(updateAd, 5000); // Rotate ads every 5 seconds
    }
}

customElements.define('foot-bar', FooterBar);