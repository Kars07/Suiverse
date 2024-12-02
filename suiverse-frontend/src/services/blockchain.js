export const getSuiData = async () => {
  try {
    // Replace with the correct URL to your backend API
    const response = await fetch("/api/sui-data");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Blockchain fetch failed.");
  }
};
