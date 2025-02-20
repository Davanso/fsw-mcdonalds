import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/products-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productsId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productsId } = await params;

  const product = await db.product.findUnique({ where: { id: productsId } });
  if (!product) {
    return notFound();
  }
  return (
    <div>
      {/* HEADER */}
      <ProductHeader product={product} />
      {/* NOME, DESCRIÇÃO */}
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{slug}</p>
      </div>
    </div>
  );
};

export default ProductPage;
