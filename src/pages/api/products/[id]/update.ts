import type { APIRoute } from "astro";
import { db } from "../../../../db";
import { products } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export const POST: APIRoute = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const quantity = parseInt(formData.get("quantity") as string);
    const price = formData.get("price") as string;
    const category = formData.get("category") as string;

    if (!name || isNaN(quantity)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Champs obligatoires manquants",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    await db
      .update(products)
      .set({
        name,
        description: description || null,
        quantity,
        price: price || "0.00",
        category: category || null,
        updatedAt: new Date(),
      })
      .where(eq(products.id, Number(params.id)));

    return new Response(JSON.stringify({ success: true }), {
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
