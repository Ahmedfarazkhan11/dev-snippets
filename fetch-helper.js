// Useful Async Fetch Helper
async function fetchJSON(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}
