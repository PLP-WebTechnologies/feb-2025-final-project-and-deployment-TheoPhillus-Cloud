document.addEventListener("DOMContentLoaded", function () {
    console.log("Theo Store Loaded!");

    // Dropdown Menu Interaction
    document.querySelectorAll(".dropdown").forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });
        item.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    });

    // Video Play/Pause Functionality (Fixed)
    const video = document.getElementById("custom-video");
    const playButton = document.getElementById("play-button");

    if (playButton) {
        playButton.addEventListener("click", function () {
            if (video.readyState >= 2) { // Ensure video has loaded
                if (video.paused) {
                    video.play();
                    playButton.style.display = "none";
                } else {
                    video.pause();
                    playButton.style.display = "block";
                }
            } else {
                console.error("Video file isn't loading properly.");
            }
        });
    }

    // Product View Details (Modal)
    const modal = document.getElementById("product-modal");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            console.log("Product Details:", product.dataset); // Log details
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }
});