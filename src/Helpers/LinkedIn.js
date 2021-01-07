/* const accessToken = "YOUR_ACCESS_TOKEN";
const options = {
  host:
    "https://api.linkedin.com/v2/people/(id:{profile ID})?projection=(id,firstName,lastName)",
  method: "GET",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "cache-control": "no-cache",
    "X-Restli-Protocol-Version": "2.0.0",
  },
};

const profileRequest = https.request(options, function (res) {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const profileData = JSON.parse(data);
    console.log(JSON.stringify(profileData, 0, 2));
  });
});
profileRequest.end(); */
