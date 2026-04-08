import type { APIRoute } from "astro";
import { db } from "../../../db";
import { products } from "../../../db/schema";

export const POST: APIRoute = async ({ request }) => {
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

    await db.insert(products).values({
      name,
      description: description || null,
      quantity,
      price: price || "0.00",
      category: category || null,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: "Erreur serveur" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
