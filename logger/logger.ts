export type Logger = ReturnType<typeof createLogger>;

export const createLogger = (name: string) => {
  function logger(message: string, ...args: any[]) {
    const delta = getMsDelta();

    let safeArgs = args;
    try {
      const copy = JSON.parse(JSON.stringify(args));
      safeArgs = copy.filter((i: any) => i !== undefined);
    } catch (e) {}

    console.debug(
      `%c${name} %c${message}`,
      `color: ${getColor(name)}`,
      `font-weight: bold; color: ${getColor(name + message)}`,
      ...safeArgs.concat(delta > 2 ? [`+${delta}ms`] : [])
    );
  }

  return logger;
};

export type Domain = ReturnType<typeof createDomain>;
export const createDomain = (domainName: string) => (loggerName: string) =>
  createLogger(`${domainName}:${loggerName}`);

let time: number = performance.now();
function getMsDelta() {
  const delta = performance.now() - time;
  time = performance.now();
  return Math.round(delta);
}

function getColor(message: string) {
  const h = hashCode(message) % 360;
  const s = 60 + (hashCode(message) % 40);
  const l = 60 + (hashCode(message) % 40);
  return `hsl(${h}deg ${s}% ${l}%)`;
}

function hashCode(s: string) {
  return s
    .split("")
    .map((i) => i.charCodeAt(0))
    .reduce((a, b) => a + b);
}
