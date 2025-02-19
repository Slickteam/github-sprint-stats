let modal = document.getElementById("githubAccessParams");

let githubSettingsBtn = document.getElementById("githubSettingsLink");
let submitGithubSettings = document.getElementById("submitGithubSettings");

githubSettingsBtn.onclick = function() {
  modal.style.display = "block";
}

submitGithubSettings.onclick = function() {
  localStorage.setItem("token", document.getElementById("token").value);
  localStorage.setItem("repoOwner", document.getElementById("repoOwner").value);
  localStorage.setItem("repoName", document.getElementById("repoName").value);
  modal.style.display = "none";
  location.reload();
}
