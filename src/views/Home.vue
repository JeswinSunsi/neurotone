<template>
    <div class="app-container">

        <div class="main-content">
            <div class="title-section">
                <h1>NEUROTONE</h1>
            </div>

            <div class="brown-box"></div>

            <section class="all-tests-section">
                <h2>ALL TESTS</h2>
                <div class="test-boxes">
                    <div class="test-box yellow"></div>
                    <div class="test-box beige"></div>
                </div>
            </section>

            <section class="recent-analysis-section">
                <h2>RECENT ANALYSIS</h2>
                <div class="report-card">
                    <div class="report-date">04 FEB 2025</div>
                    <div class="report-title">COMPLETE TEST REPORT</div>
                    <button class="download-button">
                        Download Now
                        <span class="down-arrow">↓</span>
                    </button>
                    <div class="mail-option">Or Mail it Instead</div>
                </div>
            </section>
            <div class="app-footer">
                <div class="nav-items">
                    <div class="nav-item">
                        <div class="nav-icon profile-icon"></div>
                        <div class="nav-text">Profile</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-icon globe-icon"></div>
                        <div class="nav-text">Resources</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-icon report-icon"></div>
                        <div class="nav-text">Report</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-icon language-icon"></div>
                        <div class="nav-text">Language</div>
                    </div>
                </div>
                <div class="footer-credit">
                    Made with ❤️ by Team Luminate | 2025
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
</script>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    font-family: Poppins;
}

.main-content {
    flex: 1;
    padding: 0;
    overflow-y: auto;
}

.title-section {
    margin-bottom: 1rem;
    padding: 1rem 0;
    padding-top: 2.6rem;
    text-align: center;
    background-color: #D5DDBD;
}

h1 {
    color: #5C4231;
    font-weight: 800;
    font-size: 24px;
}

.brown-box {
    height: 26%;
    background-image: url('../assets/banner.png');
    background-size: cover;
    margin: 0 1.2rem 2.2rem 1.2rem;
    border-radius: 0.9rem;
}

.all-tests-section {
    padding: 0 1.2rem;
}

h2 {
    color: #654321;
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.test-boxes {
    display: flex;
    gap: 15px;
    margin-bottom: 2.2rem;
}

.test-box {
    width: 150px;
    height: 150px;
    border-radius: 10px;
}

.yellow {
    background-color: #ffdb99;
}

.beige {
    background-color: #fdf5e6;
}

.recent-analysis-section {
    padding: 0 1.2rem;
}

.report-card {
    background-color: #694a32;
    padding: 1.2rem;
    border-radius: 10px;
    color: #e8b87e;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
}

.report-date {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.report-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.4rem;
}

.download-button {
    background-color: #e8b87e;
    color: #694a32;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 0.8rem;
    cursor: pointer;
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.down-arrow {
    margin-left: 0.7rem;
}

.mail-option {
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}

.app-footer {
    background-color: #e8ead1;
    padding: 1rem 1rem;
    border-top: 1px solid #d0d3b5;
}

.nav-items {
    display: flex;
    justify-content: space-around;
    padding: 10px 15px;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #694a32;
    font-size: 12px;
}

.nav-icon {
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
}

.footer-credit {
    text-align: center;
    font-size: 12px;
    color: #694a32;
    margin-top: 5px;
}

.profile-icon,
.globe-icon,
.report-icon,
.language-icon {
    background-color: transparent;
}
</style>