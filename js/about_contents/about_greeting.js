function aboutGreetingContent() {
    const contentBlockConteiner = document.getElementById('about-greeting');
    const template = 
        `<div class="about-greeting">
            <div class="about-greeting__content">
                <div class="about-greeting__greeting">
                    <p>
                        Hi! I am a front-end developer based in Nikolaev, Ukraine.
                    </p>
                </div>
                <div class="about-greeting__about-me">
                    <p>
                        Since the beginning of 2021, I've enjoyed ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>`;

    if (contentBlockConteiner) {
        contentBlockConteiner.innerHTML = template;
    }
}

export { aboutGreetingContent };