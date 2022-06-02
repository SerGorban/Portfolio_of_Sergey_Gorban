function aboutGreetingContent() {
    const contentBlockConteiner = document.getElementById('about-greeting');
    const template = 
        `<div class="about-greeting">
            <div class="about-greeting__content">
                <div class="about-greeting__greeting">
                    <span>
                        Hi! I am a front-end developer based in Nikolaev, Ukraine.
                    </span>
                </div>
                <div class="about-greeting__about-me">
                    Since the beginning of 2021, I've enjoyed ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>`;

    if (contentBlockConteiner) {
        contentBlockConteiner.innerHTML = template;
    }
}

export { aboutGreetingContent };