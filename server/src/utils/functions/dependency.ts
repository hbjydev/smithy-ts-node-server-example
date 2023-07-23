import { container, InjectionToken } from "tsyringe";

export const resolveDependency = async <T>(token: InjectionToken<T>, interval: number = 500): Promise<T> => {
    while (!container.isRegistered(token, true)) {
        await new Promise(resolve => setTimeout(resolve, interval));
    }

    return container.resolve(token);
}
