import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.resolve(process.cwd(), "public/data/products.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const products = JSON.parse(jsonData);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error reading products JSON file:", error);
    return NextResponse.json({ message: "Error fetching products" }, { status: 500 });
  }
}