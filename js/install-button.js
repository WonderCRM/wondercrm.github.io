class e extends HTMLElement {
    static preload() {
        import("./connect-790a7703.js")
    }
    connectedCallback() {
        if (this.renderRoot) return;
        if (this.renderRoot = this.attachShadow({
                mode: "open"
            }), !e.isSupported || !e.isAllowed) return this.toggleAttribute("install-unsupported", !0), void(this.renderRoot.innerHTML = e.isAllowed ? '<slot class="unsupported" name="unsupported">Ваш браузер не поддерживает установку прошивки WiFi-CLOCK. Используйте Google Chrome или Microsoft Edge.</slot>' : '<slot class="unsupported" name="not-allowed">Установка прошивки WiFi-CLOCK через Web установщик, доступна только по протоколу HTTPS.</slot>');
        this.toggleAttribute("install-supported", !0), this.addEventListener("mouseover", e.preload);
        const n = document.createElement("slot");
        n.addEventListener("click", (async e => {
            e.preventDefault();
            (await import("./connect-790a7703.js")).connect(this)
        })), n.name = "activate";
        const t = document.createElement("button");
        if (t.innerText = "УСТАНОВИТЬ", n.append(t), "adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype) {
            const n = new CSSStyleSheet;
            n.replaceSync(e.style), this.renderRoot.adoptedStyleSheets = [n]
        } else {
            const n = document.createElement("style");
            n.innerText = e.style, this.renderRoot.append(n)
        }
        this.renderRoot.append(n)
    }
}
e.isSupported = "serial" in navigator, e.isAllowed = window.isSecureContext, e.style = '\n  button {\n  letter-spacing: .15em;  \n  box-shadow: #2d88de 0px 0 15px 2px;  \n  -webkit-transition: .3s ease-in-out;  \n	-moz-transition: .3s ease-in-out;  \n				-o-transition: .3s ease-in-out;  \n 	transition: .3s ease-in-out;   \n   position: relative;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 10px 30px;\n	margin-top: 20px;\n   color: var(--esp-tools-button-text-color, #fff);\n    background-color: var(--esp-tools-button-color, #03a9f4);\n    border: none;\n    border-radius: 20px;\n  }\n  button::before {\n    content: " ";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    opacity: 0.2;\n    border-radius: 4px;\n  }\n  button:hover {\n    box-shadow: #2d88de 0px 0 15px 6px;}\n  button:focus {\n    outline: none;\n  }\n  button:focus::before {\n    background-color: white;\n  }\n  button:active::before {\n    background-color: grey;\n  }\n  :host([active]) button {\n    color: rgba(0, 0, 0, 0.38);\n    background-color: rgba(0, 0, 0, 0.12);\n    box-shadow: none;\n    cursor: unset;\n    pointer-events: none;\n  }\n  improv-wifi-launch-button {\n    display: block;\n    margin-top: 16px;\n  }\n  .hidden {\n    display: none;\n  }', customElements.define("esp-web-install-button", e);