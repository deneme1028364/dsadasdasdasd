// Giriş ekranı 3 saniye sonra kaybolacak ve ana içerik görünecek
setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 3000);

// Kullanıcı ismini girdikten sonra sohbeti başlatacak
function startChat() {
    const username = document.getElementById('username').value;

    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        // İsim girildikten sonra chat ve kanallar görünsün
        document.getElementById('name-input').style.display = 'none';
        loadChannels();  // Kanalları yükler
    } else {
        alert("Lütfen isminizi girin.");
    }
}

// Kanalları yükleme
function loadChannels() {
    const username = localStorage.getItem('username');
    document.getElementById('channels').style.display = 'block';  // Kanalları göster

    document.getElementById('channels').innerHTML = `
        <div class="channel" id="main-menu">
            <h2>Ana Menü - Programmer By: BLODWHITE</h2>
            <p>Hoş geldin, ${username}</p>
        </div>
        <div class="channel" id="chat-channel">
            <h2>Chat Kanalı</h2>
            <p>Burada sohbet başlayacak.</p>
        </div>
        <div class="channel" id="anonymous-channel">
            <h2>Anonim Kanal</h2>
            <p>Anonim sohbet için buraya tıklayın.</p>
        </div>
    `;
}