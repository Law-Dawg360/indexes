// embed-svg.js

// Fetch SVG content and display it within a code block
const svgObject = document.getElementById('svg-object');

svgObject.onload = function() {
    const svgDocument = svgObject.contentDocument;
    const svgCode = svgDocument.querySelector('svg').outerHTML;
    
    // Display SVG code within a code block
    const codeBlock = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = svgCode;
    codeBlock.appendChild(code);
    
    document.body.appendChild(codeBlock);
    
    // Syntax highlighting if needed (e.g., using highlight.js)
    // Replace 'language-svg' with the appropriate language identifier
    // hljs.highlightBlock(code);
}
