// This is a server component that will be rendered on the server side

import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consuption-method-option";

// Define the props for the RestaurantPage component
interface RestaurantPageProps {
  params: Promise<{ slug: string }>; // The params prop is a Promise that resolves to an object containing a slug string
}

// Define the RestaurantPage component as an async function
const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant?.name}</h2>
      </div>
      {/* BEM VINDO*/}
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font-semibold">Seja Bem vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos a oferecer
          praticidade e sabor em cada detalhe
        </p>
      </div>
      {/* METODO DE CONSUMO*/}
      <div className="pt-14 grid grid-cols-2 gap-4">
        {/* PARA COMER AQUI */}
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Para comer aqui"
          imageUrl="/dine_in.png"
          imageAlt="Para comer aqui"
        />
        {/* PARA LEVAR */}
        <ConsumptionMethodOption
          option="TAKEAWAY"
          slug={slug}
          buttonText="Para levar"
          imageUrl="/takeaway.png"
          imageAlt="Para levar"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
