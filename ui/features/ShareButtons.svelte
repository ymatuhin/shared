<script lang="ts">
  const text = encodeURIComponent(document.title);
  const url = encodeURIComponent(location.href);

  const services = [
    {
      name: "ВКонтакте",
      url: `https://vk.com/share.php?title=${text}&url=${url}`,
      svgPath: `<path d='M19.623 7.66c.12-.372 0-.643-.525-.643h-1.745c-.44 0-.644.237-.763.491 0 0-.898 2.17-2.152 3.576-.406.406-.593.542-.813.542-.119 0-.271-.136-.271-.508V7.644c0-.44-.136-.644-.509-.644H10.1c-.27 0-.44.203-.44.407 0 .423.627.525.694 1.711v2.576c0 .559-.101.66-.322.66-.593 0-2.033-2.185-2.897-4.676-.17-.492-.339-.678-.78-.678H4.593C4.085 7 4 7.237 4 7.491c0 .458.593 2.762 2.762 5.813 1.44 2.084 3.49 3.202 5.338 3.202 1.118 0 1.254-.254 1.254-.678v-1.575c0-.509.101-.594.457-.594.254 0 .712.136 1.746 1.136 1.186 1.186 1.39 1.728 2.05 1.728h1.745c.509 0 .746-.254.61-.745-.152-.492-.728-1.203-1.474-2.05-.407-.475-1.017-1-1.203-1.255-.254-.339-.186-.474 0-.78-.017 0 2.118-3.015 2.338-4.032' fill-rule='evenodd'/>`,
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?text=${text}&url=${url}`,
      svgPath: `<path d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill-rule='evenodd'/>`,
    },
    {
      name: "Facebook",
      url: `https://facebook.com/sharer/sharer.php?u=${url}&title={title}`,
      svgPath: `<path d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0014.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z' fill-rule='evenodd'/>`,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet/?text=${text}&url=${url}`,
      svgPath: `<path d='M20 7.539a6.56 6.56 0 01-1.885.517 3.294 3.294 0 001.443-1.816 6.575 6.575 0 01-2.085.796 3.283 3.283 0 00-5.593 2.994A9.32 9.32 0 015.114 6.6a3.28 3.28 0 001.016 4.382 3.274 3.274 0 01-1.487-.41v.041a3.285 3.285 0 002.633 3.218 3.305 3.305 0 01-1.482.056 3.286 3.286 0 003.066 2.28A6.585 6.585 0 014 17.524 9.291 9.291 0 009.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0020 7.538z' fill-rule='evenodd'/>`,
    },
    {
      name: "Viber",
      url: `viber://forward?text=${text} ${url}`,
      svgPath: `<g fill-rule='evenodd'><path d='M18.434 15.574c-.484-.391-1.002-.743-1.511-1.102-1.016-.718-1.945-.773-2.703.38-.426.648-1.021.677-1.644.392-1.718-.782-3.044-1.989-3.821-3.743-.344-.777-.34-1.473.465-2.022.425-.29.854-.634.82-1.268-.045-.828-2.043-3.593-2.832-3.885a1.429 1.429 0 00-.984 0C4.373 4.95 3.606 6.48 4.34 8.292c2.19 5.405 6.043 9.167 11.349 11.463.302.13.638.183.808.23 1.208.012 2.623-1.158 3.032-2.318.393-1.117-.438-1.56-1.096-2.093zM12.485 4.88c3.879.6 5.668 2.454 6.162 6.38.045.363-.09.909.426.919.538.01.408-.528.413-.89.045-3.699-3.163-7.127-6.888-7.253-.281.04-.863-.195-.9.438-.024.427.466.357.787.406z'/><path d='M13.244 5.957c-.373-.045-.865-.222-.953.299-.09.546.458.49.811.57 2.395.538 3.23 1.414 3.624 3.802.057.349-.057.89.532.8.436-.066.278-.53.315-.802.02-2.293-1.936-4.38-4.329-4.669z'/><path d='M13.464 7.832c-.249.006-.493.033-.585.3-.137.4.152.496.446.544.983.158 1.5.74 1.598 1.725.027.268.195.484.452.454.356-.043.389-.361.378-.664.017-1.106-1.227-2.385-2.289-2.359z'/></g>`,
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${text} ${url}`,
      svgPath: `<path d='M20 11.794c0 4.304-3.517 7.794-7.855 7.794a7.87 7.87 0 01-3.796-.97L4 20l1.418-4.182a7.714 7.714 0 01-1.127-4.024C4.29 7.489 7.807 4 12.145 4S20 7.49 20 11.794zm-7.855-6.553c-3.641 0-6.603 2.94-6.603 6.553A6.48 6.48 0 006.8 15.636l-.825 2.433 2.537-.806a6.6 6.6 0 003.633 1.084c3.642 0 6.604-2.94 6.604-6.553s-2.962-6.553-6.604-6.553zm3.967 8.348c-.049-.08-.177-.128-.37-.223-.192-.095-1.139-.558-1.315-.621-.177-.064-.305-.096-.434.095a10.92 10.92 0 01-.61.749c-.112.128-.224.143-.416.048-.193-.096-.813-.297-1.549-.948a5.76 5.76 0 01-1.07-1.323c-.113-.191-.013-.295.084-.39.086-.086.192-.223.289-.334.096-.112.128-.191.192-.319s.032-.239-.016-.335c-.048-.095-.433-1.035-.594-1.418-.16-.382-.32-.318-.433-.318-.112 0-.24-.016-.369-.016a.71.71 0 00-.513.239c-.177.19-.674.653-.674 1.593s.69 1.848.786 1.976c.096.127 1.332 2.119 3.289 2.884 1.958.764 1.958.51 2.31.477.353-.031 1.14-.461 1.3-.908.16-.446.16-.829.113-.908z' fill-rule='evenodd'/>`,
    },
  ];
</script>

<div class="inline-flex flex-wrap">
  {#each services as service}
    <a
      class="w-8 h-8 p-1 box-content transform hover:scale-125"
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Поделиться через {service.name}"
    >
      <svg
        class="fill-current text-gray-900 dark:text-gray-200"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {@html service.svgPath}
      </svg>
    </a>
  {/each}
</div>
