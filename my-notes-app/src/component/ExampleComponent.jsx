import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  // Menggunakan useState untuk membuat state dengan nilai awal 0
  const [count, setCount] = useState(0);

  // Menggunakan useEffect untuk menangani efek samping (side effect)
  useEffect(() => {
    // Kode di dalam blok ini akan dijalankan setiap kali komponen di-render

    // Contoh: Mengubah judul halaman setiap kali nilai count berubah
    document.title = `Count: ${count}`;

    // Cleanup function: akan dijalankan saat komponen di-unmount
    return () => {
      document.title = 'React App'; // Reset judul halaman
    };
  }, [count]); // Array dependensi, efek hanya dijalankan jika nilai count berubah

  return (
    <div>
      <p>Count: {count}</p>
      {/* Tombol untuk menambah nilai count */}
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default ExampleComponent;
