/* ============================================================
   TAMBAH KOMIK BARU DI SINI
   Copy satu blok { ... }, paste di bawahnya, lalu ubah isinya.
   ============================================================ */
const DAFTAR_KOMIK = [
  {
    judul: "Lunox X Gloo",
    sampul: "https://postimg.cc/Y42YwgHn",
    link: "https://move2link.co/0da0ff2"
  }
];

const grid = document.getElementById("grid");

DAFTAR_KOMIK.forEach((komik) => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="cover">
      <img src="${komik.sampul}" alt="Sampul ${komik.judul}" loading="lazy">
    </div>
    <h2>${komik.judul}</h2>
    <a class="btn" href="${komik.link}" target="_blank" rel="noopener">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3v12"/>
        <path d="m7 11 5 5 5-5"/>
        <path d="M4 20h16"/>
      </svg>
      Download
    </a>
  `;

  grid.appendChild(card);
});
