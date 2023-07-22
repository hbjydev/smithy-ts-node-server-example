import { GetCityServerInput, GetCurrentTimeServerInput, GetCurrentTimeServerOutput, GetForecastServerOutput, WeatherService as IWeatherService, ListCitiesServerInput, ListCitiesServerOutput, getWeatherServiceHandler } from "@kuraudo.io/iam-service-ssdk";

export class WeatherService implements IWeatherService<{}> {
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

export const weatherServiceHandler = getWeatherServiceHandler(new WeatherService());
