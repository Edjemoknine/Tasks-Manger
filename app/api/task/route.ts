import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized", status: 401 });
    }

    const { title, description, isCompleted, isImportant, date } =
      await req.json();
    // console.log(title, description, isCompleted, date, isImportant);
    const task = await prisma.task.create({
      data: {
        title,
        description,
        isImporatnt: isImportant,
        completed: isCompleted,
        date,
        userId,
      },
    });
    revalidatePath("/");
    return NextResponse.json({ task: "task", status: 500 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating task", status: 500 });
  }
};
export async function GET(req: Request) {
  try {
    const { userId } = auth();
    console.log({ userId });
    //  if (!userId) {
    //    return NextResponse.json({ message: "Unauthorized", status: 401 });
    //  }
    const tasks = await prisma.task.findMany({
      // where: {
      //   userId: userId as any,
      // },
    });
    revalidatePath("/");

    return new NextResponse(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
}
