
const FetchCategories = async () => {
  try {
    const response = await fetch(`http://192.168.1.45:3000/category/getCategories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching error", error);
  }
};

export default FetchCategories;