async function dynamicCards() {

    let apiFetch = await fetch("https://dummyjson.com/products")
    let apiData = await apiFetch.json()
    let { products } = apiData
    let cardsBox = document.getElementById("dynamic-cards");
    console.log(apiData)
    products.map((product) =>{

        let { title, description, availabilityStatus, category, warrantyInformation, price, rating, thumbnail, brand } = product
        cardsBox.innerHTML += ` <div class="product-card">
            <div class="product-badge">Premium</div>
            <div class="product-tilt-effect">
                <div class="product-image">
                    <img src="${thumbnail}"
                        alt="Premium Watch">
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${category}</div>
                <h2 class="product-title">${title}</h2>
                <div class="product-description">
                    <p>${description}</p>
                </div>
                <div class="product-features">
                    <span class="feature">Water Resistant</span>
                    <span class="feature">${warrantyInformation}</span>
                    <span class="feature">${brand}</span>
                </div>
                <div class="product-bottom">
                    <div class="product-price">
                        <span class="price-was">$1,299</span>
                        <span class="price-now">$${price}</span>
                    </div>
                    <button class="product-button">
                        <span class="button-text">Add to Cart</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-meta">
                    <div class="product-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                            fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                        <span class="rating-count">${rating}</span>
                    </div>
                    <div class="product-stock">${availabilityStatus}</div>
                </div>
            </div>
        </div>`

    })
}
dynamicCards()

// forms
const loginBtn = document.getElementById("loginBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

const signInBtn = document.getElementById("showSignIn");
const signUpBtn = document.getElementById("showSignUp");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

// Open Popup
loginBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close Popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Switch Tabs
signInBtn.addEventListener("click", () => {
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
  signInBtn.classList.add("active");
  signUpBtn.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
  signUpForm.classList.add("active");
  signInForm.classList.remove("active");
  signUpBtn.classList.add("active");
  signInBtn.classList.remove("active");
});