const baseUrl = "https://api-test-ln.herokuapp.com";

export async function getArticles() {
  const response = await fetch(`${baseUrl}/articles`);
  const responseJson = await response.json();
  return responseJson;
}
export default {
  getArticles
};
