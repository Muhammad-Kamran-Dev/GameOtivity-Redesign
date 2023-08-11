import { NextRequest, NextResponse } from "next/server";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
type Data = {
  value: string;
  name: string;
};
const checkInput = (data: Data[]): string[] => {
  const requiredData: string[] = [];
  data.forEach((val) => {
    !val.value && requiredData.push(val.name);
  });
  return requiredData;
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, password }: User = await req.json();
    if (!name || !email || !password) {
      const dataObj: Data[] = [
        {
          value: name,
          name: "name",
        },
        {
          value: email,
          name: "email",
        },
        {
          value: password,
          name: "password",
        },
      ];
      const requiredData: string[] = checkInput(dataObj);

      return NextResponse.json(
        {
          message: `${
            requiredData && requiredData.map((data) => data)
          } is Required`,
        },
        {
          status: 400,
        }
      );
    }

    const user: User = {
      id: Math.floor(Math.random() * 100).toString(),
      name,
      email,
      password,
    };
    return NextResponse.json(
      {
        success: true,
        user,
        message: "You hit the Login endpoint",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    let errorMessage;

    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "Fill the data in correct format";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      {
        status: 400,
      }
    );
  }
}
