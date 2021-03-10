// https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html

export default function(count) {
  if (count === 0) return 'zero';
  if (count === 1) return 'one';
  return 'other';
}
