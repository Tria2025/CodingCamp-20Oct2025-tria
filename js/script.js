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
    const dateOfBirth = document.getElementById('date-input').value;
    const message = document.getElementById('message-input').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderValue = gender ? gender.value : "";

    // Check if any required field is empty
    if (name.trim() === "" || dateOfBirth === "" || message.trim() === "" || genderValue === "") {
        /// Show alert if any field is empty
        alert("Semua kolom (Nama, Tanggal Lahir, Jenis Kelamin, Pesan) wajib diisi.");
        return; // Hentikan eksekusi jika ada field yang kosong
    }

    // Format tanggal lahir
    const [year, month, day] = dateOfBirth.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    // Update the submission output section
    document.getElementById('submission-output').innerHTML = `
        <li><span class="font-bold">Nama :</span> ${name}</li>
        <li><span class="font-bold">Tanggal Lahir :</span> ${formattedDate}</li>
        <li><span class="font-bold">Jenis Kelamin :</span> ${genderValue}</li>
        <li><span class="font-bold">Pesan :</span> ${message}</li>
    `;

    /// Show success message
    alert(`Terima kasih ${name}, pesan Anda berhasil dikirim! Data ditampilkan pada Current Information.`);

    // Opsional: Clear the form after successful submission
    document.getElementById('message-form').reset();
}