/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.getCinematrixMovies = onRequest(async (request, response) => {
  const movieName = request.query.movieName;
  logger.info("Movie Name: ", movieName);

  response.send({
    "name": "Toy Story (1995)",
    "type": "knn",
    "movie": [
      "Raiders of the Lost Ark (Indiana Jones and the Raiders of the Lost Ark) (1981)",
      "Star Wars: Episode V - The Empire Strikes Back (1980)",
      "Star Wars: Episode VI - Return of the Jedi (1983)",
      "Aladdin (1992)",
      "Lion King, The (1994)",
      "Back to the Future (1985)",
      "Jurassic Park (1993)",
      "Star Wars: Episode IV - A New Hope (1977)",
      "Forrest Gump (1994)",
      "Toy Story 2 (1999)"
    ],
    "title": [
      "-1",
      "1893",
      "1895",
      "812",
      "-1",
      "105",
      "329",
      "1894",
      "13",
      "863"
    ],
  })

  // logger.info("Hello logs!", { structuredData: true });
  // response.send("Hello from Firebase!");

});
