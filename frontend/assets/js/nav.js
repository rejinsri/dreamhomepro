class HeaderMenu extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <div class="brand-logo">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                            <path d="M20 0L0 20h5v20h30V20h5L20 0zm10 38H10V18.4L20 8.4l10 10V38z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="brand-text">
                        <span class="brand-title">Dream Home</span>
                        <span class="brand-tagline">Real Estate</span>
                    </div>
                </a>
                
                <div class="nav-actions d-flex align-items-center">
                    <div class="time-display me-4">
                        <i class="fas fa-clock"></i>
                        <span id="current-time">00:00:00</span>
                    </div>
                    
                    <button class="search-trigger me-3" data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i class="fas fa-search"></i>
                    </button>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/frontend/index.html">
                                <i class="fas fa-home"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/frontend/index.html#properties">
                                <i class="fas fa-building"></i>
                                <span>Properties</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/frontend/pages/about.html">
                                <i class="fas fa-info-circle"></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/frontend/index.html#contact">
                                <i class="fas fa-envelope"></i>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Search Modal -->
        <div class="modal fade" id="searchModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Advanced Search</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="search-form">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="locationSearch" placeholder="Location">
                                        <label for="locationSearch"><i class="fas fa-map-marker-alt"></i> Location</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select" id="propertyType">
                                            <option selected>Select Type</option>
                                            <option value="house">House</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="villa">Villa</option>
                                        </select>
                                        <label for="propertyType"><i class="fas fa-home"></i> Property Type</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Initialize time display
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const timeDisplay = this.querySelector('#current-time');
        const now = new Date();
        timeDisplay.textContent = now.toLocaleTimeString();
    }
}
customElements.define('header-menu', HeaderMenu);

