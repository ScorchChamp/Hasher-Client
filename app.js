
const hasher = (message, type) => {
    console.log(type)
    const buffer = new TextEncoder().encode(message);
    return crypto.subtle.digest(type, buffer).then((hash) => {
        return Array.prototype.map.call(new Uint8Array(hash), (x) => ('00' + x.toString(16)).slice(-2)).join('');
    });
};

window.addEventListener("load", function () {
    const inputText = document.getElementById("inputText");
    const hashFunction = document.getElementById("hashFunction");
    const output = document.getElementById("output");
    inputText.addEventListener("input", updateOutput);
    hashFunction.addEventListener("change", updateOutput);

    updateOutput();
    async function updateOutput() {
        const selectedFunction = hashFunction.value;
        const text = inputText.value;
        const hash = new TextEncoder().encode(text);
        output.textContent = await hasher(hash, selectedFunction);
    };
})
