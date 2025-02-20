const sprintField = 'Sprint';
const estimateField = 'Estimate';
const consumedField = 'Réalisé';

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

function generateGraphQLQuery(cursor) {
  return `
                query {
                    repository(owner: "${repoOwner}", name: "${repoName}") {
                      projectsV2(first: 10) {
                        nodes {
                          title
                          items(first: 100, after: "${cursor}") {
                            nodes {
                              content {
                                ... on Issue {
                                  number
                                  title
                                  url
                                  assignees(first: 10) {
                                    nodes {
                                      login
                                    }
                                  }
                                }
                              }
                              sprint: fieldValueByName(name: "${sprintField}") {
                                ... on ProjectV2ItemFieldIterationValue {
                                  title
                                }
                              }
                              estimate: fieldValueByName(name: "${estimateField}") {
                                ... on ProjectV2ItemFieldNumberValue {
                                  number
                                }
                              }
                              consumed: fieldValueByName(name: "${consumedField}") {
                                ... on ProjectV2ItemFieldNumberValue {
                                  number
                                }
                              }
                            }
                            pageInfo {
                              hasNextPage
                              endCursor
                            }
                          }
                        }
                      }
                    }
                }
            `;
}
