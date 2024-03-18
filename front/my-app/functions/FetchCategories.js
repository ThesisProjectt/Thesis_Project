
const FetchCategories = async () => {
  try {
    const response = await fetch(`http://192.168.104.10:3000/category/getCategories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching error", error);
  }
};

export default FetchCategories;