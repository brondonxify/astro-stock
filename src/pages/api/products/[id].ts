import type { APIRoute } from "astro";
import { db } from "../../../db";
import { products } from "../../../db/schema";
import { eq } from "drizzle-orm";

export const GET: APIRoute = async ({ params }) => {
  try {
    const result = await db
      .select()
      .from(products)
      .where(eq(products.id, Number(params.id)));

    if (result.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: "Produit non trouvé" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ success: true, product: result[0] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "Erreur serveur" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
