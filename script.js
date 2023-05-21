function runCode() {
  const htmlCode = document.getElementById('html-code').value;
  const cssCode = document.getElementById('css-code').value;
  const jsCode = document.getElementById('js-code').value;

  const outputFrame = document.getElementById('output-frame');
  const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

  outputDocument.open();
  outputDocument.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>${htmlCode}<script>${jsCode}</script></body>
    </html>
  `);
  outputDocument.close();
}
