document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const videoSection = document.getElementById('video-section');
    const video = document.getElementById('video');
    const withdrawButton = document.getElementById('withdraw-button');
    const adContainer = document.getElementById('ad-container');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulate login process
        loginForm.style.display = 'none';
        videoSection.style.display = 'block';
        loadAds();
    });

    video.addEventListener('ended', function() {
        // Simulate adding balance to user's account
        alert('You have earned money for watching the video!');
        withdrawButton.style.display = 'block';
    });

    withdrawButton.addEventListener('click', function() {
        // Simulate withdrawal process
        alert('Money has been sent to your DANA account!');
    });

    function loadAds() {
        // Load ad when the video section is displayed
        InterstitialTsAd({
            spot: "92a7278c47e442d08586187153de0bd5",
            keywords: "video, earn money, watch",
            subid: "user123",
            extid: "campaign456",
            countdown: 15,
            countClicks: 0,
            cookieExpires: 6,
            ignoreFilter: ""
        });
    }
});
