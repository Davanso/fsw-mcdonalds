// This is a server component that will be rendered on the server side

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

// Define the props for the RestaurantPage component
interface RestaurantPageProps {
  params: Promise<{ slug: string }>; // The params prop is a Promise that resolves to an object containing a slug string
}

// Define the RestaurantPage component as an async function
const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  return <h1>{restaurant?.name}</h1>;
};

// Export the RestaurantPage component as the default export
export default RestaurantPage;
