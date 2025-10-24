// Memanggil fungsi welcomeSpeech saat halaman dimuat
welcomeSpeech();

// Menampilkan waktu saat ini di Message Us
document.getElementById('current-time').innerHTML = new Date().toLocaleString('en-GB', { timeZoneName: 'short' });

/// Function to show welcome speech
function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Jika pengguna membatalkan prompt atau memasukkan nama kosong, gunakan 'Tria' sebagai default
    if (!name || name.trim() === "") {
        name = "Tria";
    }
    
    // Greet the user with their name and update the home section
    document.getElementById('greet-name').innerHTML = `${name}`; // Hanya update nama di span
}

/// Function to validate form inputs and display them
function validateForm(event) {
    event.preventDefault(); // Mencegah form melakukan submit default

    // Get form input values
    const name = document.getElementById('name-input').value;
    // Mengambil nilai Email
    const email = document.getElementById('email-input').value;
    // Mengambil nilai Nomor Telepon
    const phone = document.getElementById('phone-input').value;
    const message = document.getElementById('message-input').value;

    // Check if any required field is empty
    // Memeriksa Nama, Email, Nomor Telepon, dan Pesan
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
        /// Show alert if any field is empty
        alert("Semua kolom (Nama, Email, Nomor Telepon, Pesan) wajib diisi.");
        return; // Hentikan eksekusi jika ada field yang kosong
    }

    // Update the submission output section
    // Memperbarui output dengan Email dan Nomor Telepon
    document.getElementById('submission-output').innerHTML = `
        <li><span class="font-bold">Nama :</span> ${name}</li>
        <li><span class="font-bold">Email :</span> ${email}</li>
        <li><span class="font-bold">Nomor Telepon :</span> ${phone}</li>
        <li><span class="font-bold">Pesan :</span> ${message}</li>
    `;

    /// Show success message
    alert(`Terima kasih ${name}, pesan Anda berhasil dikirim! Data ditampilkan pada Current Information.`);

    // Opsional: Clear the form after successful submission
    document.getElementById('message-form').reset();
}