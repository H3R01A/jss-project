import { NextResponse } from 'next/server';
import { JigsawStack } from 'jigsawstack';

const jigsawstack = JigsawStack(); // API key will be read from environment

export async function POST(req: Request) {
  
  const { playerLevel, playerWeapon } = await req.json();

  try {

    // const params = {
    //   prompt:
    //     "You are a level 50 Minotaur with an axe. Given this player's level:{level} and weapon:{weapon}, determine if they are able to beat you and win the game",
    //   inputs: [
    //     {
    //       key: 'level',
    //       optional: false,
    //     },
    //     {
    //       key: 'weapon',
    //       optional: false,
    //     },
    //   ],
    //   return_prompt: {
    //     canBeatYouWithLevel:
    //       'Return true if the level is higher than your level. Else return false',
    //     canBeatYouWithSacredWeapon:
    //       'Return true if the weapon is a sacred weapon. Else return false',
    //   },
    // };

    // const result = await jigsawstack.prompt_engine.create(params);
    // const prompt_id = result.prompt_engine_id;

    // console.log(prompt_id);

    const finalResult = await jigsawstack.prompt_engine.run({
      id: `6d0c1ae0-68fe-48ce-a165-4576480d3753`,
      input_values: {
        level: playerLevel,
        weapon: playerWeapon,
      },
    });

    if (finalResult.success) {
      return NextResponse.json(finalResult.result, {
        status: 200,
      });
    } else {
      return NextResponse.json(
        { error: 'Please review error on the backend' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Please review error on the backend' },
      { status: 500 }
    );
  }
}
