
// SAMPLE IMPLEMENTATION
// 1) when start app, need to register our widget

    // in main.ts or myCode.ts
    // 
    // add custom widgets we can insert into our code
    // customElements.define(
    //     "codebox-controller",  // must have a "-" to run
    //     CodeBoxController
    // );

// 2) to add widet to your html

    // <codebox-controller  // store variables in html tag (yes, this is super brittle)
    //
    //     // optional settings (defualts: fullText, no keyboard buttons to control)
    //     mode="fullText"            // "fullText", "lineByLine", or "wordByWord" 
    //     addKeyboardControl="false"  // "true" or "false" // only use if only one codebox on page
    //
    //     // add text
    //     fullText="myText"
    //
    // ></codebox-controller>



type CodeBoxMode = "fullText" | "lineByLine" | "wordByWord";
type CodeBoxAnnotation = "off" | "on";

export class CodeBoxController extends HTMLElement {  // we are using HTML Element, with all its functionality, as a base class

    // when the browswer finds our custom HTML Element in our HTML, it will call this (this is how HTML Elements work)
    connectedCallback() {

        // get parameters
        const fullText = this.getAttribute("fullText");
        this.fullText = fullText ?? "";
        
        const mode = this.getAttribute("mode");
        switch (mode) { 
            case "lineByLine": this.mode = "lineByLine"; break;
            case "wordByWord": this.mode = "wordByWord"; break;
            default:           this.mode = "fullText";   break;
        };

        // build and insert html
        this.generateLineByLineText();
        const codebox = this.createCodeBoxViewAndAddItToParentView();
        this.replaceChildren(codebox);
             // alternatively, could have dumped html in
             //     this.innerHTML = `<div> new HTML </div>`

        this.bodyTextView.style.minHeight = `${this.bodyTextView.offsetHeight}px`;

        // add keyboard control, if needed
        const setupKeyboardToControl = this.getAttribute("setupKeyboardToControl");
     
        if (setupKeyboardToControl) {
            this.addGlobalGestureRecognizersForKeyboardKeys();            
        }
    }

    //#region CLASS DECLARATIONS
    mode: CodeBoxMode = "fullText";
    annotation: CodeBoxAnnotation = "on";

    // store in different formats for walk through function
    private fullText: string = "";
    private textAsArray: string[] = [];  // generated when change mode
    private wordsAsNestedArray: string[][] = [];

    private rowCounter: number = 0;
    private wordCounter: number = 0; 

    // UI Elements
    private mainView: HTMLDivElement = document.createElement("div");
    //private button: HTMLButtonElement = document.createElement("button");
    private bodyTextView: HTMLDivElement = document.createElement("div");
    //#endregion

    //#region HANDLE INPUT
    discussButtonPressed() {
        this.mode = "fullText";
        this.bodyTextView.textContent = this.fullText;
    }

    // modeButtonPressed() {
    //     this.generateLineByLineText()
    //     this.updateDisplayTextWhenRowCounterChanged();
    // }

    annotationButtonPressed() {

    }

