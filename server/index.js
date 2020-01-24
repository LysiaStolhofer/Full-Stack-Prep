const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const morgan = require("morgan");
const { join } = require("path");
// const routes = require("./server/routes");

// Create a new Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-cvga9dac.auth0.com",
  audience: "fsp-api-server"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Add routes, both API and view
// app.use(routes);

app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));


// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  console.log(req);

  // app.get('*', function(req, res) {
  //   res.redirect('/');
  // });
  

  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// Start the App & API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
