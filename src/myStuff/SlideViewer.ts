/*
Example HTML:

<slide-viewer>
    <section class="page">
        <div class="slide">
            Your slide content
        </div>

        <div class="detail">
            Your detail text
        </div>

        <div class="notes">
            Your teacher notes
        </div>
    </section>
</slide-viewer>
*/


type PageMode = "singlePage" | "all";


export class SlideViewerController extends HTMLElement {

    private pages: HTMLElement[] = [];
    private currentPage = 0;

    private showSlide = true;
    private showDetail = false;
    private showNotes = false;

    private pageMode: PageMode = "singlePage";

    private keyBuffer = "";

    private pageIndicator!: HTMLSpanElement;

    private previousButton!: HTMLButtonElement;
    private nextButton!: HTMLButtonElement;

    private slideButton!: HTMLButtonElement;
    private detailButton!: HTMLButtonElement;
    private allPagesButton!: HTMLButtonElement;


    connectedCallback() {

        this.pages = Array.from(
            this.querySelectorAll<HTMLElement>(":scope > .page")  // :scope = this viewer; > = direct child; .page = class="page"
        );


        if (this.pages.length === 0) {
            return;
        }


        this.createControls();


        this.previousButton.onclick = () => {
            this.previousPage();
        };


        this.nextButton.onclick = () => {
            this.nextPage();
        };


        this.slideButton.onclick = () => {

            this.showSlide = !this.showSlide;

            if (!this.showSlide && !this.showDetail) {
                this.showDetail = true;
            }

            this.updateDisplay();
        };


        this.detailButton.onclick = () => {

            this.showDetail = !this.showDetail;

            if (!this.showSlide && !this.showDetail) {
                this.showSlide = true;
            }

            this.updateDisplay();
        };


        this.allPagesButton.onclick = () => {

            if (this.pageMode === "singlePage") {
                this.pageMode = "all";
            }
            else {
                this.pageMode = "singlePage";
            }

            this.updateDisplay();
        };


        document.addEventListener("keydown", (event) => {  // Listen on document so the viewer does not need keyboard focus or tabIndex.
            this.handleKeyDown(event);
        });


        this.updateDisplay();
    }


    private createControls() {

        // Viewer becomes a vertical flexbox: content scrolls above, controls stay at the bottom.
        this.style.display = "flex";
        this.style.flexDirection = "column";
        this.style.height = "100%";
        this.style.minHeight = "0";


        const content = document.createElement("div");
        content.style.flex = "1";
        content.style.minHeight = "0";
        content.style.overflowY = "auto";


        for (const page of this.pages) {
            content.append(page);
        }


        const controls = document.createElement("div");
        controls.style.flex = "none";
        controls.style.position = "relative";
        controls.style.display = "flex";
        controls.style.alignItems = "center";
        controls.style.justifyContent = "center";
        controls.style.padding = "0.75rem 1rem";
        controls.style.boxSizing = "border-box";


        const navigationControls = document.createElement("div");
        navigationControls.style.display = "flex";
        navigationControls.style.alignItems = "center";
        navigationControls.style.gap = "1rem";


        this.previousButton = document.createElement("button");
        this.previousButton.textContent = "Previous";


        this.pageIndicator = document.createElement("span");
        this.pageIndicator.style.minWidth = "4rem";
        this.pageIndicator.style.textAlign = "center";


        this.nextButton = document.createElement("button");
        this.nextButton.textContent = "Next";


        navigationControls.append(
            this.previousButton,
            this.pageIndicator,
            this.nextButton
        );


        const viewControls = document.createElement("div");
        viewControls.style.position = "absolute";  // Keeps navigation centered regardless of the controls on the right.
        viewControls.style.right = "1rem";
        viewControls.style.display = "flex";
        viewControls.style.alignItems = "center";
        viewControls.style.gap = "0.5rem";


        this.slideButton = document.createElement("button");
        this.slideButton.style.width = "5rem";  // Fixed widths prevent the checkmark from shifting the layout.


        this.detailButton = document.createElement("button");
        this.detailButton.style.width = "5rem";


        this.allPagesButton = document.createElement("button");
        this.allPagesButton.style.width = "7rem";


        viewControls.append(
            this.slideButton,
            this.detailButton,
            this.allPagesButton
        );


        controls.append(
            navigationControls,
            viewControls
        );


        this.append(
            content,
            controls
        );
    }


    private updateDisplay() {

        for (let i = 0; i < this.pages.length; i++) {

            const page = this.pages[i];


            if (this.pageMode === "singlePage") {
                page.hidden = i !== this.currentPage;
            }
            else {
                page.hidden = false;
            }


            const slide =
                page.querySelector<HTMLElement>(".slide");

            const detail =
                page.querySelector<HTMLElement>(".detail");

            const notes =
                page.querySelector<HTMLElement>(".notes");


            if (slide) {
                slide.hidden = !this.showSlide;
            }


            if (detail) {
                detail.hidden = !this.showDetail;
            }

            if (notes) {
                notes.hidden = !this.showNotes;

                notes.style.borderTop = "1px solid #999";
                notes.style.borderBottom = "1px solid #999";
                notes.style.marginTop = "1rem";
                notes.style.padding = "0.75rem 0";
            }
 
        }


        this.updateControls();
    }


    private showPage(index: number) {

        if (index < 0 || index >= this.pages.length) {
            return;
        }


        this.currentPage = index;
        this.updateDisplay();
    }


    private nextPage() {

        if (this.currentPage < this.pages.length - 1) {
            this.showPage(this.currentPage + 1);
        }
    }


    private previousPage() {

        if (this.currentPage > 0) {
            this.showPage(this.currentPage - 1);
        }
    }


    private handleKeyDown(event: KeyboardEvent) {

        // Typing "teachernotes" toggles the hidden teacher notes.
        if (event.key.length === 1) {

            this.keyBuffer += event.key.toLowerCase();
            this.keyBuffer = this.keyBuffer.slice(-20);

            if (this.keyBuffer.endsWith("teachernotes")) {

                this.showNotes = !this.showNotes;
                this.keyBuffer = "";

                this.updateDisplay();

                return;
            }
        }


        if (event.key === "ArrowRight" || event.key === "PageDown") {
            event.preventDefault();
            this.nextPage();
        }


        if (event.key === "ArrowLeft" || event.key === "PageUp") {
            event.preventDefault();
            this.previousPage();
        }


        if (event.key === "Home") {
            event.preventDefault();
            this.showPage(0);
        }


        if (event.key === "End") {
            event.preventDefault();
            this.showPage(this.pages.length - 1);
        }
    }


    private updateControls() {

        const showNavigation =
            this.pageMode === "singlePage";


        this.previousButton.hidden = !showNavigation;
        this.pageIndicator.hidden = !showNavigation;
        this.nextButton.hidden = !showNavigation;


        if (showNavigation) {
            this.pageIndicator.textContent =
                `${this.currentPage + 1} / ${this.pages.length}`;
        }


        this.slideButton.textContent =
            `${this.showSlide ? "✓ " : ""}Slide`;


        this.detailButton.textContent =
            `${this.showDetail ? "✓ " : ""}Detail`;


        this.allPagesButton.textContent =
            `${this.pageMode === "all" ? "✓ " : ""}Show All`;
    }
}