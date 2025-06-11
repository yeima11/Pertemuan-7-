const fallContainer = document.getElementById('fall-container');
const emojis = ['🧍‍♂️', '🧍‍♀️', '👨‍🚀', '👩‍💼', '🕵️‍♂️', '👨‍🔧', '🧑‍🎤', '🧛‍♂️'];

function createFallingCharacter() {
  const char = document.createElement('div');
  char.className = 'falling-character';
  char.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // Posisi dan gaya acak
  const size = Math.random() * 20 + 24; // 24 - 44px
  const left = Math.random() * 100; // %
  const duration = Math.random() * 3 + 3; // 3 - 6s

  char.style.left = `${left}%`;
  char.style.fontSize = `${size}px`;
  char.style.animationDuration = `${duration}s`;

  fallContainer.appendChild(char);

  // Hapus saat selesai animasi
  char.addEventListener('animationend', () => {
    char.remove();
  });
}

// Tambahkan karakter tiap 300ms
setInterval(createFallingCharacter, 300);
