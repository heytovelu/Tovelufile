const fs = require("fs");

const appHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/app.html", "utf8");
const salesHtml = fs.readFileSync("/media/nikita/New Volume/Tovelufile/sales.html", "utf8");

// Escape for template literals
function escapeHtmlForJs(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\${/g, "\\${");
}

const routerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Tovelu</title>
  <script>
    (function() {
      var host = window.location.hostname.toLowerCase();
      // If subdomain is app.tovelu.store (or accessing /app) -> serve the Web App
      if (host.indexOf('app.tovelu.store') !== -1 || window.location.pathname.startsWith('/app')) {
        window.__IS_APP__ = true;
      } else {
        window.__IS_APP__ = false;
      }
    })();
  </script>
</head>
<body>
  <script>
    if (window.__IS_APP__) {
      document.open();
      document.write(\`${escapeHtmlForJs(appHtml)}\`);
      document.close();
    } else {
      document.open();
      document.write(\`${escapeHtmlForJs(salesHtml)}\`);
      document.close();
    }
  </script>
</body>
</html>`;

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/index.html", routerHtml, "utf8");
console.log("Successfully created bulletproof client+edge dual host router in index.html!");
