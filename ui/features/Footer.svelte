<script lang="ts">
  export let title: string;
  export let from: string;
  export let version: string;
  export let className: string = "";
  export { className as class };

  const year = new Date().getFullYear();
</script>

<footer class="max-w-full text-sm / {className}">
  <p>
    {from} — {year} ©
    <a href="/" class="typo-link">{title}</a>
    <span class="text-xs">(версия {version})</span>
  </p>
  <p>
    Сделал с любовью <a href="https://ymatuhin.ru" class="typo-link">Юрий Матюхин</a>, эл. почта
    <a href="mailto:ym@ymatuhin.ru?subject={location.hostname}" class="typo-link">ym@ymatuhin.ru</a>
  </p>
</footer>
