const ApiData = {
  baseUrl: "https://localhost:44321/api/",
  register: "authentication/register",
  login: "authentication/login",
  paketi: "paketi/",
  kuriri: "kuriri/",
  search: {
    paketi: "pretraga",
    dostave: "dostave?granica=",
    prijem: "paketi/trazi?prijem=",
    kuriri: "kuriri/nadji?ime=",
  },
  stanje: "stanje",
};

// // Auth endpoints
// let registerEndpoint = "authentication/register";
// let loginEndpoint = "authentication/login";

// // Entity API endpoints
// let paketiEndpoint = "paketi/";
// let kuririEndpoint = "kuriri/";

// // Search endpoints
// let searchPaketiEndpoint = "pretraga";
// let searchDostaveEndpoint = "dostave?granica=";
// let searchPrijemEndpoint = "paketi/trazi?prijem=";
// let kuririImeEndpoint = "kuriri/nadji?ime=";

// // Stanje endpoints
// let stanjeEndpoint = "stanje"

// // Working variables
// let formAction = "Create";
// let editingId;
// let jwt_token;

export default ApiData;
