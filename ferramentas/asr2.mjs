import { pipeline, env } from "@huggingface/transformers";
import fs from "fs";
env.allowRemoteModels = false; env.localModelPath = process.env.MODELOS;
const asr = await pipeline("automatic-speech-recognition", "Xenova/whisper-tiny", { dtype: { encoder_model: "q8", decoder_model_merged: "q8" } });
const buf = fs.readFileSync(process.argv[2]); const a = new Float32Array(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length));
const segs = JSON.parse(fs.readFileSync(process.argv[3], "utf8")); const res = [];
for (const [s, e] of segs) {
  const x = a.subarray(Math.max(0, Math.floor(s * 16000)), Math.min(a.length, Math.ceil(e * 16000)));
  try { const o = await asr(x, { language: "portuguese", task: "transcribe", return_timestamps: "word" }); res.push(o.chunks.map(c => [+(c.timestamp[0] + s).toFixed(2), +((c.timestamp[1] ?? c.timestamp[0]) + s).toFixed(2), c.text.trim()])); }
  catch (err) { res.push([]); }
}
fs.writeFileSync(process.argv[4], JSON.stringify(res));
