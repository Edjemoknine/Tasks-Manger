import { auth } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized", status: 401 });
    }

    const { title, description, important, completed, date } = await req.json();

    const task = await prisma.task.create({
      data: {
        title,
        description,
        important,
        completed,
        date,
        userId: userId,
      },
    });
    return NextResponse.json({ task, status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating task", status: 500 });
  }
};
export const GET = async (req: Request) => {
  try {
    const tasks = await prisma.task.findMany();

    return NextResponse.json({ tasks, status: 500 });
  } catch (error) {
    console.log(error);
  }
};
