const perPage = 12;
let currentPage = 1;

function toggleSpec(btn) {
  const spec = btn.nextElementSibling;
  spec.classList.toggle("show");

  btn.textContent = spec.classList.contains("show")
    ? "Tutup Spesifikasi"
    : "Spesifikasi";
}

function renderProduk() {
  const grid = document.getElementById("produkGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const pageData = dataProduk.slice(start, start + perPage);

  pageData.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.gambar}" alt="${p.nama}">
        <h3>${p.nama}</h3>

        <button class="btn-spec" onclick="toggleSpec(this)">
          Spesifikasi
        </button>

        <div class="spec">
          <ul>
            ${p.spesifikasi.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <a
          href="https://wa.me/${p.whatsapp}?text=Halo%20saya%20ingin%20pesan%20${encodeURIComponent(p.nama)}"
          target="_blank"
          class="btn-order"
        >
          Pesan
        </a>
      </div>
    `;
  });

  document.getElementById("pageInfo").innerText =
    `${currentPage} / ${Math.ceil(dataProduk.length / perPage)}`;
}

function nextPage() {
  if (currentPage < Math.ceil(dataProduk.length / perPage)) {
    currentPage++;
    renderProduk();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProduk();
  }
}

renderProduk();
