import { GetCityServerInput, GetCurrentTimeServerInput, GetCurrentTimeServerOutput, GetForecastServerOutput, WeatherService as IWeatherService, ListCitiesServerInput, ListCitiesServerOutput, getWeatherServiceHandler } from "@kuraudo.io/iam-service-ssdk";
import { Logger } from "@services";
import { autoInjectable, inject, injectable } from 'tsyringe';

@injectable()
export class WeatherService implements IWeatherService<{}> {
    constructor(private logger: Logger) {}

    async GetCity(input: GetCityServerInput, ctx: {}) {
        this.logger.log('got city');
        return {
            name: "Sheffield",
            coordinates: {
                latitude: 0,
                longitude: 1,
            },
        }
    }

    async GetCurrentTime(input: GetCurrentTimeServerInput, ctx: {}): Promise<GetCurrentTimeServerOutput> {
        this.logger.log('got current time');
        return {
            time: new Date(),
        }
    }

    async GetForecast(input: GetCityServerInput, ctx: {}): Promise<GetForecastServerOutput> {
        this.logger.log('got forecast');
        return {
            chanceOfRain: 10
        }
    }

    async ListCities(input: ListCitiesServerInput, ctx: {}): Promise<ListCitiesServerOutput> {
        this.logger.log('listed cities');
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
