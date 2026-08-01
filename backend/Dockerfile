FROM node:22-slim

# Tectonic (LaTeX engine used to compile resumes to PDF) needs a few runtime libs
# and fetches its own TeX package bundle over HTTPS at compile time.
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates libfontconfig1 libgraphite2-3 libharfbuzz0b \
    && curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net | sh \
    && mv tectonic /usr/local/bin/tectonic \
    && apt-get purge -y curl \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3001

CMD ["node", "src/server.js"]
