function logMemoryUsage(label: string) {
  const memory = process.memoryUsage();
  console.log(`${label} - RSS: ${(memory.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `${label} - Heap Total: ${(memory.heapTotal / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `${label} - Heap Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `${label} -  External: ${(memory.external / 1024 / 1024).toFixed(2)} MB`
  );
}

class Singleton {
  private static instance: Singleton | null = null;

  private constructor(private name: string) {}

  public static getInstance(): Singleton {
    if (this.instance === null) {
      this.instance = new Singleton("signleton");
    }

    return this.instance;
  }

  public getName() {
    return this.name;
  }
}

class NonSingleton {
  private name: string;
  constructor() {
    this.name = "non-singleton";
  }

  public getName() {
    return this.name;
  }
}

function singletonTest() {
  logMemoryUsage("시작");
  console.time("signleton 테스트");
  const singletonObjects: Singleton[] = [];
  for (let i = 0; i < 1e7; i++) {
    const singleton = Singleton.getInstance();
    singletonObjects.push(singleton);
    singleton.getName();
  }
  //   singletonObjects.forEach((obj) => obj.getName());
  console.timeEnd("signleton 테스트");
  logMemoryUsage("싱글톤 후");
}

function nonSingletonTest() {
  logMemoryUsage("non-singleton 시작");
  console.time("non-singleton 테스트");
  const nonSingletonObjects: NonSingleton[] = [];
  for (let i = 0; i < 1e7; i++) {
    const nonSignleton = new NonSingleton();
    nonSingletonObjects.push(nonSignleton);
    nonSignleton.getName();
  }
  //   nonSingletonObjects.forEach((obj) => obj.getName());
  console.timeEnd("non-singleton 테스트");
  logMemoryUsage("non-singleton 후");
}

// singletonTest();
nonSingletonTest();
