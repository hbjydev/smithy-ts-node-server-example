import 'reflect-metadata';
import { createServer } from "http";
import { convertRequest, writeResponse } from "@aws-smithy/server-node";
import { WeatherService } from "./api/services/weather";
import { getWeatherServiceHandler } from '@kuraudo.io/iam-service-ssdk';
import { container } from 'tsyringe';

async function run() {
    const service = container.resolve(WeatherService);
    const weatherServiceHandler = getWeatherServiceHandler(service);

    const server = createServer(async (req, res) => {
        const httpRequest = convertRequest(req);

        const httpResponse = await weatherServiceHandler.handle(httpRequest, {});

        return writeResponse(httpResponse, res);
    })

    server.listen(3000);
    console.error("Listening on *:3000");
}

void run();
