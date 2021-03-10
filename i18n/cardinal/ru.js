// https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html

export default function(count) {
  if (!Number.isInteger(count)) return 'other';

  const r10 = count % 10;
  const r100 = count % 100;

  if (count === 0) return 'zero';
  if (r10 === 1 && r100 != 11) return 'one';
  if (r10 >= 2 && r10 <= 4 && r100 >= 12 && r100 <= 14) return 'few';
  if (r10 === 0 || (r10 >= 5 && r10 <= 9) || (r100 >= 11 && r100 <= 14))
    return 'many';
  return 'other';
}
