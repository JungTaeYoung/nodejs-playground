import "reflect-metadata";

const container = new Map<string, any>();

function Injectable() {
  return function <T extends new (...args: any[]) => any>(target: T) {
    if (!container.has(target.name)) {
      container.set(target.name, new target());
    }
  };
}

// Inject 데코레이터: 특정 클래스의 인스턴스를 주입
function Inject(classType: any) {
  return function (target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: () => {
        if (!container.has(classType.name)) {
          throw new Error(`Dependency ${classType.name} is not registered.`);
        }
        return container.get(classType.name);
      },
      enumerable: true,
      configurable: true,
    });
  };
}

@Injectable()
class ServiceA {
  private name: string;
  constructor() {
    this.name = "모든 인스턴스가 공유하는 이름";
  }
  getText() {
    return this.name;
  }
  setText(name: string) {
    this.name = name;
  }
}

class ServiceB {
  @Inject(ServiceA)
  serviceA!: ServiceA;

  getText() {
    return this.serviceA.getText();
  }
}

const serviceB1 = new ServiceB();
serviceB1.serviceA.setText("변경");

const serviceB2 = new ServiceB();
console.log(serviceB1.getText());
console.log(serviceB2.getText());

// setInterval(() => {
//   console.log("Node.js is running...");
// }, 100000); // 1초마다 실행
