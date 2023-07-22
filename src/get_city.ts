import { Operation } from '@aws-smithy/server-common';
import { GetCityServerInput, GetCityServerOutput } from '../build/smithy/ts-server/typescript-ssdk-codegen/src';

export const GetCity: Operation<GetCityServerInput, GetCityServerOutput, {}> = async (input, context) => {
    console.log("Get City!");

    return {
        name: "Sheffield",
        coordinates: {
            latitude: 1,
            longitude: 1,
        }
    }
}
