import hash from 'object-hash';

const target_hash = 1560;

export function validProof(proof) {
  let guessHash = hash(proof);
  return guessHash === hash(target_hash);
}

export function proofOfWork() {
  let proof = 0;
  while (true) {
    if (!validProof(proof)) {
      proof++;
    } else {
      break;
    }
  }
  return hash(proof);
}

export default { proofOfWork, validProof };
