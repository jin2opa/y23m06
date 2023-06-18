const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res) => {
  const urlData = new URL(req.url, "http://localhost:3000");
  if (req.url === "/style.css") {
    const cssPath = path.join(__dirname, "style.css");
    fs.readFile(cssPath, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error reading CSS file");
      } else {
        res.setHeader("Content-Type", "text/css");
        res.end(data);
      }
    });
  } else {
    // Serve the HTML page
    // const indexPath = path.join(__dirname, 'index.html');
    fs.readdir("./data", (err, data) => {
      let list = "";
      let titleData = urlData.searchParams.get("title");
      data.forEach((element) => {
        list += `<li><a href="/?title=${element}">${element}</a></li>`;
      });
      if(titleData){

        fs.readFile(`./data/${titleData}`, "utf8", (err, data) => {
          let html = `
          <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tag</title>
  </head>
  
  <body>
    <header>
      <h1 id="topic-h1"><a href="/">Thu. Jun. 08, 2023</a></h1>
    </header>
    <main>
      <nav>
        <ol>
          ${list}
        </ol>
      </nav>
      <article>
        <section>
          ${data}
        </section>
      </article>
      <aside></aside>
    </main>
    <footer></footer>
  </body>
  
  </html>
          `;
          res.writeHead(200);
          res.end(html);
        });
      } else {
        let html = 
        `
         <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tag</title>
  </head>
  
  <body>
    <header>
      <h1 id="topic-h1"><a href="/">Thu. Jun. 08, 2023</a></h1>
    </header>
    <main>
      <nav>
        <ol>
          ${list}
        </ol>
      </nav>
      <article>
        <section>
          <h3>Today's To-do</h3>
          <h3>Today's Not-To-do</h3>
        </section>
      </article>
      <aside></aside>
    </main>
    <footer></footer>
  </body>
  
  </html>

        `;
        res.writeHead(200);
        res.end(html);
      }
    });
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
