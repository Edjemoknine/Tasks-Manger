import { auth } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request, { params }: { params: any }) => {
  try {
    const { id } = params;
    const task = await prisma.task.findUnique({ where: { id } });

    return NextResponse.json({ task, status: 500 });
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (req: Request, { params }: { params: any }) => {
  try {
    const { id } = params;
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized", status: 401 });
    }

    const { title, description, important, completed, date } = await req.json();

    const task = await prisma.task.update({
      where: {
        id: parseInt(id),
        data: {
          title,
          description,
          important,
          completed,
          date,
          userId: userId,
        },
      },
    });
    return NextResponse.json({ task, status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating task", status: 500 });
  }
};
