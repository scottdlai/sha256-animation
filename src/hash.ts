import toBinaryString from "./preprocess/toBinaryString";
import padding from "./preprocess/padding";
import toChunks from "./preprocess/toChunks";
import messageSchedule, { messageScheduleAnimation } from "./process/messageSchedule";
import H from "./constants/H";
import compression from "./process/compression";
import add from "./operations/add";

export default function hash(message: string) {
  const binary = toBinaryString(message);

  const padded = padding(binary);

  const chunks = toChunks(padded);

  let [h0, h1, h2, h3, h4, h5, h6, h7] = H;

  for (let i = 0; i < chunks.length; i += 1) {
    const w = messageSchedule(chunks[i]);

    const [a, b, c, d, e, f, g, h] = compression(w, [
      h0,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7,
    ]);

    h0 = add(h0, a);
    h1 = add(h1, b);
    h2 = add(h2, c);
    h3 = add(h3, d);
    h4 = add(h4, e);
    h5 = add(h5, f);
    h6 = add(h6, g);
    h7 = add(h7, h);
  }
  
  return [h0, h1, h2, h3, h4, h5, h6, h7].map(toHex).join('');
}

function toHex(s: string) {
  return parseInt(s, 2).toString(16).padStart(8, '0');
}