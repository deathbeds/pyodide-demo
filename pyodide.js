var pyodide = {}

{
    let baseURL = "https://iodide-project.github.io/pyodide-demo/";
    let wasmURL = baseURL + 'pyodide.asm.wasm?x=' + Date.now();
    let wasmXHR = new XMLHttpRequest();
    wasmXHR.open('GET', wasmURL, true);
    wasmXHR.responseType = 'arraybuffer';
    wasmXHR.onload = function() {
        if (wasmXHR.status === 200 || wasmXHR.status === 0) {
            pyodide.wasmBinary = wasmXHR.response;
        } else {
            alert("Couldn't download the pyodide.asm.wasm binary.  Response was " + wasmXHR.status);
        }

        pyodide.baseURL = baseURL;
        var script = document.createElement('script');
        script.src = baseURL + "pyodide.asm.js";
        document.body.appendChild(script);
    };
    wasmXHR.send(null);
}
