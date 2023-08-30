export const logger = (name: string) => {
  return (message: string, ...args: any[]) => {
    const delta = getMsDelta();

    let safeArgs = args;
    try {
      safeArgs = structuredClone(args);
    } catch (e) {}

    console.debug(
      `%c${name} %c${message}`,
      `color: ${getColor(name)}`,
      `font-weight: bold; color: ${getColor(name + message)}`,
      `+${delta}ms`,
      ...safeArgs
    );
  };
};

export const domain = (domainName: string) => (loggerName: string) =>
  logger(`${domainName}:${loggerName}`);

let time = performance.now();
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
