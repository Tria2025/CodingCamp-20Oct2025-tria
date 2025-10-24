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
    document.getElementById('greet-name').innerHTML = `Hi ${name}`; // Hanya update nama di span
}

/// Function to validate form inputs and display them
function validateForm(event) {
    event.preventDefault(); // Mencegah form melakukan submit default

    // Get form input values
    // Mengambil nilai Nama
    const name = document.getElementById('name-input').value;

    // Mengambil nilai Tanggal Lahir
    const dateOfBirth = document.getElementById('date-input').value;

    // Mengambil nilai Jenis Kelamin
    // Menggunakan querySelector untuk mendapatkan nilai radio button yang terpilih
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const gender = selectedGender ? selectedGender.value : ""; // Ambil nilai jika terpilih, jika tidak, kosongkan

    // Mengambil nilai Email
    const email = document.getElementById('email-input').value;

    // Mengambil nilai Nomor Telepon
    const phone = document.getElementById('phone-input').value;

    // Mengambil nilai Pesan
    const message = document.getElementById('message-input').value;

    // Check if any required field is empty
    // Memeriksa semua kolom wajib diisi (termasuk Tanggal Lahir dan Jenis Kelamin)
    if (name.trim() === "" || dateOfBirth.trim() === "" || gender.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
        /// Show alert if any field is empty
        alert("Semua kolom (Nama, Tanggal Lahir, Jenis Kelamin, Email, Nomor Telepon, Pesan) wajib diisi.");
        return; // Hentikan eksekusi jika ada field yang kosong
    }

    // Update the submission output section
    // Memperbarui output dengan semua data baru
    document.getElementById('submission-output').innerHTML = `
        <li><span class="font-bold">Nama :</span> ${name}</li>
        <li><span class="font-bold">Tanggal Lahir :</span> ${dateOfBirth}</li>
        <li><span class="font-bold">Jenis Kelamin :</span> ${gender}</li>
        <li><span class="font-bold">Email :</span> ${email}</li>
        <li><span class="font-bold">Nomor Telepon :</span> ${phone}</li>
        <li><span class="font-bold">Pesan :</span> ${message}</li>
    `;

    /// Show success message
    alert(`Terima kasih ${name}, pesan Anda berhasil dikirim! Data ditampilkan pada Current Information.`);

    // Opsional: Clear the form after successful submission
    document.getElementById('message-form').reset();
}