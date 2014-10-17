from twython import Twython
import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

HandlerClass = SimpleHTTPRequestHandler
ServerClass  = BaseHTTPServer.HTTPServer
Protocol     = "HTTP/1.0"

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8000
server_address = ('127.0.0.1', port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)

sa = httpd.socket.getsockname()
print "Serving HTTP on", sa[0], "port", sa[1], "..."
httpd.serve_forever()


APP_KEY = "gXSQW5S4XMjiVW97YRlMgy2b6"
APP_SECRET = "ovsiZfZHxNdf7aFQXCFFSAqCjOwOo6knHDUEh1NhrOkt0fHVoj"

twitter = Twython(APP_KEY, APP_SECRET)
auth = twitter.get_authentication_tokens(callback_url = None)

OAUTH_TOKEN = auth['oauth_token']
OAUTH_TOKEN_SECRET = auth['oauth_token_secret']



