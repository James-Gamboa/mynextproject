import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?apikey=" + process.env.TOKEN
  );
  console.log("https://jsonplaceholder.typicode.com/users?apikey=" + process.env.TOKEN)
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST() {
  const { nombre, apellido } = await request.json();
  console.log(nombre, apellido);

  return NextResponse.json({
    message: "Creando Datos!",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando Datos!",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando Datos!",
  });
}
