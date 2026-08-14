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

            <div class="spacer"></div>
        `;
    }
}
