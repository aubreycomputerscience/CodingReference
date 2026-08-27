export class BellWorkTag extends HTMLElement {

    connectedCallback() {
        const prompt = this.innerHTML.trim();

        this.innerHTML = `
            <div class="spacer"></div>

            <h1>🔔 BELL WORK</h1>

            <h1>“${prompt}”</h1>

            <p>
                Please find your assigned seat quietly. Seats are alphabetical, starting on the right.
                Please get out your class notebook (or paper).
            </p>

            <p>
                Write your response in your notebook. (5 Minutes.)
                Responses will be discussed after Bell Work.
            </p>

        `;
    }
}

export class ProjectName extends HTMLElement {

    connectedCallback() {
        const prompt = this.innerHTML.trim();

        this.innerHTML = `
            <div class="spacer"></div>
            <h1>${prompt}</h1>
        `;
    }
}

export class ProjectObjectives extends HTMLElement {

    connectedCallback() {
        const prompt = this.innerHTML.trim();

        this.innerHTML = `
            <objective-title>Objectives</objective-title>
            <objective-text>${prompt}</objective-text>
        `;
    }
}

export class Teaser extends HTMLElement {

    connectedCallback() {
        const prompt = this.innerHTML.trim();

        this.innerHTML = `
            <div class="spacer"></div>
            <h1>“${prompt}”</h1>
            <div class="spacer"></div>
        `;
    }
}

export class Closure extends HTMLElement {

    connectedCallback() {
        let prompt = this.innerHTML.trim();
        const defaultText = "What is one thing you learned? One thing you want to learn? One thing you didn't understand?"

        if (prompt === "") {
            prompt = defaultText;
        }

        this.innerHTML = `
            <div class="spacer"></div>

            <h1>CLOSURE</h1>

            <h1>“${prompt}”</h1>
        `;
    }
}

export class Homework extends HTMLElement {

    connectedCallback() {
        let prompt = this.innerHTML.trim();

        this.innerHTML = `
            <div class="spacer"></div>

            <h1>Homework</h1>

            <h3>${prompt}</h3>

            <div class="spacer"></div>
        `;
    }
}

export class MultilineText extends HTMLElement {

    connectedCallback() {
        let prompt = this.innerHTML.trim();

        this.innerHTML = `
            <div class="spacer"></div>

            <h3>${prompt}</h3>

            <div class="spacer"></div>
        `;
    }
}