    addGlobalGestureRecognizersForKeyboardKeys() {
        
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowDown": 
                    this.showNextLine();
                    break;
                case "ArrowUp":
                    this.goBackALine();
                    break;
                case "ArrowRight": 
                    this.showNextWord();
                    break;
                case "ArrowLeft":
                    this.goBackAWord();
                    break;
            }
        });
    }

    showNextWord() {
        if (this.mode == "fullText") {
            this.mode = "wordByWord";
            this.switchOutOfFullTextMode();
            this.updateDisplayTextWhenRowCounterChanged();
        } else {
            this.updatePageAndWordCountersOnNextWord();
            this.updateDisplayTextWhenRowCounterChanged();
        }
    }

    goBackAWord() {
        if (this.mode == "fullText") {
            this.mode = "wordByWord";
            this.switchOutOfFullTextMode();
            this.updateDisplayTextWhenRowCounterChanged();
        } else {
            this.updatePageAndWordCountersIfMoveBackAWord();
            this.updateDisplayTextWhenRowCounterChanged();
        }
    }

    showNextLine() {
        if (this.mode == "fullText") {
            this.mode = "lineByLine";
            this.switchOutOfFullTextMode();
            this.updateDisplayTextWhenRowCounterChanged();
        } else {
            this.rowCounter += 1;
            this.wordCounter = 0;
            this.updateDisplayTextWhenRowCounterChanged();
        }
    }

    goBackALine() {
        if (this.mode == "fullText") {
            this.mode = "lineByLine";
            this.switchOutOfFullTextMode();
            this.updateDisplayTextWhenRowCounterChanged();
        } else {
            this.rowCounter -= 1;
            this.wordCounter = 0;
            this.updateDisplayTextWhenRowCounterChanged();
        }
    }


    //#endregion

    //#region Generate Line by Line Text
    private generateLineByLineText() {

        this.textAsArray = this.fullText.split(/\r?\n/)
                                        .filter(line => line.length > 0);

        for (const text of this.textAsArray) {
            const arrayOfWordsOnEachLine = text.match(/\s*\S+/g) || [];
            this.wordsAsNestedArray.push(arrayOfWordsOnEachLine);
        }

        this.rowCounter = 0;
        this.wordCounter = 0;
    }
    
    switchOutOfFullTextMode() {
                    
        this.rowCounter = 0;
        this.wordCounter = 0;
    }

    updatePageAndWordCountersOnNextWord() {

        const maxLineIndex = this.textAsArray.length - 1;

        // this shouldn't occur, but don't want to leave unsafe (could also refactor par. array into object)
        if (this.rowCounter > maxLineIndex) {
            this.rowCounter = maxLineIndex;
        }
        
        const wordsOnLines = this.wordsAsNestedArray[this.rowCounter];
        const maxIndexOfWordsOnLines = wordsOnLines.length - 1;

        if (this.wordCounter < maxIndexOfWordsOnLines) {
            this.wordCounter += 1;
        } else {
            this.wordCounter = 0;
            this.rowCounter += 1;
        } 
    }

    updatePageAndWordCountersIfMoveBackAWord() {
        
        if (this.wordCounter === 0) {
            // move back to previous row
            if (this.rowCounter === 0) return; 
            this.rowCounter -= 1
            this.wordCounter = this.wordsAsNestedArray[this.rowCounter].length - 1; // the last word - 1
        } else {
            this.wordCounter -= 1;
        }
    }

    private updateDisplayTextWhenRowCounterChanged() {
  
        // make sure we are in bounds
        let maxRowPosition = this.textAsArray.length - 1;
      
        if (this.rowCounter > maxRowPosition) {
            this.rowCounter = maxRowPosition;
        } else if (this.rowCounter < 0) {
            this.rowCounter = 0;
        }

        let workingText = "";  //"DEBUG (row/word) " + this.rowCounter + "/" + this.wordCounter + "\n";
        
        if (this.mode == "wordByWord") {
        
            for (let i = 0; i <= this.rowCounter - 1; i++) {
                workingText = workingText + "\n" + this.textAsArray[i];
            }

            const wordsOnThisLine = this.wordsAsNestedArray[this.rowCounter];
            workingText += "\n";

            for (let i = 0; i <= this.wordCounter; i++) {
                workingText = workingText + wordsOnThisLine[i];
            }

        } else {

            for (let i = 0; i <= this.rowCounter; i++) {
                workingText = workingText + "\n" + this.textAsArray[i];
            }
        }

        this.bodyTextView.textContent = workingText;
    }


    //#endregion

    //#region BUILD UI
    createCodeBoxViewAndAddItToParentView(): HTMLDivElement {
        
        this.mainView = this.createMainView();
        const changeModeButton = this.createHeaderLabelAndButton();
        const textBodyView = this.createBodyTextView();
        const footerBar = this.createFooterBar();

        this.mainView.append(changeModeButton, textBodyView, footerBar);
        return this.mainView;
    }

    private createMainView(): HTMLDivElement {

        const view = document.createElement("div");
        view.style.display = "flex";
        view.style.flexDirection = "column";
        view.style.background = "lightgray";
        view.style.flex = "none";
        return view;
    }

    private createBodyTextView(): HTMLDivElement {

        const view = document.createElement("div");
        view.textContent = this.fullText;
        view.style.background = "lightgray";
        view.style.flex = "none";
        view.style.whiteSpace = "pre-wrap";
        this.bodyTextView = view;  // save reference so can update text if needed
        return view;
    }

    private createHeaderLabelAndButton(): HTMLDivElement {

        // const button = this.createStandardButton("Discuss");
        // button.style.marginLeft = "auto";
        // button.onclick = () => { 
        //     this.discussButtonPressed(); 
        // };
        //this.button = button;

        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Code Snippet";
        titleLabel.style.fontFamily = "system-ui";
        titleLabel.style.fontSize = "14px";

        // put it in a row so can push to right
        const row = document.createElement("div");
        row.style.flex = "none";
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.style.padding = "2px";

        row.append(titleLabel); //, button);
        return row;
    }

    createFooterBar(): HTMLDivElement {

        const footerRow = document.createElement("div");
        footerRow.style.flex = "none";
        footerRow.style.display = "flex";
        footerRow.style.flexDirection = "row";
        footerRow.style.padding = "2px";

        const backButton = this.createStandardButton("<");
        backButton.style.marginLeft = "auto";
        backButton.onclick = () => {
            this.goBackAWord();
        }

        const nextButton = this.createStandardButton(">");
        nextButton.onclick = () => {
            this.showNextWord();
        }

        const upButton = this.createStandardButton("<<");
        upButton.onclick = () => {
            this.goBackALine();
        }

        const downButton = this.createStandardButton(">>");
        downButton.onclick = () => {
            this.showNextLine();
        }
        
        footerRow.append(backButton, nextButton, upButton, downButton);
        return footerRow;
    }

    private createStandardButton(buttonTitle: string): HTMLButtonElement {

        const button = document.createElement("button");
        button.style.flex = "none";
        button.style.color = "black";
        button.style.padding = "8px 12px";
        button.textContent = buttonTitle;
        button.style.border = "2px solid gray";
        button.style.borderRadius = "4px";
        button.style.fontFamily = "system-ui";
        button.style.fontSize = "14px";
        return button;
    }

    //#endregion 

}