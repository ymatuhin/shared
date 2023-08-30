import { rafListen } from "./raf-listen";

const onResize = rafListen.bind(null, window, "resize");

export { onResize };
