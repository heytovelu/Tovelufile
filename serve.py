import http.server
import socketserver
import os
import mimetypes

PORT = 8080
BASE_DIR = "/media/nikita/New Volume/Tovelufile"

class CustomHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        req_path = self.path.split('?')[0].lstrip('/')
        if not req_path or req_path == "":
            req_path = "index.html"
        
        file_path = os.path.join(BASE_DIR, req_path)
        
        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(200)
            mime_type, _ = mimetypes.guess_type(file_path)
            if not mime_type:
                mime_type = 'application/octet-stream'
            if mime_type.startswith('text/') or mime_type in ['application/javascript', 'application/json']:
                mime_type += '; charset=utf-8'
            
            self.send_header('Content-Type', mime_type)
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            with open(file_path, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_response(404)
            self.send_header('Content-Type', 'text/plain; charset=utf-8')
            self.end_headers()
            self.wfile.write(b"404 Not Found")

    def do_HEAD(self):
        req_path = self.path.split('?')[0].lstrip('/')
        if not req_path or req_path == "":
            req_path = "index.html"
        file_path = os.path.join(BASE_DIR, req_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(200)
            mime_type, _ = mimetypes.guess_type(file_path)
            self.send_header('Content-Type', mime_type or 'text/html')
            self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Tovelu Server running on http://localhost:{PORT}")
        httpd.serve_forever()
