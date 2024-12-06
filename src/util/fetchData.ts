
async function fetchData(url: string) {
  try {
    const response = await fetch(url)
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchData