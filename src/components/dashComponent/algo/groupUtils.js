export function grouperCommunesProches(communes) {
  const maxDistance = 0.5;

  // 1. Calculer toutes les distances
  const distances = [];

  for (let i = 0; i < communes.length; i++) {
    for (let j = i + 1; j < communes.length; j++) {
      const dist = calculerDistance(communes[i], communes[j]);
      distances.push({ commune1: i, commune2: j, distance: dist });
    }
  }

  // 2. Filtrer les paires proches
  const pairesProches = distances.filter((d) => d.distance < maxDistance);

  // 3. Groupement
  const groupes = {};

  pairesProches.forEach((paire) => {
    const commune1 = paire.commune1;
    const commune2 = paire.commune2;

    if (!groupes[commune1] && !groupes[commune2]) {
      groupes[commune1] = [commune1, commune2];
    } else if (groupes[commune1] && groupes[commune2]) {
      const groupeFusion = [...groupes[commune1], ...groupes[commune2]];
      delete groupes[commune1];
      delete groupes[commune2];
      groupes[commune1] = groupeFusion;
    } else {
      groupes[commune1].push(commune2);
    }
  });

  return groupes;
}

function calculerDistance(c1, c2) {}
