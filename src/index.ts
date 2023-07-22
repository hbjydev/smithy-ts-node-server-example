import { createServer } from "http";
import { GetCity, GetCityServerInput, GetCurrentTime, GetCurrentTimeServerInput, GetCurrentTimeServerOutput, GetForecast, GetForecastServerOutput, WeatherService as IWeatherService, ListCities, ListCitiesServerInput, ListCitiesServerOutput, getWeatherServiceHandler } from "@kuraudo.io/iam-service-ssdk";
import { convertRequest, writeResponse } from "@aws-smithy/server-node";

class WeatherService implements IWeatherService<{}> {
    async GetCity(input: GetCityServerInput, ctx: {}) {
        return {
            name: "Sheffield",
            coordinates: {
                latitude: 0,
                longitude: 1,
            },
        }
    }

    async GetCurrentTime(input: GetCurrentTimeServerInput, ctx: {}): Promise<GetCurrentTimeServerOutput> {
        return {
            time: new Date(),
        }
    }

    async GetForecast(input: GetCityServerInput, ctx: {}): Promise<GetForecastServerOutput> {
        return {
            chanceOfRain: 10
        }
    }

    async ListCities(input: ListCitiesServerInput, ctx: {}): Promise<ListCitiesServerOutput> {
        return {
            items: [
                {
                    name: 'Sheffield',
                    cityId: 'c-shf',
                }
            ],
        }
    }
}

const handler = getWeatherServiceHandler(new WeatherService());

const server = createServer(async (req, res) => {
    const httpRequest = convertRequest(req);
    const httpResponse = await handler.handle(httpRequest, {});
    return writeResponse(httpResponse, res);
})

server.listen(3000);
console.error("Listening on *:3000");
