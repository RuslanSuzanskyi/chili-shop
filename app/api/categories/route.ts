import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.resolve(process.cwd(), "public/data/categories.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const categories = JSON.parse(jsonData);
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error reading categories JSON file:", error);
    return NextResponse.json({ message: "Error fetching categories" }, { status: 500 });
  }
}