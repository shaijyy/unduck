import { bangs } from "./bang";
import "./global.css";

function noSearchDefaultPageRender() {
  if (!localStorage.getItem("default-bang")) {
    localStorage.setItem("default-bang", "g")
  } else {
    return
  }
  const app = document.querySelector<HTMLDivElement>("#app")!;
  const instanceDomain = `${window.location.protocol}//${window.location.hostname}`; // Get the full domain with protocol (https://www.example.com)
  app.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
      <div class="content-container">
        <svg width="546" height="76" viewBox="0 0 596 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.4545 0.909088L24.0909 64.9091H3.36364L1 0.909088H26.4545ZM13.7273 95.4545C10.2121 95.4545 7.19697 94.2273 4.68182 91.7727C2.19697 89.2879 0.969697 86.2727 1 82.7273C0.969697 79.2727 2.19697 76.3182 4.68182 73.8636C7.19697 71.4091 10.2121 70.1818 13.7273 70.1818C17.0606 70.1818 20 71.4091 22.5455 73.8636C25.1212 76.3182 26.4242 79.2727 26.4545 82.7273C26.4242 85.0909 25.803 87.2424 24.5909 89.1818C23.4091 91.0909 21.8636 92.6212 19.9545 93.7727C18.0455 94.8939 15.9697 95.4545 13.7273 95.4545ZM97.5909 0.909088H122.864V60.5455C122.864 67.6364 121.167 73.7727 117.773 78.9545C114.409 84.1061 109.712 88.0909 103.682 90.9091C97.6515 93.697 90.6515 95.0909 82.6818 95.0909C74.6515 95.0909 67.6212 93.697 61.5909 90.9091C55.5606 88.0909 50.8636 84.1061 47.5 78.9545C44.1667 73.7727 42.5 67.6364 42.5 60.5455V0.909088H67.7727V58.3636C67.7727 61.2424 68.4091 63.8182 69.6818 66.0909C70.9545 68.3333 72.7121 70.0909 74.9545 71.3636C77.2273 72.6364 79.803 73.2727 82.6818 73.2727C85.5909 73.2727 88.1667 72.6364 90.4091 71.3636C92.6515 70.0909 94.4091 68.3333 95.6818 66.0909C96.9545 63.8182 97.5909 61.2424 97.5909 58.3636V0.909088ZM160.33 54.7273V94H135.239V24.1818H159.057V37.4545H159.784C161.299 33.0303 163.966 29.5606 167.784 27.0455C171.633 24.5303 176.117 23.2727 181.239 23.2727C186.178 23.2727 190.466 24.4091 194.102 26.6818C197.769 28.9242 200.602 32.0151 202.602 35.9545C204.633 39.8939 205.633 44.3939 205.602 49.4545V94H180.511V54.7273C180.542 51.2727 179.663 48.5606 177.875 46.5909C176.117 44.6212 173.663 43.6364 170.511 43.6364C168.451 43.6364 166.648 44.0909 165.102 45C163.587 45.8788 162.42 47.1515 161.602 48.8182C160.784 50.4545 160.36 52.4242 160.33 54.7273ZM243.261 94.9091C238.292 94.9091 233.716 93.6061 229.534 91C225.383 88.3939 222.049 84.4394 219.534 79.1364C217.049 73.8333 215.807 67.1515 215.807 59.0909C215.807 50.6667 217.11 43.8182 219.716 38.5455C222.352 33.2727 225.746 29.4091 229.898 26.9545C234.08 24.5 238.473 23.2727 243.08 23.2727C246.534 23.2727 249.564 23.8788 252.17 25.0909C254.777 26.2727 256.958 27.8636 258.716 29.8636C260.473 31.8333 261.807 34 262.716 36.3636H263.08V0.909088H288.17V94H263.261V82.5455H262.716C261.746 84.9091 260.352 87.0303 258.534 88.9091C256.746 90.7576 254.564 92.2273 251.989 93.3182C249.443 94.3788 246.534 94.9091 243.261 94.9091ZM252.534 75.6364C254.837 75.6364 256.807 74.9697 258.443 73.6364C260.11 72.2727 261.383 70.3636 262.261 67.9091C263.17 65.4242 263.625 62.4848 263.625 59.0909C263.625 55.6364 263.17 52.6818 262.261 50.2273C261.383 47.7424 260.11 45.8485 258.443 44.5455C256.807 43.2121 254.837 42.5455 252.534 42.5455C250.231 42.5455 248.261 43.2121 246.625 44.5455C245.019 45.8485 243.777 47.7424 242.898 50.2273C242.049 52.6818 241.625 55.6364 241.625 59.0909C241.625 62.5455 242.049 65.5152 242.898 68C243.777 70.4545 245.019 72.3485 246.625 73.6818C248.261 74.9848 250.231 75.6364 252.534 75.6364ZM345.761 63.4545V24.1818H370.852V94H347.034V80.7273H346.307C344.792 85.1818 342.14 88.6667 338.352 91.1818C334.564 93.6667 330.064 94.9091 324.852 94.9091C319.973 94.9091 315.701 93.7879 312.034 91.5455C308.398 89.303 305.564 86.2121 303.534 82.2727C301.534 78.3333 300.519 73.8182 300.489 68.7273V24.1818H325.58V63.4545C325.61 66.9091 326.489 69.6212 328.216 71.5909C329.973 73.5606 332.428 74.5455 335.58 74.5455C337.67 74.5455 339.473 74.1061 340.989 73.2273C342.534 72.3182 343.716 71.0455 344.534 69.4091C345.383 67.7424 345.792 65.7576 345.761 63.4545ZM417.25 95.2727C409.674 95.2727 403.189 93.7727 397.795 90.7727C392.402 87.7424 388.265 83.5303 385.386 78.1364C382.508 72.7121 381.068 66.4242 381.068 59.2727C381.068 52.1212 382.508 45.8485 385.386 40.4545C388.265 35.0303 392.402 30.8182 397.795 27.8182C403.189 24.7879 409.674 23.2727 417.25 23.2727C424.098 23.2727 430.023 24.5152 435.023 27C440.053 29.4545 443.947 32.9394 446.705 37.4545C449.462 41.9394 450.856 47.2121 450.886 53.2727H427.614C427.28 49.6061 426.22 46.8182 424.432 44.9091C422.674 42.9697 420.402 42 417.614 42C415.432 42 413.523 42.6364 411.886 43.9091C410.25 45.1515 408.977 47.0455 408.068 49.5909C407.159 52.1061 406.705 55.2727 406.705 59.0909C406.705 62.9091 407.159 66.0909 408.068 68.6364C408.977 71.1515 410.25 73.0455 411.886 74.3182C413.523 75.5606 415.432 76.1818 417.614 76.1818C419.462 76.1818 421.098 75.7576 422.523 74.9091C423.947 74.0303 425.098 72.7576 425.977 71.0909C426.886 69.3939 427.432 67.3333 427.614 64.9091H450.886C450.795 71.0606 449.386 76.4242 446.659 81C443.932 85.5455 440.068 89.0606 435.068 91.5455C430.098 94.0303 424.159 95.2727 417.25 95.2727ZM483.784 77.4545L483.966 47.6364H487.239L504.148 24.1818H532.33L503.966 60.7273H496.875L483.784 77.4545ZM461.239 94V0.909088H486.33V94H461.239ZM504.33 94L488.33 66.3636L504.693 48.5455L533.057 94H504.33ZM552.5 95.4545C548.985 95.4545 545.97 94.2273 543.455 91.7727C540.97 89.2879 539.742 86.2727 539.773 82.7273C539.742 79.2727 540.97 76.3182 543.455 73.8636C545.97 71.4091 548.985 70.1818 552.5 70.1818C555.833 70.1818 558.773 71.4091 561.318 73.8636C563.894 76.3182 565.197 79.2727 565.227 82.7273C565.197 85.0909 564.576 87.2424 563.364 89.1818C562.182 91.0909 560.636 92.6212 558.727 93.7727C556.818 94.8939 554.742 95.4545 552.5 95.4545Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
        <h3>It's <a href="https://duckduckgo.com/bang.html" target="_blank">DuckDuckGo's Bangs</a>, Done better.</h2>
        <p>DuckDuckGo's bang redirects are too slow. We fix that.</p><p>Add the following URL as a custom search engine to your browser. Enables <a href="https://duckduckgo.com/bang.html" target="_blank">all of DuckDuckGo's bangs</a> and even a few more.</p>
        <div class="url-container"> 
          <input 
            type="text" 
            class="url-input"
            value="${instanceDomain}?q=%s"
            readonly 
          />
          <button class="copy-button">
            <img src="/clipboard.svg" alt="Copy" />
          </button>
        </div>
        <p style="margin-top: 25px;">When search queries are being sent but no Bangs were used, We will use a default bang. You can always change the default bang by clicking on the button in the footer.</p>
        <div class="bang-container hidden">
          <input 
            type="text" 
            class="bang-input"
            placeholder="e.g., !g for Google, !? for DuckDuckGo."
          />
          <button class="save-button">
            <img src="/floppy.svg" alt="Save" />
          </button>
        </div>
        <p class="current-bang">Current Default Bang: !G (Google)</p>
      </div>
      <footer class="footer">
        <a href="https://x.com/theo" target="_blank">theo</a>
        •
        <a href="https://github.com/t3dotgg/unduck" target="_blank">source code</a>
        •
        <a href="#" onClick="changeDefaultBang()" class="bang-toggle">change default !bang</a>
      </footer>
    </div>
  `;
  
  const copyButton = app.querySelector<HTMLButtonElement>(".copy-button")!;
  const copyIcon = copyButton.querySelector("img")!;
  const urlInput = app.querySelector<HTMLInputElement>(".url-input")!;

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(urlInput.value);
    copyIcon.src = "/clipboard-check.svg";

    setTimeout(() => {
      copyIcon.src = "/clipboard.svg";
    }, 2000);
  });

  const saveButton = app.querySelector<HTMLButtonElement>(".save-button")!;
  const saveIcon = saveButton.querySelector("img")!;
  const bangInput = app.querySelector<HTMLInputElement>(".bang-input")!;
  const bangContainer = app.querySelector<HTMLDivElement>(".bang-container")!;
  const bangToggle = app.querySelector<HTMLAnchorElement>(".bang-toggle")!;
  const currentBang = app.querySelector<HTMLParagraphElement>(".current-bang")!;

  const findBang = (bangt: string): string | undefined => {
    const foundBang = bangs.find(bang => bang.t === bangt);
    return foundBang ? foundBang.s : undefined;
  };

  const bangt = localStorage.getItem("default-bang") || "g";
  currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;
  
  const saveInputValue = () => {
    const inputValue = bangInput.value;
    const transformedValue = inputValue.replace(/^!?(.*)$/, (match, chars) => {
      return match.charAt(0) === '!' ? chars : chars.toLowerCase();
    });

    localStorage.setItem('default-bang', transformedValue);

    const bangt = localStorage.getItem("default-bang") || "g";
    currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;
    
    saveIcon.src = "/floppy-check.svg";

    setTimeout(() => {
      saveIcon.src = "/floppy.svg";
    }, 2000);
  };

  saveButton.addEventListener("click", saveInputValue);

  bangInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      saveInputValue();
      const bangt = localStorage.getItem("default-bang") || "g";
      currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;
      event.preventDefault();
    }
  });

  bangToggle.addEventListener("click", (event) => {
    if (bangContainer) {
      event.preventDefault();
      const bangt = localStorage.getItem("default-bang") || "g";
      currentBang.innerHTML = `Current Default Bang: !${bangt} (${findBang(bangt)})`;
      bangContainer.classList.toggle("hidden");
    }
  });
}

const LS_DEFAULT_BANG = localStorage.getItem("default-bang");
const defaultBang = bangs.find((b) => b.t === LS_DEFAULT_BANG);

function getBangredirectUrl() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("q")?.trim() ?? "";
  if (!query) {
    noSearchDefaultPageRender();
    return null;
  }

  const match = query.match(/!(\S+)/i);

  const bangCandidate = match?.[1]?.toLowerCase();
  const selectedBang = bangs.find((b) => b.t === bangCandidate) ?? defaultBang;

  // Remove the first bang from the query
  const cleanQuery = query.replace(/!\S+\s*/i, "").trim();

  // Format of the url is:
  // https://www.google.com/search?q={{{s}}}
  const searchUrl = selectedBang?.u.replace(
    "{{{s}}}",
    // Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
    encodeURIComponent(cleanQuery).replace(/%2F/g, "/")
  );
  if (!searchUrl) return null;

  return searchUrl;
}

function doRedirect() {
  const searchUrl = getBangredirectUrl();
  if (!searchUrl) return;
  window.location.replace(searchUrl);
}

doRedirect();
