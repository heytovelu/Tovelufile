const fs = require("fs");

const vercelConfig = {
  "version": 2,
  "framework": null,
  "outputDirectory": ".",
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    // Subdomain Host: app.tovelu.store -> serves the mobile web app (app.html)
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "host",
          "value": "app.tovelu.store"
        }
      ],
      "destination": "/app.html"
    },
    // Root Domain Host: tovelu.store -> serves the website landing page (sales.html)
    {
      "source": "/",
      "has": [
        {
          "type": "host",
          "value": "tovelu.store"
        }
      ],
      "destination": "/sales.html"
    },
    {
      "source": "/",
      "has": [
        {
          "type": "host",
          "value": "www.tovelu.store"
        }
      ],
      "destination": "/sales.html"
    },
    // Core routes
    { "source": "/sales", "destination": "/sales.html" },
    { "source": "/website", "destination": "/sales.html" },
    { "source": "/app", "destination": "/app.html" },
    { "source": "/survey", "destination": "/survey.html" },
    { "source": "/report", "destination": "/report.html" },
    { "source": "/checkout", "destination": "/checkout.html" },
    { "source": "/pricing", "destination": "/checkout.html" },
    { "source": "/thais", "destination": "/thais.html" },
    { "source": "/download", "destination": "/download.html" },
    // Fallback default
    { "source": "/", "destination": "/sales.html" }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        },
        {
          "key": "Service-Worker-Allowed",
          "value": "/"
        }
      ]
    },
    {
      "source": "/manifest.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
};

const jsonStr = JSON.stringify(vercelConfig, null, 2);

fs.writeFileSync("/media/nikita/New Volume/Tovelufile/vercel.json", jsonStr, "utf8");
fs.writeFileSync("/media/nikita/New Volume/Tovelufile/webapp/vercel.json", jsonStr, "utf8");
fs.writeFileSync("/media/nikita/New Volume/Tovelufile/website/vercel.json", jsonStr, "utf8");

console.log("Successfully configured host-based rewrites in vercel.json!");
