import { NextResponse } from 'next/server';
import { JigsawStack } from 'jigsawstack';

const jigsawstack = JigsawStack(); // API key will be read from environment

export async function POST(req: Request) {

    const request = await req.json();
  try {
    const params = {
      prompt:
        "Given this candidate's experience:{experience}, determine if she should be considered for the Senior Fullstack Mobile Engineer Role with React Native, Node.js, AWS, Next.js, Typescript",
      inputs: [
        {
          key: 'experience',
          optional: false,
        },
      ],
      return_prompt: {
        experienceWithNodejs:
          'Return true, if candidate has 4 years and above experience with Node.js. Else return false',
        seniorInReactNative:
          'Return true if candidate has 6 years and above experience building apps with React Native',
        sectorExperience:
          'Return sector the candidate has the most experience in. Example of sector include: Fintech, Edtech, blockchain, Ecommerce, etc.',
      },
    };

    const result = await jigsawstack.prompt_engine.create(params);
    const prompt_id = result.prompt_engine_id;

    console.log(prompt_id);

    const finalResult = await jigsawstack.prompt_engine.run({
      id: prompt_id,
      input_values: {
        experience:
          'In my most recent role in the Fintech sector, I successfully contributed to creating secure and efficient financial applications, demonstrating my ability to thrive in dynamic and challenging environments.',
      },
    });

    return NextResponse.json({ finalResult }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Please review error on the backend' },
      { status: 500 }
    );
  }
}
