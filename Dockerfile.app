FROM library/nginx:1.13.0
COPY app /usr/share/nginx/html
VOLUME /usr/share/nginx/html/resources/content
