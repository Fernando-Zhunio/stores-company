import { Connection } from "./connection";

class Container {
    dependencies = {};

    register<T>(key: string, value: T) {
        this.dependencies[key] = value;
    }

    resolve<T>(name: string): T {
        if (this.dependencies[name]) {
          const dependency = this.dependencies[name];
         
          return dependency as T;
        }
        throw new Error(`Dependency not found: ${name}`);
      }
}
export const container = new Container();

function initializer() {
    container.register<Connection>("connection", new Connection());
}

initializer();